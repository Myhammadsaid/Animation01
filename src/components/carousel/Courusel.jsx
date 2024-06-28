import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "../images";

console.log(images);

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, textAlign: "center" }}
        transition={{
          delay: 1.1,
          duration: 1.1,
        }}
      >
        Courusel
      </motion.h1>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="carousel"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images?.map((val) => (
            <motion.div key={val} className="item">
              <img src={val} alt="img" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
