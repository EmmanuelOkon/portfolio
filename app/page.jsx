import Hero from "@/components/Hero";

export const metadata = {
  title: "Emmanuel Okon",
  description: "Emmanuel Okon Portfolio",
  keywords: ["portfolio", "emmanuel okon", "developer", "frontend"],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
    </main>
  );
}
