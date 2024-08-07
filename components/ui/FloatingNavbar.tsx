import React from "react";
import ModeToggle from "../ThemeToggle";
import { useTheme } from "next-themes";

export function FloatingNavbar() {
    const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  return (
    <div>
      <ModeToggle toggleTheme={toggleTheme} theme={theme as string} />
      FloatingNavbar
    </div>
  );
}
