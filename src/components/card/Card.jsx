import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cards">
      <motion.div
        transition={{ layout: { duration: 1.3, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
        className="card"
      >
        <motion.h2 layout="position">Framer Motion</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="expand"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos odit. Iste cumque temporibus obcaecati amet provident aut
              adipisci sed.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              suscipit.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Card;
