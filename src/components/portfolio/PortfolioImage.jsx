import NextImage from "next/image";

export default function PortfolioImage({
  decoding = "async",
  unoptimized = true,
  ...props
}) {
  return (
    <NextImage
      {...props}
      decoding={decoding}
      unoptimized={unoptimized}
    />
  );
}
