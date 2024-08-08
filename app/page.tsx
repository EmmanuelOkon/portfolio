"use client";

import { navItems } from "@/static";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
// import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
// import Experience from "@/components/Experience";
// import RecentProjects from "@/components/RecentProjects";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import ModeToggle from "@/components/ThemeToggle";
import { useTheme } from "next-themes";
// import { BentoGridSecondDemo } from "@/components/Grid";

const Home = () => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ModeToggle toggleTheme={toggleTheme} theme={theme as string} />
      <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNavbar navItems={navItems} />
          <Hero />
          <Grid />
          {/* <BentoGridSecondDemo /> */}
          {/* <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer /> */}
        </div>
      </main>
    </>
  );
};

export default Home;
