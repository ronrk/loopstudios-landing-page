import React from "react";
import Wrapper from "./Hero.styled";

import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="title">
        <h1>Immersive experiences that deliver</h1>
      </div>
    </Wrapper>
  );
};

export default Hero;
