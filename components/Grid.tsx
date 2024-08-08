import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/static";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="max-w[1200px] mt-24 md:mt-32 xl:mt-40 mx-auto md:auto-rows-[20rem] hidde">
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              // remove icon prop
              // remove original className condition
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;


// import { IconClipboardCopy } from "@tabler/icons-react";

// export function BentoGridSecondDemo() {
//   return (
//     <BentoGrid className="max-w-[1200px] mt-24 md:mt-32 xl:mt-40 mx-auto md:auto-rows-[20rem]">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           className={item.className}
//           icon={item.icon}
//         />
//       ))}
//     </BentoGrid>
//   );
// }
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
// );
// const items = [
//   {
//     id: 1,
//     title: "I prioritize client collaboration, fostering open communication ",
//     description: "",
//     className: "md:col-span-2 md:row-span-2  ",
//     img: "/b1.svg",
//     spareImg: "",
//   },
//   {
//     id: 2,
//     title: "I'm very flexible with time zone communications",
//     description: "",
//     header: <Skeleton />,
//     className: "md:col-span-1 md:row-span-1  ",
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     id: 3,
//     title: "My tech stack",
//     description: "I constantly try to improve",
//     className: "lg:col-span-1 md:col-span-1",
//     imgClassName: "",
//     titleClassName: "justify-center",
//     img: "",
//     spareImg: "",
//   },
//   {
//     id: 4,
//     title: "Tech enthusiast with a passion for development.",
//     description: "",
//     className: "lg:col-span-1  md:col-span3 md:row-span-1",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "/grid.svg",
//     spareImg: "/b4.svg",
//   },
//   {
//     id: 5,
//     title: "Currently building a JS Animation library",
//     description: "The Inside Scoop",
//     className: "md:col-span-2 md:row-span-2",
//     imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
//     titleClassName: "justify-center md:justify-start lg:justify-center",
//     img: "/b5.svg",
//     spareImg: "/grid.svg",
//   },
//   {
//     id: 6,
//     title:
//       "Do you want to start a project together?",
//     description: "",
//     className: "lg:col-span-1 md:col-span-1",
//     imgClassName: "",
//     titleClassName: "justify-center md:max-w-full max-w-60 text-center",
//     img: "",
//     spareImg: "",
//   },
// ];
