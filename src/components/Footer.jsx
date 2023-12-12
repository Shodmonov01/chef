import React from "react";
import logoDesktop from "../images/footer/footer_logo.svg";
import logoTable from "../images/footer/footer_logo.svg";
import soc1 from "../images/soc/instagram.png";
import soc2 from "../images/soc/facebook-logo.png";
import soc3 from "../images/soc/viber.png";
import soc4 from "../images/soc/telegram.png";





function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container footer__container">
          <div className="footer__box">
            <ul className="footer__menu--list">
              <li className="footer__menu--item">
                <a className="footer__menu--link" href="./index.html">
                  Программы питания
                </a>
              </li>
              <li className="footer__menu--item">
                <a className="footer__menu--link" href="./about-us.html">
                  О нас
                </a>
              </li>
              <li className="footer__menu--item">
                <a className="footer__menu--link" href="./business-lunch.html">
                  Бизнес-ланчи
                </a>
              </li>
              <li className="footer__menu--item">
                <a className="footer__menu--link" href="./shop.html">
                  Gastro Shop
                </a>
              </li>
              <li className="footer__menu--item">
                <a className="footer__menu--link" href="./blog.html">
                  Блог
                </a>
              </li>
            </ul>
            <div className="footer__logo--box">

              <picture className="footer__img">
                <source srcSet={logoDesktop} media="(min-width: 1180px)" />
                <source srcSet={logoTable} media="(min-width: 768px)" />
                <img
                  className="logo__img"
                  src={logoDesktop}
                  alt="company's logo"
                  width="164"
                  height="68"
                />
              </picture>
              
              <h2 className="footer__logo--name">сервис здорового питания</h2>
            </div>
            <div className="footer__networks--box">
              <ul className="footer__rules--list">
                <li className="footer__rules--item">
                  <p className="footer__rule">Условия сотрудничества</p>
                </li>
                <li className="footer__rules--item">
                  <p className="footer__rule">FAQ</p>
                </li>
              </ul>
              <div className="footer__contacts">
                <ul className="footer__networks--list">
                  <li className="footer__networks--item">
                    <a href="" className="footer__networks__link">
                    <img className="footer__networks__icon" src={soc1} alt="" />

                    </a>
                  </li>
                  <li className="footer__networks--item">
                    <a href="" className="footer__networks__link">
                    <img className="footer__networks__icon" src={soc2} alt="" />

                    </a>
                  </li>
                  <li className="footer__networks--item">
                    <a href="" className="footer__networks__link">
                    <img className="footer__networks__icon" src={soc3} alt="" />

                    </a>
                  </li>
                  <li className="footer__networks--item">
                    <a href="" className="footer__networks__link">

                      <img className="footer__networks__icon" src={soc4} alt="" />
                    </a>
                  </li>
                </ul>
                <a href="tel:+380689494919" className="footer__tell">
                  +38 (068) 949 - 49 - 19
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
