import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const workspaceDirectory = path.resolve(".");
const portfolioDirectory = path.join(workspaceDirectory, "public", "portfolio");
const sourceDirectory = path.join(workspaceDirectory, "src");
const manifestPath = path.join(
  workspaceDirectory,
  "scripts",
  "portfolio-lossless-webp.json",
);
const convertibleExtensions = new Set([".png", ".jpg", ".jpeg"]);
const sourceExtensions = new Set([".js", ".jsx", ".ts", ".tsx", ".css", ".json"]);

async function collectFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map((entry) => {
      const filePath = path.join(directory, entry.name);
      return entry.isDirectory() ? collectFiles(filePath) : [filePath];
    }),
  );

  return nestedFiles.flat();
}

function publicUrl(filePath) {
  return `/${path
    .relative(path.join(workspaceDirectory, "public"), filePath)
    .split(path.sep)
    .join("/")}`;
}

async function retryFileOperation(operation, attempts = 8) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      if (
        !["EBUSY", "EPERM"].includes(error.code) ||
        attempt === attempts
      ) {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, attempt * 100));
    }
  }
}

async function hasIdenticalPixels(sourcePath, convertedBuffer) {
  const [source, converted] = await Promise.all([
    sharp(sourcePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true }),
    sharp(convertedBuffer)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true }),
  ]);

  return (
    source.info.width === converted.info.width &&
    source.info.height === converted.info.height &&
    source.info.channels === converted.info.channels &&
    source.data.equals(converted.data)
  );
}

const portfolioFiles = await collectFiles(portfolioDirectory);
const candidates = portfolioFiles.filter((filePath) =>
  convertibleExtensions.has(path.extname(filePath).toLowerCase()),
);
const accepted = [];
const rejected = [];

for (const [index, sourcePath] of candidates.entries()) {
  const outputPath = sourcePath.replace(/\.(png|jpe?g)$/i, ".webp");
  const sourceStats = await fs.stat(sourcePath);

  const convertedBuffer = await sharp(sourcePath, { limitInputPixels: false })
    .webp({ lossless: true, effort: 6 })
    .toBuffer();

  const pixelsMatch = await hasIdenticalPixels(sourcePath, convertedBuffer);
  const isSmaller = convertedBuffer.length < sourceStats.size;

  if (pixelsMatch && isSmaller) {
    await retryFileOperation(() => fs.writeFile(outputPath, convertedBuffer));
    accepted.push({
      source: publicUrl(sourcePath),
      output: publicUrl(outputPath),
      sourceBytes: sourceStats.size,
      outputBytes: convertedBuffer.length,
      savedBytes: sourceStats.size - convertedBuffer.length,
    });
  } else {
    rejected.push({
      source: publicUrl(sourcePath),
      reason: pixelsMatch ? "not-smaller" : "pixel-mismatch",
    });
  }

  if ((index + 1) % 10 === 0 || index + 1 === candidates.length) {
    console.log(`Processed ${index + 1}/${candidates.length}`);
  }
}

const sourceFiles = (await collectFiles(sourceDirectory)).filter((filePath) =>
  sourceExtensions.has(path.extname(filePath).toLowerCase()),
);
let updatedSourceFiles = 0;

for (const filePath of sourceFiles) {
  const original = await fs.readFile(filePath, "utf8");
  let updated = original;

  for (const asset of accepted) {
    updated = updated.replaceAll(asset.source, asset.output);
  }

  if (updated !== original) {
    await fs.writeFile(filePath, updated);
    updatedSourceFiles += 1;
  }
}

const sourceBytes = accepted.reduce((total, item) => total + item.sourceBytes, 0);
const outputBytes = accepted.reduce((total, item) => total + item.outputBytes, 0);
const manifest = {
  generatedAt: new Date().toISOString(),
  mode: "lossless-webp",
  pixelVerification: true,
  candidates: candidates.length,
  accepted: accepted.length,
  rejected: rejected.length,
  updatedSourceFiles,
  sourceBytes,
  outputBytes,
  savedBytes: sourceBytes - outputBytes,
  assets: accepted,
  rejectedAssets: rejected,
};

await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(
  [
    `Accepted ${accepted.length}/${candidates.length}`,
    `Updated ${updatedSourceFiles} source files`,
    `Saved ${((sourceBytes - outputBytes) / 1024 / 1024).toFixed(2)} MB`,
    "Pixel verification passed for every accepted image",
  ].join(" | "),
);
