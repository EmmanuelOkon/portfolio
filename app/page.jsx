import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Emmanuel Okon",
  description: "Emmanuel Okon Portfolio",
  keywords: ["portfolio", "emmanuel okon", "developer", "frontend"],
};

export default function Home() {
  return (
    <main >
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
