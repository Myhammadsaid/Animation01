import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Box5 = () => {
  const control = useAnimation();

  return (
    <div>
      <div className="box-btns">
        <button
          onClick={() => {
            control.start({
              x: 900,
              transition: { duration: 1 },
            });
          }}
          className="box-btn"
        >
          Move Rigth
        </button>
        <button
          onClick={() => {
            control.start({
              x: 0,
              transition: { duration: 1 },
            });
          }}
          className="box-btn"
        >
          Move Left
        </button>
        <button
          onClick={() => {
            control.start({
              borderRadius: "50%",
              transition: { duration: 1 },
            });
          }}
          className="box-btn"
        >
          Circle
        </button>
        <button
          onClick={() => {
            control.start({
              borderRadius: 0,
              transition: { duration: 1 },
            });
          }}
          className="box-btn"
        >
          Squary
        </button>
        <button
          onClick={() => {
            control.stop();
          }}
          className="box-btn"
        >
          Stop
        </button>
      </div>
      <motion.div animate={control} className="box"></motion.div>
    </div>
  );
};

export default Box5;
