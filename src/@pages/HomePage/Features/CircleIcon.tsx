import { motion, useInView } from "framer-motion";
import { FC, useRef } from "react";

const CircleIcon: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.svg
      ref={ref}
      width="358"
      height="87"
      viewBox="0 0 358 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M6.50346 45.5911C-21.4118 -3.95143 84.3986 2.47731 208.686 2.47771C243 2.47782 348.246 3.08323 355.749 36.9198C366.238 84.2203 43.9805 112.103 6.50346 45.5911Z"
        stroke="#444CE7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="0 1"
        initial={{ pathLength: 0 }}
        animate={isInView && { pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: 0,
        }}
      />
    </motion.svg>
  );
};

export default CircleIcon;
