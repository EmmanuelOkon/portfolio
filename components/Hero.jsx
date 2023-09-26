import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

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
            <p className="mt-3 max-w-md mx-auto font-raleway text-lg sm:text-xl md:mt-5 md:max-w-3xl text-gradient-to-r from-orange to-blue text[#00F5A0] text-white ">
              Experienced and results-oriented Frontend Developer, with over 3
              years of experience. Offering a strong attention to UI detail and
              accuracy, effective problem-solving skills, and possessing the
              important ability to work in fast-paced team environments.
            </p>
            <div className="mt-10 sm:flex sm:justify-center ">
              <div className="mt-3 rounded-md shadow sm:mt-0 ">
                <Link
                  href="mailto:emmahhokon@gmail.com"
                  className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-orange hover:bg-fadeOrange hover:text-orange border-2 border-orange md:py-3 md:text-lg md:px-8"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
