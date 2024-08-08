// "use client";

// import * as React from "react";
import MagicButton, { RightArrow } from "./ui/MagicButton";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.01] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/**
         *  UI: shooting-stars-and-stars-background
         * https://ui.aceternity.com/components/shooting-stars-and-stars-background
         */}
        <ShootingStars className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
        <StarsBackground className="h-screen w-screen" />
        {/* Radial gradient for the container to give a faded look */}
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className=" title tracking-widest text-xs md:text-sm text-center text-blue-100 max-w-80">
            Dynamic Frontend Maestro
          </p>

          <TextGenerateEffect
            words="Hi there, I'm Emmanuel&nbsp;Okon"
            className="text-center px-2 text-[35px] md:text-[48px] md:text5xl lg:text-[60px] lg:text-6xl title leadingtight bgred-800 "
          />

          <p className="text-center max-w-[60%] md:tracking-wider mb-4 text-lg md:text-xl lg:text-2xl body">
            Pushing the Boundaries of Interactive Design
          </p>

          <MagicButton
            title="See my work"
            // icon={<RightArrow />}
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="title"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
