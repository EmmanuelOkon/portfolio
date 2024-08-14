"use client";

import React from "react";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { navItems } from "@/static";

type IconProps = React.HTMLAttributes<SVGElement>;

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-md p-[1px]"
        as="button"
        className={`bg-teal-100 dark:hover:bg-teal-800 transition-all duration-200 ease-in-out dark:bg-teal font-medium text-white flex items-center space-x-2 gap-2 ${otherClasses} `}
        onClick={handleClick}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </HoverBorderGradient>
    </div>
  );
};

export default MagicButton;

export const RightArrow = (props: IconProps) => {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
      {...props}
    >
      <path
        d="M0.292893 11.7929C-0.0976311 12.1834 -0.0976311 12.8166 0.292893 13.2071C0.683418 13.5976 1.31658 13.5976 1.70711 13.2071L0.292893 11.7929ZM13 1.5C13 0.947715 12.5523 0.5 12 0.5L3 0.500001C2.44771 0.5 2 0.947716 2 1.5C2 2.05228 2.44772 2.5 3 2.5L11 2.5L11 10.5C11 11.0523 11.4477 11.5 12 11.5C12.5523 11.5 13 11.0523 13 10.5L13 1.5ZM1.70711 13.2071L12.7071 2.20711L11.2929 0.792894L0.292893 11.7929L1.70711 13.2071Z"
        fill="currentColor"
      />
    </svg>
  );
};
