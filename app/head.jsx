export const metadata = {
  title: "Emmanuel Okon",
  description: "Emmanuel Okon Portfolio",
  keywords: ["portfolio", "emmanuel okon", "developer", "frontend"],
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />
    </>
  );
}
