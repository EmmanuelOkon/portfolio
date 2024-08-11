import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { Icons } from "@/public/stack/icons";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "ReactJS",

    icon: Icons.reactjs,
  },
  {
    id: 2,
    name: "NextJS",

    icon: Icons.nextjs,
  },
  {
    id: 3,
    name: "Typescript",

    icon: Icons.typescript,
  },
  {
    id: 4,
    name: "MongoDB",

    icon: Icons.mongoDb,
  },
  {
    id: 5,
    name: "TailwindCSS",

    icon: Icons.tailwind,
  },
  {
    id: 6,
    name: "Bootstrap",

    icon: Icons.bootstrap,
  },
  {
    id: 7,
    name: "Styled Components",

    icon: Icons.airtable,
  },
  {
    id: 8,
    name: "React-Redux",

    icon: Icons.redux,
  },
  {
    id: 9,
    name: "Firebase",

    icon: Icons.firebase,
  },
  {
    id: 10,
    name: "Stripe",
    icon: Icons.airtable,
  },
  {
    id: 11,
    name: "React Query",

    icon: Icons.airtable,
  },
  {
    id: 12,
    name: "Git",
    icon: Icons.git,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  id,
  name,
  icon: IconComponent,
}: {
  id: number;
  name: string;
  icon?: React.ElementType;
}) => {
  return (
    <figure
      className={cn(
        "relative h-fit 40 w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div key={id} className="flex flex-row items-center gap-2">
        {IconComponent && (
          <IconComponent className="bg-white rounded-md w-8 h-8" />
        )}

        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function TechStack() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
