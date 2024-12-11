import Styles  from "./partners.module.css";

import { NavLink } from "react-bootstrap";


const Partners = () => {
    return (
        <section className={Styles["section"]} id="partners">
    <div className={Styles["container"]}>

        <div className={Styles["section__header"]}>
            
            <h2 className={Styles["section__title"]}>Наши Партнёры</h2>
        </div>

        <div className={Styles["services"]}>
            <div className="services__item  services__item--border">
            <div className={Styles["services__title"]}><NavLink  href="https://www.vdgbu.ru/" className={Styles["services__title-link"]} target="_blank" rel="noreferrer" > ФБУ «Администрация "Волго-Дон»</NavLink ></div>
        </div> 
            <div className="services__item  services__item--border">
                

                <div className={Styles["services__title"]}><NavLink  href="https://dsu4.ru/" className={Styles["services__title-link"]} target="_blank" rel="noreferrer" >ДРСУ Барнаула и Алтайского края</NavLink ></div>
            </div>

            <div className="services__item  services__item--border">
                
               <div className={Styles["services__title"]}><NavLink  href="https://www.rusprofile.ru/id/3398989" className={Styles["services__title-link"]} target="_blank" rel="noreferrer" >АО «Трансмашсервис»</NavLink ></div>
            </div>
            <div className={Styles["services__item"]}>
                

                <div className={Styles["services__title"]}><NavLink  href="https://www.kuchuk.ru/" className={Styles["services__title-link"]} target="_blank" rel="noreferrer" >АО «Кучуксульфат»</NavLink ></div>
                
            </div>
            <div className={Styles["services__item"]}>
                

                <div className={Styles["services__title"]}><NavLink  href="http://enspk.ru/" className={Styles["services__title-link"]} target="_blank" rel="noreferrer" >АО Енисейская сплавная контора</NavLink ></div>
                
            </div>
            
        </div>

    </div>
</section>
    )
};

export { Partners }
