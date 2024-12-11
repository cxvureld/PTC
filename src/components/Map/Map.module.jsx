

import  Styles from "./map.module.css";
import { NavLink } from "react-bootstrap";


const Map = () => {
    return (
        <section className="section  section--map">
    <div className={Styles["container"]}>
        <div className={Styles["map"]}>
            <h2 className={Styles["map__title"]}>
                <div><i className="fas fa-map-marker-alt"></i></div>
                <NavLink href="https://maps.app.goo.gl/UZJh9HXrPixBvxHC6" target="_blank">Открыть Карту</NavLink>
            </h2>
        </div>
    </div>
</section>
    )
}

export  { Map } ;

