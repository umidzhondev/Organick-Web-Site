import React from "react";
import Logo from "../images/header/logo.svg";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__boxs">
            <div className="footer__box">
              <h3 className="footer__box-title">Contact Us</h3>
              <div className="footer__addresses">
                <div className="footer__address">
                  <h5>Email</h5>
                  <span>needhelp@organick.com</span>
                </div>
                <div className="footer__address">
                  <h5>Phone</h5>
                  <span>123 (1254) 1452</span>
                </div>
                <div className="footer__address">
                  <h5>Address</h5>
                  <span>88 Road, Brooklyn Street, USA</span>
                </div>
              </div>
            </div>
            <div className="footer__box footer__box-large">
              <a className="footer__logo" href="/">
                <img src={Logo} alt="footer logo" />
              </a>
              <p className="footer__box-description">
                We are a popular and farming company aspiring to be a leader in
                the Organic food industry.
              </p>
              <div className="footer__social-icons">
                <a className="footer__social-icon" href="/">
                  <FaFacebook />
                </a>
                <a className="footer__social-icon" href="/">
                  <FaTwitter />
                </a>
                <a className="footer__social-icon" href="/">
                  <FaInstagram />
                </a>
                <a className="footer__social-icon" href="/">
                  <FaPinterest />
                </a>
              </div>
            </div>
            <div className="footer__box">
              <h3 className="footer__box-title">Utility Pages</h3>
              <div className="footer__box-texts">
                <span>Style Guide</span>
                <span>Protected</span>
                <span>Page Not Found</span>
                <span>Changelog</span>
                <span>Licenses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          Copyright © Organick | Designed by <a href="/">VictorFlow</a> - Powered
          by <a href="/">Webflow</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
