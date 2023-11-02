"use client"

import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";


const partners = [
  {
    name: "Github",
    icon: BiLogoGithub,
    href: "https://github.com/EmmanuelOkon",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    href: "https://twitter.com/EO_Udo",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/eo-udo/",
  },
];

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className=" text-center bg-blue px-4 lg:pb-20 pt-10  lg:px-20">
        <div className="mx-auto py-5 text-center ">
          <div className="sm:px-1">
            <span className="text-white font-raleway">Frontend Engineer</span>
            <h1 className="font-poppins text-4xl lg:tracking-wide font-bold text-orange lg:text-7xl">
              Emmanuel Okon
            </h1>
            <p className="mt-3 max-w-md mx-auto font-raleway text-lg sm:text-xl md:mt-5 md:max-w-3xl text-gradient-to-r from-orange to-blue text[#00F5A0] text-white">
            I am a Frontend Developer based in Uyo, Nigeria, with over 3 years of experience. I am a results-oriented developer with a strong focus on UI design and precision. I excel in problem-solving and have the essential ability to thrive in fast-paced team environments.
            </p>
            <div className="mt-4 md:mt-8 px-8 w-full ">
              <div className="flex flex-wrap items-center justify-center gap-10 rotateRightToLeft">
                {partners.map((partner, index) => (
                  <Link key={index} target="_blank" href={partner.href}>
                    <div className="bg-orange hover:bg-fadeOrange  text-white hover:text-orange hover:cursor-pointer py-3 px-3 rounded-md flex-wrap flex items-center hover:scale-110  ">
                      <partner.icon
                        width={50}
                        height={50}
                        src={partner.icon}
                        className="w-6 h-6 hover:cursor-pointer"
                      />
                      <span className=" font-medium pl-1 ">{partner.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* <div className="mt-10 sm:flex sm:justify-center ">
              <div className="mt-3 rounded-md shadow sm:mt-0 ">
                <Link
                  href="mailto:emmahhokon@gmail.com"
                  className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-orange hover:bg-fadeOrange hover:text-orange border-2 border-orange md:py-3 md:text-lg md:px-8"
                >
                  Contact Me
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
