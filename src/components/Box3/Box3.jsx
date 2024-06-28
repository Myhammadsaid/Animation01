import React from "react";
import { motion, stagger } from "framer-motion";

const Box3 = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },

    visiblite: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },

    visiblite: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.2,
    },
  };

  return (
    <div>
      <motion.div
        variants={boxVariant}
        animate="visiblite"
        initial="hidden"
        className="box"
      >
        {[1, 2, 3].map((el) => (
          <motion.li variants={listVariant} className="boxItem"></motion.li>
        ))}
      </motion.div>
    </div>
  );
};

export default Box3;
