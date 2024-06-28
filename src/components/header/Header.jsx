import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <motion.header
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1.1 }}
      >
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/boxes"}>Boxes</NavLink>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </motion.header>
    </div>
  );
};

export default Header;
