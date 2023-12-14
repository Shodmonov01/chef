import React from "react";
import Hero from "../../components/Hero";
import Advantages from "../../components/Advantages";
import Specialisti from "../../components/Specialisti";
import Gallary from "../../components/Gallary";
import Order from "../../components/Order";
import Bgi from '../../images/required/decor/main/round-bg.svg'
import "../Main/Main.scss";
import Header from "../../components/Header/Header";
function Main() {
  return (
    <>
      <div className="main">
        <div className="main__info_0">
          <Hero />
        </div>
        <div className="main__info_">
          <img className="bgi" src={Bgi} alt="" />
          <Advantages />
          <div className="main__info_2">
            <Specialisti />
          </div>
        </div>
        <Gallary />
        <Order />
      </div>
    </>
  );
}

export default Main;
