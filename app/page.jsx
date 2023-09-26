import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export const metadata = {
  title: "Emmanuel Okon",
  description: "Emmanuel Okon Portfolio",
  keywords: ["portfolio", "emmanuel okon", "developer", "frontend"],
};

export default function Home() {
  return (
    <main >
      <Hero />
      <Stack />
      <Projects />
      <Footer />
    </main>
  );
}
