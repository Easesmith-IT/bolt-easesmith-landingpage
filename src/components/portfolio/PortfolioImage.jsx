import NextImage from "next/image";

export default function PortfolioImage({ unoptimized = true, ...props }) {
  return <NextImage {...props} unoptimized={unoptimized} />;
}
