import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = (props ) => {

  const words = props.text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.5 * i },
    }),
  };

  const child = {
    visible: {
        delay:{
            stagger: props.stagger,
        },
      opacity: 1,
      x: 0,
      y:0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y:-60,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="nameanimation"
      variants={container}
      initial="hidden"
      animate="visible"
      
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;