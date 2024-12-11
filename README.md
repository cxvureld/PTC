import { useEffect, useRef } from 'react';
import Swiper from 'swiper';

const MyComponent = () => {
    const swiperRef = useRef(null);
    const [openModalId, setOpenModalId] = useState(null);

    useEffect(() => {
        // Инициализация Swiper
        swiperRef.current = new Swiper('.swiper-container', {
            // ваши настройки
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });

        return () => {
            // Очистка при размонтировании компонента
            if (swiperRef.current) {
                swiperRef.current.destroy();
            }
        };
    }, []);

    const openModal = (id) => {
        setOpenModalId(id);
        if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
        }
    };

    const closeModal = () => {
        setOpenModalId(null);
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
        }
    };

    return (
        <div>
            <SwiperSlide>
                <div className={Styles['swiper-wrapper']}>
                    <img className={Styles['swiper-img']} src={banner1} alt='Капитальный ремонт промышленных дизельных двигателей' />
                    <div className={Styles['swiper-title']}>
                        Капитальный ремонт<br />
                        промышленных дизельных<br />
                        двигателей
                    </div>
                    <button onClick={() => openModal("modal10")} className={Styles["def-btn"]}>
                        Сертификат
                    </button>

                    <Modal isOpen={openModalId === "modal10"} onClose={closeModal} id="modal10">
                        <div className={Styles["modal-card-certificate"]}>
                            <img className={Styles["modal-card-img-certificate"]} src={certificateImg} alt="Сертификат на капитальный ремонт промышленных дизельных двигателей" />
                        </div>
                        <div className={Styles["container"]}>
                            <button className={Styles["close-modal-button"]} onClick={closeModal}>
                                Закрыть
                            </button>
                        </div>
                    </Modal>
                </div>
            </SwiperSlide>
        </div>
    );
};

export default MyComponent;



<!-- <button onClick={() => openModal("modal10")} className={Styles["def-btn"]} >Сертификат</button>

                           <Modal isOpen={openModalId === "modal10"} onClose={closeModal} id="modal10">
                <div className={Styles["container"]}>
                 <img className={Styles["modal-card-img-certificate"]}
                      src={certificateImg}
                      alt="сертификат"
                      />
                 </div>

            
<button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
  
  </Modal -->


//СВАЙПЕР СЛАЙД//

