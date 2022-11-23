import React from "react";
import Wrapper from "./Navbar.styled";

import logo from "../../assets/images/logo.svg";
import iconHamburger from "../../assets/images/icon-hamburger.svg";
import iconClose from "../../assets/images/icon-close.svg";

const Navbar = ({ toggleMenu, showMenu }) => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <ul className="nav__list">
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
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
      </ul>
      <button className="btn btn-menu">
        <img
          src={showMenu ? iconClose : iconHamburger}
          alt=""
          onClick={toggleMenu}
        />
      </button>
    </Wrapper>
  );
};

export default Navbar;
