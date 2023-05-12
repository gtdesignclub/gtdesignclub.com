const contentfulLoader = ({
  src,
  quality,
  width,
}: {
  src: string;
  quality: number;
  width: number;
}) => {
  const url = new URL(`https:${src}`);
  url.searchParams.set("fm", "webp");
  url.searchParams.set("w", width.toString());
  url.searchParams.set("q", quality.toString() || "75");
  return url.href;
};
export default contentfulLoader;
