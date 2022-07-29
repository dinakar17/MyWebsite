import React from "react";
import { motion } from "framer-motion";

// Error if function HOC() not mentioned
const MotionWrap = (Component: React.FC, classNames: string) => function HOC() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${classNames}`}
    >
      <Component />
    </motion.div>
  );
};

export default MotionWrap;
