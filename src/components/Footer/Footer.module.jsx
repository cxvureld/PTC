import Styles from "./footer.module.css";
import footerImg from "../../assets/images/footer/logo-footer.svg";
import locationImg from "../../assets/images/header/location.svg";
import phoneImg from "../../assets/images/header/phone.svg";

import { NavLink } from "react-bootstrap";

  const  setActive = ({isActive}) => isActive;

  const Footer = () => {
     return (

        <footer className={Styles ["site-footer"]} id="footer">
    <div className={Styles ["container"]}>
        <div className={Styles ["footer-row"]}>
            <div className={Styles ["footer-left"]}>
                <div className={Styles ["footer-desc"]}>ИП СЛИВКИН И.А.</div>
                  <div className={Styles ["footer-logo"]}>
                    <NavLink href="./index.html" className={setActive}>
                    <img src={ footerImg } 
                         alt="Логотип"/>
                </NavLink>
                  </div>

            </div>
            <div className={Styles ["footer-right"]}>
                   
                <nav className={Styles ["footer-nav"]}>
                    <h5 className={Styles ["footer-title"]}>Наши услуги</h5>
                    <ul>
                         <li><NavLink href="#"> Ремонт двигателей D6, D12 </NavLink> </li>
                         <li><NavLink href="#"> Ремонт двигателей ЯМЗ </NavLink> </li>
                         <li><NavLink href="#"> Ремонт двигателей КАМАЗ</NavLink></li>
                         <li><NavLink href="#"> Ремонт двигателей А-01, Д-260, <br/> А-41, Д-240 </NavLink> </li>
                    </ul>
                </nav>

                <div className={Styles ["footer-nav"]}>
                    <h5 className={Styles ["footer-title"]}>График работы</h5>
                    <ul>
                         <li>Понедельник: 8:00 - 17:00</li>
                         <li>Вторник: 8:00 - 17:00</li>
                         <li>Среда: 8:00 - 17:00</li>
                         <li>Четверг: 8:00 - 17:00</li>
                         <li>Пятница: 8:00 - 17:00</li>
                         <li>Суббота: Выходной</li>
                         <li>Воскресенье: Выходной</li>
                         
                    </ul>
                </div>

                <div className={Styles ["footer-nav"]}>
                    <h5 className={Styles ["footer-title"]}>Контакты</h5>
                    <div className={Styles ["footer-info-item"]}>
                        <div className={Styles ["footer-info-icon"]}>
                            <img src={ locationImg } 
                                 alt="Локация"/>
                                 </div>
                        <div className={Styles ["footer-info-text"]}>Россия, г.Барнаул ул.Трактовая 47Б</div>
                    </div>
                    <div  className={Styles ["footer-info-item"]}>
                        <div className={Styles ["footer-info-icon"]}><img src={phoneImg} alt="Телефон"/></div>
                        <div className={Styles ["footer-info-text"]}>+7 (913) 210-03-58 <br/> +7(3852)31-37-60</div>
                    </div>
                </div>
        </div>
        
        </div>
            <div className={Styles ["footer-copyright"]}>
        </div>

    </div>
             
</footer>
    )
}

export {Footer} 