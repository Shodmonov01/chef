import React from "react";

function Specialisti() {
  return (
    <>
      <section className="specialities">
        <div className="container">
          <ul className="specialities__programe-type--list">
            <li className="specialities__programe-type--item">
              <button className="specialities__programe-type--btn active">
                Программы питания
              </button>
            </li>
            <li className="specialities__programe-type--item">
              <button className="specialities__programe-type--btn">
                Специальные программы
              </button>
            </li>
          </ul>
          <ul className="specialities__diet-type--list">
            <li className="specialities__diet-type--item">
              <button
                className="specialities__diet-type--btn"
                data-active="EXPRESS"
              >
                EXPRESS FIT
                <span className="specialities__diet-type--span">800 ккал</span>
              </button>
            </li>
            <li className="specialities__diet-type--item">
              <button
                className="specialities__diet-type--btn"
                data-active="SLIM"
              >
                SLIM
                <span className="specialities__diet-type--span">1000 ккал</span>
              </button>
            </li>
            <li className="specialities__diet-type--item">
              <button
                className="specialities__diet-type--btn active"
                data-active="FITNESS"
              >
                FITNESS
                <span className="specialities__diet-type--span">1300 ккал</span>
              </button>
            </li>
            <li className="specialities__diet-type--item">
              <button
                className="specialities__diet-type--btn"
                data-active="BALANCE"
              >
                BALANCE
                <span className="specialities__diet-type--span">1600 ккал</span>
              </button>
            </li>
            <li className="specialities__diet-type--item">
              <button
                className="specialities__diet-type--btn"
                data-active="BALANCEUP"
              >
                BALANCE+
                <span className="specialities__diet-type--span">1800 ккал</span>
              </button>
            </li>
            <li className="specialities__diet-type--item">
              <button
                className="specialities__diet-type--btn"
                data-active="STRONG"
              >
                STRONG
                <span className="specialities__diet-type--span">2000 ккал</span>
              </button>
            </li>
            <li className="specialities__diet-type--item">
              <button
                className="specialities__diet-type--btn"
                data-active="MAXI"
              >
                MAXI FIT
                <span className="specialities__diet-type--span">2400 ккал</span>
              </button>
            </li>
          </ul>
          <div className="specialities__diet--descr">
            <ul className="specialities__diet--list">
              <li
                className="specialities__diet-descr--item active"
                data-active="FITNESS"
              >
                <div className="specialities__diet-descr--priceBox">
                  <div className="specialities__diet-definition">
                    <h3 className="specialities__diet-defenition--title">
                      FITNESS
                      <span className="specialities__diet-defenition--span">
                        1300 ккал
                      </span>
                    </h3>
                    <p className="specialities__diet-defenition--text">
                      Программа здорового питания Express Fit. Идеально для:
                      похудения в кратчайшие сроки, повышения энергии и сил,
                      снижения веса при сидячем образе жизни.
                    </p>
                  </div>
                  <ul className="specialities__diet-price--list">
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тестовый день
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">357 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">1 день</p>
                      <p className="specialities__diet-price--old"></p>
                      <p className="specialities__diet-price--new">510 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 7 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">490 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 14 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">470 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тот 30 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">445 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Завтрак и ужин
                      </p>
                      <p className="specialities__diet-price--old">-15%</p>
                      <p className="specialities__diet-price--new">433 грн</p>
                    </li>
                  </ul>
                  <button className="specialities__diet-price--btn">
                    Заказать
                  </button>
                </div>
              </li>
              <li
                className="specialities__diet-descr--item"
                data-active="EXPRESS"
              >
                <div className="specialities__diet-descr--priceBox">
                  <div className="specialities__diet-definition">
                    <h3 className="specialities__diet-defenition--title">
                      EXPRESS FIT
                      <span className="specialities__diet-defenition--span">
                        800 ккал
                      </span>
                    </h3>
                    <p className="specialities__diet-defenition--text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <ul className="specialities__diet-price--list">
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тестовый день
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">357 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">1 день</p>
                      <p className="specialities__diet-price--old"></p>
                      <p className="specialities__diet-price--new">510 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 7 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">490 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 14 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">470 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тот 30 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">445 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Завтрак и ужин
                      </p>
                      <p className="specialities__diet-price--old">-15%</p>
                      <p className="specialities__diet-price--new">433 грн</p>
                    </li>
                  </ul>
                  <button className="specialities__diet-price--btn">
                    Заказать
                  </button>
                </div>
              </li>
              <li className="specialities__diet-descr--item" data-active="SLIM">
                <div className="specialities__diet-descr--priceBox">
                  <div className="specialities__diet-definition">
                    <h3 className="specialities__diet-defenition--title">
                      SLIM
                      <span className="specialities__diet-defenition--span">
                        1000 ккал
                      </span>
                    </h3>
                    <p className="specialities__diet-defenition--text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <ul className="specialities__diet-price--list">
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тестовый день
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">357 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">1 день</p>
                      <p className="specialities__diet-price--old"></p>
                      <p className="specialities__diet-price--new">510 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 7 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">490 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 14 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">470 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тот 30 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">445 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Завтрак и ужин
                      </p>
                      <p className="specialities__diet-price--old">-15%</p>
                      <p className="specialities__diet-price--new">433 грн</p>
                    </li>
                  </ul>
                  <button className="specialities__diet-price--btn">
                    Заказать
                  </button>
                </div>
              </li>
              <li
                className="specialities__diet-descr--item"
                data-active="BALANCE"
              >
                <div className="specialities__diet-descr--priceBox">
                  <div className="specialities__diet-definition">
                    <h3 className="specialities__diet-defenition--title">
                      BALANCE
                      <span className="specialities__diet-defenition--span">
                        1600 ккал
                      </span>
                    </h3>
                    <p className="specialities__diet-defenition--text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <ul className="specialities__diet-price--list">
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тестовый день
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">357 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">1 день</p>
                      <p className="specialities__diet-price--old"></p>
                      <p className="specialities__diet-price--new">510 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 7 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">490 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 14 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">470 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тот 30 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">445 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Завтрак и ужин
                      </p>
                      <p className="specialities__diet-price--old">-15%</p>
                      <p className="specialities__diet-price--new">433 грн</p>
                    </li>
                  </ul>
                  <button className="specialities__diet-price--btn">
                    Заказать
                  </button>
                </div>
              </li>
              <li
                className="specialities__diet-descr--item"
                data-active="BALANCEUP"
              >
                <div className="specialities__diet-descr--priceBox">
                  <div className="specialities__diet-definition">
                    <h3 className="specialities__diet-defenition--title">
                      BALANCE+
                      <span className="specialities__diet-defenition--span">
                        1800 ккал
                      </span>
                    </h3>
                    <p className="specialities__diet-defenition--text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <ul className="specialities__diet-price--list">
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тестовый день
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">357 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">1 день</p>
                      <p className="specialities__diet-price--old"></p>
                      <p className="specialities__diet-price--new">510 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 7 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">490 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 14 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">470 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тот 30 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">445 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Завтрак и ужин
                      </p>
                      <p className="specialities__diet-price--old">-15%</p>
                      <p className="specialities__diet-price--new">433 грн</p>
                    </li>
                  </ul>
                  <button className="specialities__diet-price--btn">
                    Заказать
                  </button>
                </div>
              </li>
              <li
                className="specialities__diet-descr--item"
                data-active="STRONG"
              >
                <div className="specialities__diet-descr--priceBox">
                  <div className="specialities__diet-definition">
                    <h3 className="specialities__diet-defenition--title">
                      STRONG
                      <span className="specialities__diet-defenition--span">
                        2000 ккал
                      </span>
                    </h3>
                    <p className="specialities__diet-defenition--text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <ul className="specialities__diet-price--list">
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тестовый день
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">357 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">1 день</p>
                      <p className="specialities__diet-price--old"></p>
                      <p className="specialities__diet-price--new">510 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 7 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">490 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 14 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">470 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тот 30 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">445 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Завтрак и ужин
                      </p>
                      <p className="specialities__diet-price--old">-15%</p>
                      <p className="specialities__diet-price--new">433 грн</p>
                    </li>
                  </ul>
                  <button className="specialities__diet-price--btn">
                    Заказать
                  </button>
                </div>
              </li>
              <li className="specialities__diet-descr--item" data-active="MAXI">
                <div className="specialities__diet-descr--priceBox">
                  <div className="specialities__diet-definition">
                    <h3 className="specialities__diet-defenition--title">
                      MAXI FIT
                      <span className="specialities__diet-defenition--span">
                        2400 ккал
                      </span>
                    </h3>
                    <p className="specialities__diet-defenition--text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <ul className="specialities__diet-price--list">
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тестовый день
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">357 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">1 день</p>
                      <p className="specialities__diet-price--old"></p>
                      <p className="specialities__diet-price--new">510 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 7 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">490 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        от 14 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">470 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Тот 30 дней
                      </p>
                      <p className="specialities__diet-price--old">510 грн</p>
                      <p className="specialities__diet-price--new">445 грн</p>
                    </li>
                    <li className="specialities__diet-price--item">
                      <p className="specialities__diet-price--descr">
                        Завтрак и ужин
                      </p>
                      <p className="specialities__diet-price--old">-15%</p>
                      <p className="specialities__diet-price--new">433 грн</p>
                    </li>
                  </ul>
                  <button className="specialities__diet-price--btn">
                    Заказать
                  </button>
                </div>
              </li>
            </ul>
            <div className="specialities__schedule--box">
              <ul className="specialities__schedule-day--list">
                <li className="specialities__schedule-day--item">
                  <button
                    className="specialities__schedule-day--btn"
                    data-day="1"
                  >
                    ПН
                  </button>
                </li>
                <li className="specialities__schedule-day--item">
                  <button
                    className="specialities__schedule-day--btn"
                    data-day="2"
                  >
                    ВТ
                  </button>
                </li>
                <li className="specialities__schedule-day--item">
                  <button
                    className="specialities__schedule-day--btn"
                    data-day="3"
                  >
                    СР
                  </button>
                </li>
                <li className="specialities__schedule-day--item">
                  <button
                    className="specialities__schedule-day--btn"
                    data-day="4"
                  >
                    ЧТ
                  </button>
                </li>
                <li className="specialities__schedule-day--item">
                  <button
                    className="specialities__schedule-day--btn"
                    data-day="5"
                  >
                    ПТ
                  </button>
                </li>
                <li className="specialities__schedule-day--item">
                  <button
                    className="specialities__schedule-day--btn"
                    data-day="6"
                  >
                    СБ
                  </button>
                </li>
                <li className="specialities__schedule-day--item">
                  <button
                    className="specialities__schedule-day--btn"
                    data-day="0"
                  >
                    ВС
                  </button>
                </li>
              </ul>
              <div className="specialities__schedule-menu--box">
                <ul className="specialities__schedule-menu--list">
                  <li className="specialities__schedule-menu--item">
                    <div className="specialities__schedule-menu--mealsBox">
                      <p className="specialities__schedule-menu--meals">
                        Завтрак
                      </p>
                      <p className="specialities__schedule-menu--time">
                        7:00 - 9:00
                      </p>
                    </div>
                    <ul className="specialities__schedule-menu-name--list">
                      <li className="specialities__schedule-menu-name--item">
                        <p className="specialities__schedule-menu--name">
                          - Фриттата с сыром и кабачками
                        </p>
                        <span className="specialities__schedule-menu--span">
                          170гр
                        </span>
                      </li>
                    </ul>
                  </li>

                  <li className="specialities__schedule-menu--item">
                    <div className="specialities__schedule-menu--mealsBox">
                      <p className="specialities__schedule-menu--meals">
                        2-й завтрак
                      </p>
                      <p className="specialities__schedule-menu--time">
                        10:00 - 12:00
                      </p>
                    </div>
                    <ul className="spesialities__schedule-menu-name--list">
                      <li className="specialities__schedule-menu-name--item">
                        <p className="specialities__schedule-menu--name">
                          - Фермерский йогурт
                        </p>
                        <span className="specialities__schedule-menu--span">
                          200гр
                        </span>
                      </li>
                      <li className="specialities__schedule-menu-name--item">
                        <p className="specialities__schedule-menu--name">
                          - Полезное печенье из сухофруктов и орехов
                        </p>
                        <span className="specialities__schedule-menu--span">
                          2 шт
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="specialities__schedule-menu--item">
                    <div className="specialities__schedule-menu--mealsBox">
                      <p className="specialities__schedule-menu--meals">Обед</p>
                      <p className="specialities__schedule-menu--time">
                        13:00 - 15:00
                      </p>
                    </div>
                    <ul className="spesialities__schedule-menu-name--list">
                      <li className="specialities__schedule-menu-name--item">
                        <p className="specialities__schedule-menu--name">
                          - Люля-кебаб из индейки
                        </p>
                        <span className="specialities__schedule-menu--span">
                          100гр
                        </span>
                      </li>
                      <li className="specialities__schedule-menu-name--item">
                        <p className="specialities__schedule-menu--name">
                          - Летний салат с маслинами и сыром
                        </p>
                        <span className="specialities__schedule-menu--span">
                          100гр
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="specialities__schedule-menu--item">
                    <div className="specialities__schedule-menu--mealsBox">
                      <p className="specialities__schedule-menu--meals">
                        Полдник
                      </p>
                      <p className="specialities__schedule-menu--time">
                        16:00 - 17:30
                      </p>
                    </div>
                    <ul className="spesialities__schedule-menu-name--list">
                      <li className="specialities__schedule-menu-name--item">
                        <p className="specialities__schedule-menu--name">
                          - Творожное суфле с какао и вишей
                        </p>
                        <span className="specialities__schedule-menu--span">
                          100гр
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="specialities__schedule-menu--item">
                    <div className="specialities__schedule-menu--mealsBox">
                      <p className="specialities__schedule-menu--meals">Ужин</p>
                      <p className="specialities__schedule-menu--time">
                        19:00 - 20:00
                      </p>
                    </div>
                    <ul className="spesialities__schedule-menu-name--list">
                      <li className="specialities__schedule-menu-name--item">
                        <p className="specialities__schedule-menu--name">
                          - Рыбный терен
                        </p>
                        <span className="specialities__schedule-menu--span">
                          100гр
                        </span>
                      </li>
                      <li className="specialities__schedule-menu-name--item">
                        <p className="specialities__schedule-menu--name">
                          - Овощи гриль
                        </p>
                        <span className="specialities__schedule-menu--span">
                          150гр
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Specialisti;
