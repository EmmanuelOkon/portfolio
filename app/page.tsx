"use client";

import { navItems } from "@/static";
import * as React from "react";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import ModeToggle from "@/components/ThemeToggle";
import { useTheme } from "next-themes";
import { TechStack } from "@/components/TechStack";
import { toast } from "sonner";

const Home = () => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // React.useEffect(() => {
  //   toast.success("Theme changed successfully!", {
  //     position: "bottom-center",
  //     className: "bg-red-900"
  //   });
  // }, [theme]);

  return (
    <>
      <ModeToggle toggleTheme={toggleTheme} theme={theme as string} />
      <main className="relative bg-white dark:bg-teal-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNavbar
            navItems={navItems}
            className="bg-teal/30 dark:bg-transparent"
          />
          <Hero />
          <Grid />

          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
