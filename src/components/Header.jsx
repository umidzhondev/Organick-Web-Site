import "../styles/main.scss";
import React, { useState } from "react";
import Logo from "../images/header/logo.svg";
import NavbarButtonIcon from "../images/header/shop-icon.svg";
import { VscChromeClose } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi";

const Header = () => {
 const [isOpen,setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <div className="navbar__main">
            <a href="/" className="navbar__logo">
              <img src={Logo} alt="logo..." />
            </a>

            <nav className={`header__navigation ${isOpen?"open":""}`}>
              <div onClick={()=>setIsOpen(!isOpen)} className="navbar__close-icon">
                <VscChromeClose />
              </div>
              <ul className="header__navigation-links">
                <li className="header__navigation-item">
                  <a href="#hero" className="header__navigation-link active--link">
                    Home
                  </a>
                </li>
                <li className="header__navigation-item">
                  <a href="#about" className="header__navigation-link">
                    About Us
                  </a>
                </li>
                <li className="header__navigation-item">
                  <a href="#shop" className="header__navigation-link">
                    Shop
                  </a>
                </li>
                <li className="header__navigation-item">
                  <a href="#pages" className="header__navigation-link">
                    Pages
                  </a>
                </li>
                <li className="header__navigation-item">
                  <a href="#contact" className="header__navigation-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
         
          <button className="navbar__button">
            <div className="navbar__button-icon">
              <img src={NavbarButtonIcon} alt="icon..." />
            </div>
            <div className="navbar__button-text">
              Cart <span>0</span>
            </div>
          </button>

          <div onClick={()=>setIsOpen(!isOpen)} className="navbar__open-icon">
            <FiMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
