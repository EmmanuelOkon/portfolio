"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/static";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading title max-w-md mx-auto ">
        A small selection of{" "}
        <span className="text-teal">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl dark:bg-teal bg-teal-100"
                  // style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 title dark:text-white text-teal-100 ">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 body text-teal-100 dark:text-white-100 "
                style={{
                  
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center text-teal-100 hover:text-teal dark:text-teal dark:hover:text-teal-800 ">
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex lg:text-xl md:text-xs text-sm body"
                  >
                    Check Live Site
                  </Link>
                  <FaLocationArrow className="ms-3" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
