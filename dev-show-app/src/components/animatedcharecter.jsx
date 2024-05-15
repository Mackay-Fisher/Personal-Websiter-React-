import React from "react";
import { delay, motion } from "framer-motion";

import { useAnimate, stagger } from "framer-motion"

const AnimatedTextCharacter = (props) => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 4000)

    return () => clearTimeout(timeout)

  }, [show])

  if (!show) return null
  const letters = Array.from(props.text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.13, delayChildren: 0.04 * i},
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 3.3,
      },
    },
  };

  return (
    <motion.div
      className="animatedcharecter"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;