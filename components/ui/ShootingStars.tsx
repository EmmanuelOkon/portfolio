// "use client";
// import { cn } from "@/lib/utils";
// import React, { useEffect, useState, useRef } from "react";

// interface ShootingStar {
//   id: number;
//   x: number;
//   y: number;
//   angle: number;
//   scale: number;
//   speed: number;
//   distance: number;
// }

// interface ShootingStarsProps {
//   minSpeed?: number;
//   maxSpeed?: number;
//   minDelay?: number;
//   maxDelay?: number;
//   starColor?: string;
//   trailColor?: string;
//   starWidth?: number;
//   starHeight?: number;
//   className?: string;
// }

// const getRandomStartPoint = () => {
//   const side = Math.floor(Math.random() * 4);
//   const offset = Math.random() * window.innerWidth;

//   switch (side) {
//     case 0:
//       return { x: offset, y: 0, angle: 45 };
//     case 1:
//       return { x: window.innerWidth, y: offset, angle: 135 };
//     case 2:
//       return { x: offset, y: window.innerHeight, angle: 225 };
//     case 3:
//       return { x: 0, y: offset, angle: 315 };
//     default:
//       return { x: 0, y: 0, angle: 45 };
//   }
// };
// export const ShootingStars: React.FC<ShootingStarsProps> = ({
//   minSpeed = 2,
//   maxSpeed = 5,
//   minDelay = 1200,
//   maxDelay = 4200,
//   starColor = "#9E00FF",
//   trailColor = "#2EB9DF",
//   starWidth = 10,
//   starHeight = 1,
//   className,
// }) => {
//   const [star, setStar] = useState<ShootingStar | null>(null);
//   const svgRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     const createStar = () => {
//       const { x, y, angle } = getRandomStartPoint();
//       const newStar: ShootingStar = {
//         id: Date.now(),
//         x,
//         y,
//         angle,
//         scale: 1,
//         speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
//         distance: 0,
//       };
//       setStar(newStar);

//       const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
//       setTimeout(createStar, randomDelay);
//     };

//     createStar();

//     return () => {};
//   }, [minSpeed, maxSpeed, minDelay, maxDelay]);

//   useEffect(() => {
//     const moveStar = () => {
//       if (star) {
//         setStar((prevStar) => {
//           if (!prevStar) return null;
//           const newX =
//             prevStar.x +
//             prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
//           const newY =
//             prevStar.y +
//             prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
//           const newDistance = prevStar.distance + prevStar.speed;
//           const newScale = 1 + newDistance / 100;
//           if (
//             newX < 0 ||
//             newX > window.innerWidth ||
//             newY < 0 ||
//             newY > window.innerHeight
//           ) {
//             return null;
//           }
//           return {
//             ...prevStar,
//             x: newX,
//             y: newY,
//             distance: newDistance,
//             scale: newScale,
//           };
//         });
//       }
//     };
//     // const moveStar = () => {
//     //   if (star) {
//     //     setStar((prevStar) => {
//     //       if (!prevStar) return null;
//     //       const newX =
//     //         prevStar.x +
//     //         prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
//     //       const newY =
//     //         prevStar.y +
//     //         prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
//     //       const newDistance = prevStar.distance + prevStar.speed;
//     //       const newScale = 1 + newDistance / 100;
//     //       if (
//     //         newX < -20 ||
//     //         newX > window.innerWidth + 20 ||
//     //         newY < -20 ||
//     //         newY > window.innerHeight + 20
//     //       ) {
//     //         return null;
//     //       }
//     //       return {
//     //         ...prevStar,
//     //         x: newX,
//     //         y: newY,
//     //         distance: newDistance,
//     //         scale: newScale,
//     //       };
//     //     });
//     //   }
//     // };

//     const animationFrame = requestAnimationFrame(moveStar);
//     return () => cancelAnimationFrame(animationFrame);
//   }, [star]);

//   return (
//     <svg
//       ref={svgRef}
//       className={cn("w-full h-full absolute inset-0", className)}
//     >
//       {star && (
//         <rect
//           key={star.id}
//           x={star.x}
//           y={star.y}
//           width={starWidth * star.scale}
//           height={starHeight}
//           fill="url(#gradient)"
//           transform={`rotate(${star.angle}, ${
//             star.x + (starWidth * star.scale) / 2
//           }, ${star.y + starHeight / 2})`}
//         />
//       )}
//       <defs>
//         <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
//           <stop
//             offset="100%"
//             style={{ stopColor: starColor, stopOpacity: 1 }}
//           />
//         </linearGradient>
//       </defs>
//     </svg>
//   );
// };

"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

const calculateEndPoint = (x: number, y: number, angle: number) => {
  const radians = (angle * Math.PI) / 180;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);

  let endX, endY;

  if (angle >= 0 && angle <= 90) {
    endX = window.innerWidth;
    endY = y + ((window.innerWidth - x) * sin) / cos;
  } else if (angle > 90 && angle <= 180) {
    endX = 0;
    endY = y + (x * sin) / cos;
  } else if (angle > 180 && angle <= 270) {
    endX = 0;
    endY = y - (x * sin) / cos;
  } else {
    endX = window.innerWidth;
    endY = y - ((window.innerWidth - x) * sin) / cos;
  }

  if (endY < 0) endY = 0;
  if (endY > window.innerHeight) endY = window.innerHeight;

  return { endX, endY };
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 2,
  maxSpeed = 5,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#00A896",
  trailColor = "#F0F3BD",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStar(newStar);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();

    return () => {};
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null;
          const newX =
            prevStar.x +
            prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          const newY =
            prevStar.y +
            prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const newScale = 1 + newDistance / 100;

          const { endX, endY } = calculateEndPoint(
            prevStar.x,
            prevStar.y,
            prevStar.angle
          );

          if (
            (newX > endX && prevStar.angle < 180) ||
            (newX < endX && prevStar.angle >= 180) ||
            (newY > endY && (prevStar.angle < 90 || prevStar.angle >= 270)) ||
            (newY < endY && prevStar.angle >= 90 && prevStar.angle < 270)
          ) {
            return null;
          }

          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          };
        });
      }
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0", className)}
    >
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

