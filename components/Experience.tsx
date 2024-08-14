import React from "react";

import { workExperience } from "@/static";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience" >
      <h1 className="heading title mx-auto max-w-sm justify-center  ">
        My
        <br /> <span className="text-teal">Work&nbsp;experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              // background: "rgb(4,7,29)",
              // backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 rounded text-black dark:bg-teal bg-teal-100 -800 dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold title dark: text-white  ">
                  {card.title}
                </h1>
                <p className="text-start dark:text-teal-100 text-white mt-3 font-medium body tracking-wider ">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
