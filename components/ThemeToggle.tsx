"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

interface ModeProps {
  toggleTheme: () => void;
  theme: string;
}

const ModeToggle: React.FC<ModeProps> = ({ toggleTheme, theme }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents mismatched initial render
  }

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-4 text-gray-900 dark:text-white text-xs"
      >
        {theme === "dark" ? (
          <span className="flex items-center w-full gap-3">
            <Sun className="text-gray-900 dark:text-white" />
            <span>Light</span>
          </span>
        ) : (
          <span className="flex items-center w-full gap-3">
            <Moon className="text-gray-900 dark:text-white" />
            <span>Dark</span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ModeToggle;
