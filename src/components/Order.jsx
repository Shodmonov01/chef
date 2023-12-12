import React from "react";

function Order() {
  return (
    <>
      <section class="section online-order">
        <div class="container online-order__container">
          <div class="order">
            <h2 class="order__title">Оформить заказ</h2>
            <p class="order__text">
              Обсудите все детали заказа по телефону или сами укажите все
              подробности онлайн
            </p>
            <form class="order__form" name="order__form" autocomplete="on">
              <div class="form__wrapper">
                <label for="name" class="order__label order__label--name">
                  Имя
                </label>
                <div class="input__wrapper">
                  <input
                    class="order__input"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Иван"
                  />
                  <span class="indicator name-indicator"></span>
                </div>
                <label for="phone" class="order__label order__label--phone">
                  Номер телефона
                </label>
                <div class="input__wrapper">
                  <input
                    class="order__input"
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="0972140632"
                  />
                  <span class="indicator phone-indicator"></span>
                </div>
                <div class="checkbox__wrapper">
                  <label class="order__checkbox-label">
                    <input
                      class="order__checkbox"
                      type="checkbox"
                      name="discount"
                      value="discount"
                    />
                    <span class="order__checkbox-text">
                      Тест-день! <br class="order__helper" />
                      Получить скидку -30%?
                    </span>
                    <span class="checkmark"></span>
                  </label>

                  <label class="order__checkbox-label">
                    <input
                      class="order__checkbox"
                      type="checkbox"
                      name="terms"
                      value="terms"
                    />
                    <span class="order__checkbox-text">
                      Согласен с
                      <a class="order__link" href="#"> <br />
                        условиями <br class="order__helper" />
                        сотрудничества
                      </a>
                    </span>
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <button class="order__btn order__btn--phone" type="submit">
                Заказ по телефону
              </button>
              <p class="order__addition">ИЛИ</p>
              <button class="order__btn order__btn--online" type="button">
                Онлайн заказ
              </button>
            </form>
          </div>
          <div class="faq__wrapper">
            <h2 class="faq__title">Часто задаваемые вопросы</h2>
            <ul class="faq__accordion">
              <li class="faq__list">
                <button class="faq__item">
                  Как осуществляется доставка правильного питания?
                </button>
                <p class="faq__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  dolorem debitis numquam perferendis fuga corporis commodi
                  dignissimos! Assumenda rerum iste ex quae, id nisi pariatur
                  minima dolorum magnam officia voluptatibus sequi expedita
                  temporibus eos eligendi totam nulla molestias soluta!
                  Praesentium dicta ex placeat reprehenderit labore itaque
                  provident eligendi quo quidem!
                </p>
              </li>
              <li class="faq__list">
                <button class="faq__item">
                  Можно ли менять время доставки\место?
                </button>
                <p class="faq__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  dolorem debitis numquam perferendis fuga corporis commodi
                  dignissimos! Assumenda rerum iste ex quae, id nisi pariatur
                  minima dolorum magnam officia voluptatibus sequi expedita
                  temporibus eos eligendi totam nulla molestias soluta!
                  Praesentium dicta ex placeat reprehenderit labore itaque
                  provident eligendi quo quidem!
                </p>
              </li>
              <li class="faq__list">
                <button class="faq__item">Как и в чем приезжает еда?</button>
                <p class="faq__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  dolorem debitis numquam perferendis fuga corporis commodi
                  dignissimos! Assumenda rerum iste ex quae, id nisi pariatur
                  minima dolorum magnam officia voluptatibus sequi expedita
                  temporibus eos eligendi totam nulla molestias soluta!
                  Praesentium dicta ex placeat reprehenderit labore itaque
                  provident eligendi quo quidem!
                </p>
              </li>
              <li class="faq__list">
                <button class="faq__item">Когда Вы готовите?</button>
                <p class="faq__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  dolorem debitis numquam perferendis fuga corporis commodi
                  dignissimos! Assumenda rerum iste ex quae, id nisi pariatur
                  minima dolorum magnam officia voluptatibus sequi expedita
                  temporibus eos eligendi totam nulla molestias soluta!
                  Praesentium dicta ex placeat reprehenderit labore itaque
                  provident eligendi quo quidem!
                </p>
              </li>
              <li class="faq__list">
                <button class="faq__item">
                  Какие продукты Вы используете?
                </button>
                <p class="faq__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  dolorem debitis numquam perferendis fuga corporis commodi
                  dignissimos! Assumenda rerum iste ex quae, id nisi pariatur
                  minima dolorum magnam officia voluptatibus sequi expedita
                  temporibus eos eligendi totam nulla molestias soluta!
                  Praesentium dicta ex placeat reprehenderit labore itaque
                  provident eligendi quo quidem!
                </p>
              </li>
              <li class="faq__list">
                <button class="faq__item">Я буду есть одно и то же?</button>
                <p class="faq__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  dolorem debitis numquam perferendis fuga corporis commodi
                  dignissimos! Assumenda rerum iste ex quae, id nisi pariatur
                  minima dolorum magnam officia voluptatibus sequi expedita
                  temporibus eos eligendi totam nulla molestias soluta!
                  Praesentium dicta ex placeat reprehenderit labore itaque
                  provident eligendi quo quidem!
                </p>
              </li>
              <li class="faq__list">
                <button class="faq__item">
                  У меня аллергия и непереносимость определенных продуктов
                </button>
                <p class="faq__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  dolorem debitis numquam perferendis fuga corporis commodi
                  dignissimos! Assumenda rerum iste ex quae, id nisi pariatur
                  minima dolorum magnam officia voluptatibus sequi expedita
                  temporibus eos eligendi totam nulla molestias soluta!
                  Praesentium dicta ex placeat reprehenderit labore itaque
                  provident eligendi quo quidem!
                </p>
              </li>
              <li class="faq__list">
                <button class="faq__item">В какой очередности все есть?</button>
                <p class="faq__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  dolorem debitis numquam perferendis fuga corporis commodi
                  dignissimos! Assumenda rerum iste ex quae, id nisi pariatur
                  minima dolorum magnam officia voluptatibus sequi expedita
                  temporibus eos eligendi totam nulla molestias soluta!
                  Praesentium dicta ex placeat reprehenderit labore itaque
                  provident eligendi quo quidem!
                </p>
              </li>
              <li class="faq__list">
                <button class="faq__item">
                  Можно ли замораживать программу?
                </button>
                <p class="faq__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  dolorem debitis numquam perferendis fuga corporis commodi
                  dignissimos! Assumenda rerum iste ex quae, id nisi pariatur
                  minima dolorum magnam officia voluptatibus sequi expedita
                  temporibus eos eligendi totam nulla molestias soluta!
                  Praesentium dicta ex placeat reprehenderit labore itaque
                  provident eligendi quo quidem!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Order;
