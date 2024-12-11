import React, { useState } from 'react';

import PricePdf from "../../price-pdf.pdf";
import logoImg from "./../../assets/images/header/logo.svg";
import Phone from "./../../assets/images/header/phone.svg";
import Location from "./../../assets/images/header/location.svg";
import mobileImg from "../../assets/images/header/logo.svg";

import Styles from "./site-header.module.css";
import { NavLink } from "react-bootstrap";

  const setActive = ({ isActive }) => isActive ? Styles.active : '';

  const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive); 
    };

    return (

        <header className={Styles["site-header"]}>
            <div className={Styles["header-top"]}>
                <div className={Styles["container"]}>
                    <div className={Styles["header-row"]}>
                        <div className={Styles["header-mobile-logo"]}>
                            <NavLink href="./index.html" className={setActive}>
                                <img src={mobileImg} alt="PTC" />
                            </NavLink>
                        </div>
                        <div className={Styles["mobile-wrap-wrap"]}>ИП СЛИВКИН И.А.</div>
                        <div className={`hamburger ${isActive ? 'is-active' : ''}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={Styles["header-desc"]}>ИП СЛИВКИН И.А.</div>
                        <div className={Styles["header-right"]}>
                            <div className={Styles["header-number"]}>
                                <NavLink href="tel:73852313760" className={Styles["header-info"]}>
                                    <img src={Phone} alt="+7(3852)31-37-60" />
                                    <span>+7(3852)31-37-60,</span>
                                </NavLink>
                                <NavLink href="tel:79132100358" className={Styles["header-info"]}>
                                    <span>+7-913-210-03-58</span>
                                </NavLink>
                            </div>
                            <NavLink href="https://maps.app.goo.gl/UZJh9HXrPixBvxHC6" target="_blank" rel="noopener" className={Styles["header-info"]}>
                                <img src={Location} alt="Россия, г.Барнаул ул.Трактовая 47Б" />
                                <span>Россия, г.Барнаул ул.Трактовая 47Б</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Styles["header-bottom"]}>
                <div className={Styles["container"]}>
                    <div className={Styles["header-bottom-row"]}>
                        <div className={Styles["header-logo"]}>
                            <NavLink href="#" className={setActive}>
                                <img src={logoImg} alt="PTC" />
                            </NavLink>
                        </div>
                        <nav className={Styles["header-nav"]}>
                            <ul>
                                <li><NavLink href="#contacts">О нас</NavLink></li>
                                <li><NavLink href="#price-def">Услуги</NavLink></li>
                                <li><NavLink href="#contacts-2">Контакты</NavLink></li>
                                <li><NavLink href={PricePdf} target="_blank" rel="noopener noreferrer">Прайс</NavLink></li>
                                <li><NavLink href="#partners">Партнёры</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            
            
            <div className={`header-mobile-wrap ${isActive ? 'active' : ''}`} style={{ display: isActive ? 'block' : 'none' }}>
                    <nav className={Styles["header-mobile-nav"]}>
                        <ul>
                            <li><NavLink href="#contacts">О нас</NavLink></li>
                            <li><NavLink href="#price-def">Услуги</NavLink></li>
                            <li><NavLink href="#contacts-2">Контакты</NavLink></li>
                            <li><NavLink href={PricePdf} target="_blank" rel="noopener noreferrer">Прайс</NavLink></li>
                            <li><NavLink href="#partners">Партнёры</NavLink></li>
                        </ul>
                    </nav>
                    
                    <div className={Styles["header-mobile-info"]}>
                        <NavLink href="tel:73852313760" className={Styles["header-info"]}>
                            <img src={Phone} alt="+7(3852)31-37-60" />
                            <span>+7(3852)31-37-60</span>
                        </NavLink>
                        <NavLink href="https://maps.app.goo.gl/UZJh9HXrPixBvxHC6" target="_blank" className={Styles["header-info"]}>
                            <img src={Location} alt="Россия, г.Барнаул ул.Трактовая 47Б" />
                            <span>Россия, г.Барнаул ул.Трактовая 47Б</span>
                        </NavLink>
                    </div>
                </div>
           
        </header>
    );
}

export { Header };



