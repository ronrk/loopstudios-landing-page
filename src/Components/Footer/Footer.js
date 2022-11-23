import React from "react";
import Wrapper from "./Footer.styled";
import logo from "../../assets/images/logo.svg";
import { ReactComponent as IconFacebook } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer__header">
        <img src={logo} alt="logo" />
        <div className="social-icons">
          <div className="icon-container">
            <IconFacebook className="footer__icon" />
          </div>
          <div className="icon-container">
            <IconTwitter className="footer__icon" />
          </div>
          <div className="icon-container">
            <IconPinterest className="footer__icon" />
          </div>
          <div className="icon-container">
            <IconInstagram className="footer__icon" />
          </div>
        </div>
      </div>
      <div className="footer__footer">
        <ul className="footer__list">
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">careers</a>
          </li>
          <li>
            <a href="/">events</a>
          </li>
          <li>
            <a href="//">products</a>
          </li>
          <li>
            <a href="/">support</a>
          </li>
        </ul>
        <span>© 2021 Loopstudios. All rights reserved.</span>
      </div>
    </Wrapper>
  );
};

export default Footer;
