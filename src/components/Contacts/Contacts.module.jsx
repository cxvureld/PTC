 import Styles from "./contacts.module.css";
 import "./../../assets/css/style.css";
 
 import { NavLink } from "react-bootstrap";

  const Contacts = () => {

    return (
        
      <section className={Styles["section"]} id="contacts-2">
    <div className={Styles["container"]}>

        <div className={Styles["section__header"]}>
            <h2 className={Styles["section__title"]}>Контакты</h2>
        </div>
 
        <div className={Styles["blog"]}>
            <div className={Styles["blog__item"]}>
                <div className={Styles["blog__header"]}>
                    </div>
                <div className={Styles["blog__content"]}>
                    <div className={Styles["blog__text"]}>Контакты</div>
                </div>
                    <div className={Styles["blog__title"]}>
                        <NavLink href="#tel:83852313760">8(3852)31-37-60</NavLink>

        </div>
                    
                <div className={Styles["blog__footer"]}>
                    
                </div>
            </div>

            <div className={Styles["blog__item"]}>
                <div className={Styles["blog__header"]}>
                </div>
                <div className={Styles["blog__content"]}>
                    <div className={Styles["blog__text"]}>Почта</div>
                </div>
                    <div className={Styles["blog__title"]}>

                        <NavLink href="#mailto:r_t_s@inbox.ru">r_t_s@inbox.ru</NavLink>
                    </div>
                    
                <div className={Styles["blog__footer"]}>
            </div>
            </div>

            <div className={Styles["blog__item"]}>
                <div className={Styles["blog__header"]}>
                </div>
                <div className={Styles["blog__content"]}>
                    <div className={Styles["blog__text"]}>Адрес</div>
                </div>
                    <div className={Styles["blog__title"]}>
                        <p> Г.БАРНАУЛ,ТРАКТОВАЯ УЛ, ДОМ № 47, КОРПУС Б</p>
                    </div>
                    
                <div className={Styles["blog__footer"]}>
            </div>
            </div>
       
        </div>

    </div>
</section>
    )
 }

 export { Contacts };

