import "./statistic.module.css";

export default function Statistic () {
    return (
        <div className="statistics">
    <div className="container">

        <div className="stat">
            <div className="stat__item">
                <div className="stat__top">Более</div>
                <div className="stat__count">50</div>
                <div className="stat__text">Сотрудников</div>
            </div>
            <div className="stat__item">
                <div className="stat__top">Гарантия</div>
                <div className="stat__count">12</div>
                <div className="stat__text">Месяцев на двигатели ОАО «Барнаултрансмаш» </div>
            </div>
            <div className="stat__item">
                <div className="stat__top">Гарантия</div>
                <div className="stat__count">6</div>
                <div className="stat__text">Месяцев на двигатели других производителей</div>
            </div>
            <div className="stat__item">
                <div className="stat__top">сотрудничаем с</div>
                <div className="stat__count">крупными</div>
                <div className="stat__text">партнерами</div>
            </div>
            <div className="stat__item">
                <div className="stat__top">Основаны в</div>
                <div className="stat__count">2001</div>
                <div className="stat__text">году</div>
            </div>
        </div>

    </div>
</div>
    );
};


