import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/static";

export const Grid = () => {
  return (
    <section id="about">
      {/* <BentoGrid className="max-w[1200px] mt-24 md:mt-32 xl:mt-40 mx-auto md:auto-rows[20rem] hidde"> */}
      <BentoGrid className="w-full py-20">
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
