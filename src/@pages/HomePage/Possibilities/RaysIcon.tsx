import { motion, useInView } from "framer-motion";
import { FC, useRef } from "react";

const svgOptions: {
  stroke: string;
  strokeWidth: number;
  strokeLinecap: "round";
  strokeLinejoin: "round";
  strokeDasharray: string;
  initial: { stroke: string; pathLength: number };
} = {
  stroke: "transparent",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeDasharray: "0 1",
  initial: { stroke: "transparent", pathLength: 0 },
};

const RaysIcon: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-300px" });

  return (
    <motion.svg
      ref={ref}
      width="170"
      height="140"
      viewBox="0 0 170 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_349_6041)">
        <motion.path
          d="M7.27177e-05 30.4562C13.382 39.9532 40.8397 58.9474 43.6152 58.9474"
          {...svgOptions}
          animate={
            isInView && {
              stroke: "currentColor",
              pathLength: 1,
              transition: {
                stroke: { delay: 0, duration: 0.6 },
                pathLength: { delay: 0, duration: 0.6, ease: "easeInOut" },
              },
            }
          }
        />
        <motion.path
          d="M98.2542 5.09918e-05C99.5759 13.9182 98.1551 44.3088 81.8985 54.5264"
          {...svgOptions}
          animate={
            isInView && {
              stroke: "currentColor",
              pathLength: 1,
              transition: {
                stroke: { delay: 0.2, duration: 0.6 },
                pathLength: { delay: 0.2, duration: 0.6, ease: "easeInOut" },
              },
            }
          }
        />
        <motion.path
          d="M170 29.965C161.244 38.1521 141.155 54.5264 130.845 54.5264"
          {...svgOptions}
          animate={
            isInView && {
              stroke: "currentColor",
              pathLength: 1,
              transition: {
                stroke: { delay: 0.4, duration: 0.6 },
                pathLength: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
              },
            }
          }
        />
        <motion.path
          d="M164.053 132.14C158.601 126.246 145.615 113.179 137.289 108.07"
          {...svgOptions}
          animate={
            isInView && {
              stroke: "currentColor",
              pathLength: 1,
              transition: {
                stroke: { delay: 0.6, duration: 0.6 },
                pathLength: { delay: 0.6, duration: 0.6, ease: "easeInOut" },
              },
            }
          }
        />
        <motion.path
          d="M90.6997 140L86.2391 109.544"
          {...svgOptions}
          animate={
            isInView && {
              stroke: "currentColor",
              pathLength: 1,
              transition: {
                stroke: { delay: 0.8, duration: 0.6 },
                pathLength: { delay: 0.8, duration: 0.6, ease: "easeInOut" },
              },
            }
          }
        />
        <motion.path
          d="M18.834 135.579C26.5989 132.468 36.974 116.519 40.146 112.982"
          {...svgOptions}
          animate={
            isInView && {
              stroke: "currentColor",
              pathLength: 1,
              transition: {
                stroke: { delay: 1, duration: 0.6 },
                pathLength: { delay: 1, duration: 0.6, ease: "easeInOut" },
              },
            }
          }
        />
      </g>
    </motion.svg>
  );
};

export default RaysIcon;
