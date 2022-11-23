import React from "react";
import Wrapper from "./MainSection.styled";

import imgDesktop from "../../assets/images/desktop/image-interactive.jpg";

const MainSection = () => {
  return (
    <Wrapper>
      <img src={imgDesktop} alt="illustration" className="section__img" />
      <div className="content">
        <h3>The leader in interactive VR</h3>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </Wrapper>
  );
};

export default MainSection;
