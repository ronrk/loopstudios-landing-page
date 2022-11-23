import React from "react";
import Wrapper from "./MobileMenu.styled";
import Navbar from "../Navbar/Navbar";

const MobileMenu = ({ showMenu, toggleMenu }) => {
  return (
    <Wrapper className={showMenu ? "menu show" : "menu"}>
      <Navbar showMenu={showMenu} toggleMenu={toggleMenu} />
      <ul className="menu__list">
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
        <li>
          <a href="/">Events</a>
        </li>
        <li>
          <a href="/">PRoducts</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default MobileMenu;
