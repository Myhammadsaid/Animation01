import React from "react";
import Box1 from "../../components/Box1/Box1";
import Box2 from "../../components/Box2/Box2";
import Box3 from "../../components/Box3/Box3";
import Box4 from "../../components/Box4/Box4";
import Box5 from "../../components/Box5/Box5";

const Boxes = () => {
  return (
    <div>
      <div className="boxes">
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
      </div>
    </div>
  );
};

export default Boxes;
