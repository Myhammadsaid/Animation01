import React from "react";
import { motion } from "framer-motion";

const Box2 = () => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{ right: 20, top: 5, bottom: 5, left: 5 }}
        className="box"
      ></motion.div>
    </div>
  );
};

export default Box2;
