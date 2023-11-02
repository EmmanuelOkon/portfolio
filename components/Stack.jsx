import git from "../public/git.png";
import styledcomponent from "../public/styledcomponent.png";
import redux from "../public/redux.png";
import react from "../public/react.svg";
import javascript from "../public/javascript.svg";
import typescript from "../public/typescript.png";
import gatsby from "../public/gatsby.svg";
import Image from "next/image";

const partners = [
  {
    name: "JavaScript",
    image: javascript,
  },
  {
    name: "React JS",
    image: react,
  },
  {
    name: "TypeScript",
    image: typescript,
  },
  {
    name: "Redux",
    image: redux,
  },
  {
    name: "Git",
    image: git,
  },
  {
    name: "Styled Components",
    image: styledcomponent,
  },
  {
    name: "Gatsby",
    image: gatsby,
  },
];

const Stack = () => {
  return (
    <div className="flex bg-blue py-4 lg:py-16 ">
      <div className="px-[20px] lg:px-[45px] xl:px[100px]  mx-auto ">
        <div className="xl:flex justify-center xl:gap-8">
          <div className=" text-center font-poppins">
            <h2 className="text-orange font-roboto text-3xl lg:text-[45px] font-bold lg:leading-none tracking-tight">
              My Skills
            </h2>
          </div>
        </div>
        <div className="mt-4 md:mt-8 px-8 w-full ">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 rotateRightToLeft">
            {partners.map((partner, index) => (
              <div key={index}>
                <div className="w-[100px] md:w-[150px] hover:cursor-pointer py-4 md:py-6 flex-wrap flex flex-col justify-cente items-center">
                  <Image width={50} height={50} src={partner.image} alt={partner.name} className="" />
                  <span className="text-white pt-1">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
