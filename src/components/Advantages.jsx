import React from 'react'
import advan1 from "../images/advan/eco.svg"
import advan2 from "../images/advan/Group_213.svg"
import advan3 from "../images/advan/time.svg"
import advan4 from "../images/advan/night.svg"
import advan5 from "../images/advan/Group_215.svg"
import advan6 from "../images/advan/Group_214.svg"

function Advantages() {
  return (
<>

<section className="section">
  <div className="container advantages">
    <ul className="advantages__list">
      <li className="advantages__item">
      <img className="advantages__icon" src={advan1} alt="" />

        <p className="advantages__text">
          Бережём природу. <br />
          Эко-тара и проборы.
        </p>
      </li>
      <li className="advantages__item">
      <img className="advantages__icon" src={advan2} alt="" />

        <p className="advantages__text">28 дней без повторения, более 300 блюд!</p>
      </li>
      <li className="advantages__item">
      
           <img className="advantages__icon" src={advan3} alt="" />
   
        <p className="advantages__text">
          Бесплатно заменяем <br />
          блюда и ингредиенты.
        </p>
      </li>
      <li className="advantages__item">
      <img className="advantages__icon" src={advan4} alt="" />

        <p className="advantages__text">
          Готовим ночью, упаковываем и отправляем Вам!
        </p>
      </li>
      <li className="advantages__item">
      <img className="advantages__icon" src={advan5} alt="" />

        <p className="advantages__text">
          Ежедневная удобная <br />
          и бесплатная доставка с 6:00 до 10:00
        </p>
      </li>
      <li className="advantages__item">
      <img className="advantages__icon" src={advan6} alt="" />

        <p className="advantages__text">
          Сохраняем Вашу энергию <br />
          и до 14 часов в неделю освобождая от готовки!
        </p>
      </li>
    </ul>
  </div>
</section>

</>
    )
}

export default Advantages