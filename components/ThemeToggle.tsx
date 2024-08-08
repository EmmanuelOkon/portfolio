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
    <div className="fixed bottom-0 right-0 m-2 sm:m-4 lg:m-8 bg-purple dark:bg-ed-600 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:shadow-md rounded-full z-[7000] ">
      <button
        onClick={toggleTheme}
        className="float-end p-2 text-gray-900 dark:text-white"
      >
        {theme === "dark" ? (
          <span className="flex items-center justify-center">
            <Sun className="w-4 h-4 md:h-6 md:w-6 text-gray-900 dark:textwhite" />
          </span>
        ) : (
          <span className="flex items-center justify-center">
            <Moon className="w-4 h-4 md:h-6 md:w-6 text-gray-900 dark:text-white" />
          </span>
        )}
      </button>
    </div>
  );
};

export default ModeToggle;
