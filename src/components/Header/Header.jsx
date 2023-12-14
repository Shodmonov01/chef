import { Link } from "react-router-dom";
import logoDesktop from "../../images/header/logo-desktop.svg";
import './main.scss'

const Header = () => {
  return (
    <>
      <div className="header container">
        <div className="header-logo">
         <Link to="/"> <img src={logoDesktop} alt="" /></Link>
        </div>
        <div className="header-links">
          <div className="links-section-hide"></div>
          <div className="links-section">
            <Link to={"/shop"}>Програмы питания</Link>
            <Link to={"/shop"}>Бизнес-ланчи</Link>
            <Link to={"/shop"}>Gastro Shop</Link>
            <Link to={"/shop"}>О нас</Link>
            <Link to={"/shop"}>Блог</Link>
          </div>
          <div className="language">
            <button>RU</button>
            <button>UA</button>
            <button>EN</button>
          </div>
        </div>
        <div className="header-contact">
          <a href="tel:+38 (068) 949 - 49 -19">+38 (068) 949 - 49 -19</a>
        </div>
      </div>
    </>
  );
};

export default Header;
