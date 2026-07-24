import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDirectory = path.resolve("public");
const minimumSize = 1024 * 1024;
const convertibleExtensions = new Set([".png", ".svg"]);

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

const files = await collectFiles(publicDirectory);
const candidates = [];

for (const filePath of files) {
  const extension = path.extname(filePath).toLowerCase();
  const stats = await fs.stat(filePath);

  if (convertibleExtensions.has(extension) && stats.size > minimumSize) {
    candidates.push({ filePath, originalSize: stats.size });
  }
}

for (const { filePath, originalSize } of candidates) {
  const outputPath = filePath.replace(/\.(png|svg)$/i, ".webp");

  await sharp(filePath, { limitInputPixels: false })
    .webp({
      quality: 88,
      alphaQuality: 95,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outputPath);

  const [optimizedStats, metadata] = await Promise.all([
    fs.stat(outputPath),
    sharp(outputPath).metadata(),
  ]);

  console.log(
    [
      path.relative(publicDirectory, filePath),
      `${metadata.width}x${metadata.height}`,
      `${(originalSize / 1024 / 1024).toFixed(2)} MB`,
      `${(optimizedStats.size / 1024 / 1024).toFixed(2)} MB`,
    ].join(" | "),
  );
}
