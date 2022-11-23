import React from "react";
import Wrapper from "./Gallery.styled";

import imgDesktop1 from "../../assets/images/desktop/image-deep-earth.jpg";
import imgDesktop2 from "../../assets/images/desktop/image-night-arcade.jpg";
import imgDesktop3 from "../../assets/images/desktop/image-soccer-team.jpg";
import imgDesktop4 from "../../assets/images/desktop/image-grid.jpg";
import imgDesktop5 from "../../assets/images/desktop/image-from-above.jpg";
import imgDesktop6 from "../../assets/images/desktop/image-pocket-borealis.jpg";
import imgDesktop7 from "../../assets/images/desktop/image-grid.jpg";
import imgDesktop8 from "../../assets/images/desktop/image-fisheye.jpg";

const Gallery = () => {
  return (
    <Wrapper>
      <div className="gallery__header">
        <h2>Our Creations</h2>
        <button className="btn btn-transparent">see all</button>
      </div>
      <div className="gallery">
        <figure>
          <img src={imgDesktop1} alt="gallery 1" className="gallery-1" />
          <figcaption>deep earth</figcaption>
        </figure>
        <figure>
          <img src={imgDesktop2} alt="gallery 2" className="gallery-2" />
          <figcaption>night arcade</figcaption>
        </figure>

        <figure>
          <img src={imgDesktop3} alt="gallery 3" className="gallery-3" />
          <figcaption>soccer team vr</figcaption>
        </figure>

        <figure>
          <img src={imgDesktop4} alt="gallery 4" className="gallery-4" />
          <figcaption>the grid</figcaption>
        </figure>

        <figure>
          <img src={imgDesktop5} alt="gallery 5" className="gallery-5" />
          <figcaption>from up above vr</figcaption>
        </figure>

        <figure>
          <img src={imgDesktop6} alt="gallery 6" className="gallery-6" />
          <figcaption>pocket borealis</figcaption>
        </figure>

        <figure>
          <img src={imgDesktop7} alt="gallery 7" className="gallery-7" />
          <figcaption>the curiosity</figcaption>
        </figure>

        <figure>
          <img src={imgDesktop8} alt="gallery 8" className="gallery-8" />
          <figcaption>make it fisheye</figcaption>
        </figure>
      </div>
    </Wrapper>
  );
};

export default Gallery;
