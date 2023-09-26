"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      name: "MovieBox",
      image: "/moviebox.png",
      stack: "React, Next.js, TailwindCSS",
      href: "https://moviebox-whiteblack.vercel.app/",
    },
    {
      name: "Crown Shops",
      image: "/Crwn.png",
      stack: "React, Next.js, TailwindCSS",
      href: "https://crownshops.netlify.app/",
    },
    {
      name: "Matriks Hub",
      image: "/Matriks.png",
      stack: "React, Next.js, TailwindCSS",
      href: "https://www.matrikshub.com/",
    },
    {
      name: "IMDb Clone",
      image: "/IMDb.png",
      stack: "React, Next.js, TailwindCSS",
      href: "https://imdbmovies-clone.vercel.app/?genre=fetchTopRated",
    },
  ];

  return (
    <>
      <div className="bg-blue px-4 md:px-20">
      <div>
        <h1 className="text-3xl md:text:5xl text-orange font-poppins py-3 text-center md:py-10 font-bold">My Projects</h1>
      </div>
        <div className="bg-blu grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" flex justify-center w-full cursor-pointer group hover:shadow-md transition-shadow duration-200"
            >
              <Link href={project.href} className="bg-blue flex flex-col w-[550px] justify-center">
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
                  
                  <h2 className="font-dmsans text-[22px] md:text-xl md:py-2 font-bold text-orange">
                    {project.name}
                  </h2>

                  <div className="flex items-center justify-between mt-4">
                    
                    <p className="text-lightGray font-dmsans font-medium">
                      {project.stack}
                    </p>
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
