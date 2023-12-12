import React from "react";
import { Link, NavLink } from "react-router-dom";

// import "../../sass/_header.scss";
import logoMobile from "../../images/header/logo-mobile.svg";
import logoDesktop from "../../images/header/logo-desktop.svg";
import logoTable from "../../images/header/logo-tablet.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a className="logo__link" href="/">
              <picture>
                <source srcSet={logoDesktop} media="(min-width: 1180px)" />
                <source srcSet={logoTable} media="(min-width: 768px)" />
                <img
                  className="logo__img"
                  src={logoMobile}
                  alt="company's logo"
                  width="164"
                  height="68"
                />
              </picture>
            </a>
            <p className="logo__text">healthy ration</p>
          </div>
          <nav className="nav">
            <div className="nav__tel">
              <a className="nav__link" href="tel:+38 068 949 49 19">
                <svg
                  className="nav__number--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="31"
                  viewBox="0 0 28 31"
                  fill="none"
                >
                  <path
                    d="M21.2055 12.6175C19.2727 18.3916 13.9455 22.3966 11.5234 23.6773L9.04751 19.6365L0.491525 23.3019L2.12452 30.8413C23.1015 28.9133 27.5858 10.2958 27.2059 1.22797L20.3845 0.147254L17.6499 9.62364L21.2055 12.6175Z"
                    fill="#65CF71"
                  />
                </svg>
              </a>
            </div>
            <div className="nav__content">
              <button
                type="button"
                className="menu__toggle js-open-menu"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <svg
                  className="menu__toggle--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                >
                  <rect
                    width="25"
                    height="3.94737"
                    rx="1.97368"
                    fill="#020202"
                  />
                  <rect
                    x="5"
                    y="8"
                    width="20"
                    height="4"
                    rx="2"
                    fill="#020202"
                  />
                  <rect
                    y="15.7896"
                    width="25"
                    height="3.94737"
                    rx="1.97368"
                    fill="#020202"
                  />
                </svg>
              </button>
              <div
                className="menu__container js-menu-container"
                id="mobile-menu"
              >
                <div className="menu-content">
                  <button
                    type="button"
                    className="menu__toggle menu__toggle--close js-close-menu"
                  >
                    <svg
                      className="menu__toggle--icon"
                      width="25"
                      height="20"
                      aria-label="Mobile-menu close"
                    >
                      {/* <use href="./images/icons.svg#close-icon"></use> */}
                    </svg>
                  </button>
                  <div className="menu__breadcrumps">
                    <div className="header__nav">
                      <ul className="header__nav--list">
                        <li className="header__nav--item">
                          <a className="header__nav--link" href="./index.html">
                            Программы питания
                          </a>
                        </li>
                        <li className="header__nav--item">
                          <a
                            className="header__nav--link"
                            href="./business-lunch.html"
                          >
                            Бизнес-ланчи
                          </a>
                        </li>
                        <li className="header__nav--item">
                          <NavLink className="header__nav--link" to={"/shop"}>
                            Gastro Shop
                          </NavLink>
                        </li>
                        <li className="header__nav--item">
                          <NavLink className="header__nav--link" to={"/shop"}>
                            О нас
                          </NavLink>
                        </li>
                        <li className="header__nav--item">
                          <a className="header__nav--link" href="./blog.html">
                            Блог
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="language">
                      <ul className="language__list">
                        <li className="language__item">
                          <a className="language__link" href="#">
                            RU
                          </a>
                        </li>
                        <li className="language__item">
                          <a className="language__link" href="#">
                            UA
                          </a>
                        </li>
                        <li className="language__item">
                          <a className="language__link" href="#">
                            EN
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="header__contacts">
                      <a
                        className="header__contacts-link"
                        href="tel:+38 068 949 49 19"
                      >
                        +38 (068) 949 - 49 -19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__breadcrumps">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <a className="navigation__link" href="./index.html">
                    
                    <NavLink className="header__nav--link" to={"/shop"}>
                      Программы питания
                    </NavLink>
                  </a>
                </li>
                <li className="navigation__item">
                  <a className="navigation__link" href="./business-lunch.html">
                    
                    <NavLink className="header__nav--link" to={"/shop"}>
                      Бизнес-ланчи
                    </NavLink>
                  </a>
                </li>
                <li className="navigation__item">
                  <a className="navigation__link" href="/shop">
                    <NavLink className="header__nav--link" to={"/shop"}>
                    Gastro Shop
                    </NavLink>
                  </a>
                </li>
                <li className="navigation__item">
                  <a className="navigation__link" href="./about-us.html">
                    <NavLink className="header__nav--link" to={"/shop"}>
                      О нас
                    </NavLink>
                  </a>
                </li>
                <li className="navigation__item">
                  <a className="navigation__link" href="./blog.html">
                    <NavLink className="header__nav--link" to={"/shop"}>
                      Блог
                    </NavLink>
                  </a>
                </li>
              </ul>
              <ul className="lang">
                <li className="lang__item">
                  <a className="lang__link" href="#">
                    RU
                  </a>
                </li>
                <li className="lang__item">
                  <a className="lang__link" href="#">
                    UA
                  </a>
                </li>
                <li className="lang__item">
                  <a className="lang__link" href="#">
                    EN
                  </a>
                </li>
              </ul>
              <div className="contact">
                <a className="contact__link" href="tel:+38 068 949 49 19">
                  +38 (068) 949 - 49 -19
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="backdrop is-hidden" data-menu></div>
    </header>
  );
}

export default Header;
