"use client";

import Image from "next/image";
import Link from "next/link";
import styledcomponent from "../public/styledcomponent.png";
import redux from "../public/redux.png";
import react from "../public/react.svg";
import javascript from "../public/javascript.svg";
import typescript from "../public/typescript.png";
import Next from "../public/next.svg";
import Tailwind from "../public/tailwind.svg";
import Firebase from "../public/firebase.svg";
import gatsby from "../public/gatsby.svg";

export default function Projects() {
  const projects = [
    {
      name: "MovieBox",
      image: "/moviebox.png",
      stack: [javascript, react, Next, Tailwind],
      href: "https://moviebox-whiteblack.vercel.app/",
    },
    {
      name: "Crown Shops",
      image: "/Crwn.png",
      stack: [react, Next, styledcomponent, Firebase, redux],
      href: "https://crownshops.netlify.app/",
    },
    {
      name: "Car Rentals App",
      image: "/car-rentals.png",
      stack: [javascript, Next, typescript, Tailwind],
      href: "https://car-rentalshub.vercel.app/",
    },
    {
      name: "Matriks Hub",
      image: "/Matriks.png",
      stack: [react, gatsby, Tailwind],
      href: "https://www.matrikshub.com/",
    },
    {
      name: "IMDb Clone",
      image: "/IMDb.png",
      stack: [javascript, Next, Tailwind],
      href: "https://imdbmovies-clone.vercel.app/?genre=fetchTopRated",
    },
  ];

  return (
    <>
      <div className="bg-blue px-4 md:px-20">
        <div>
          <h1 className="text-3xl md:text:5xl text-orange font-poppins py-3 text-center md:py-10 font-bold pb-6">
            My Projects
          </h1>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" flex justify-center w-full bgdeepOrange hover:bgrose hover:bg-opacity-5 cursor-pointer group hover:shadow-md transition-shadow duration-200 mb-4"
            >
              <Link
                href={project.href}
                className="bgblue hover:bg-opacity-70 flex flex-col w-[550px] justify-center"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={100}
                  className="group-hover:opacity-80 transition-opacity duration-200"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <div className="py-2 px-3 flex flex-col justify-between">
                  <h2 className="font-roboto tracking-wide text-[22px] md:text-xl md:py-2 font-bold text-orange">
                    {project.name}
                  </h2>

                  <div className="flex items-center mt-4 bg-white bg-opacity-20 w-fit rounded-sm py-2">
                    {project.stack.map((stackItem, stackIndex) => (
                      <div className="bgoffWhite mx-2 h-fit w-auto flex items-center">

                        <Image
                          key={stackIndex}
                          src={stackItem}
                          alt={`${project.name} Stack ${stackIndex}`}
                          width={40}
                          height={40}
                          className="mx-2"
                        />
                      </div>

                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
