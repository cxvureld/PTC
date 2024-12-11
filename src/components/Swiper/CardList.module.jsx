import React, {  useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from "../Modal/Modal";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import tesT from "../../assets/images/banner/test.jpg";
import banner1 from "../../assets/images/banner/banner-1.jpg";
import banner2 from "../../assets/images/banner/banner-2.jpg";
import banner3 from "../../assets/images/banner/banner-3.jpg";
import certificateImg from "../../assets/images/about/certificate.jpg";

import Styles from "./swiper.module.css";

import { Autoplay, EffectFade, Navigation, Pagination  } from 'swiper/modules';

const CardList =  () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const swiperRef = useRef(null); 
     
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id, content) => {
        setOpenModalId(id);
        setModalContent(content);
        setIsOpen(true);
          if (swiperRef.current) {
              swiperRef.current.swiper.autoplay.stop(); 
              swiperRef.current.swiper.allowTouchMove = false; 
    }
  };

  const closeModal = () => {
        setOpenModalId(null);
        setIsOpen(false);
        setModalContent('');
         if (swiperRef.current) {
             swiperRef.current.swiper.autoplay.start(); 
             swiperRef.current.swiper.allowTouchMove = true; 
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        speed={1200}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <div className={Styles['swiper-wrapper']}>
               <img className={Styles['swiper-img']} 
                    src={tesT}
                    alt='Test'
                />
            <div className={Styles['swiper-title']}>Капитальный ремонт<br/>
                                                    промышленных дизельных<br/>
                                                    двигателей <br/>
              <button onClick={() => openModal("modal9")} className={Styles["def-btn"]} >Свидетельство</button>
                  </div>
                      <div>
            </div>
          </div>
           
                   <Modal isOpen={openModalId === "modal9"} onClose={closeModal} id="modal9">
                          <div className={Styles["certificate-container"]}>
                            <div className={Styles["certificate-content"]}>
                              <img className={Styles["certificate"]}
                                   src={ certificateImg}
                                   alt="Сертификат" 
                                   />
                                  <button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
                             </div>
                        </div>
                   </Modal>
          </SwiperSlide>

        <SwiperSlide>
         <div className={Styles['swiper-wrapper']}>
              <img className={Styles['swiper-img']} 
                   src={banner1}
                   alt='Banner1'
               />
            <div className={Styles['swiper-title']}>Капитальный ремонт<br/>
                                                    промышленных дизельных<br/>
                                                    двигателей <br/>
              <button onClick={() => openModal("modal10")} className={Styles["def-btn"]} >Свидетельство</button>
                      </div>
          </div>
            
                    <Modal isOpen={openModalId === "modal10"} onClose={closeModal} id="modal9">
                           <div className={Styles["certificate-container"]}>
                              <div className={Styles["certificate-content"]}>
                                 <img className={Styles["certificate"]}
                                      src={ certificateImg}
                                      alt="Сертификат" 
                                      />
                                    <button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
                               </div>
                            </div>
                     </Modal>
         </SwiperSlide>

        <SwiperSlide>
         <div className={Styles['swiper-wrapper']}>
              <img className={Styles['swiper-img']} 
                   src={banner2}
                   alt='Banner2'
               />
               <div className={Styles['swiper-title']}>Капитальный ремонт<br/>
                                                       промышленных дизельных<br/>
                                                       двигателей<br/>
                  <button onClick={() => openModal("modal11")} className={Styles["def-btn"]} >Свидетельство</button>
                         </div>
          </div>
            

            <Modal isOpen={openModalId === "modal11"} onClose={closeModal} id="modal9">
                    <div className={Styles["certificate-container"]}>
                      <div className={Styles["certificate-content"]}>
                        <img className={Styles["certificate"]}
                             src={ certificateImg}
                             alt="Сертификат"
                              />
                            <button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
                       </div>
                    </div>
              </Modal>
         </SwiperSlide>

        <SwiperSlide>
         <div className={Styles['swiper-wrapper']}>
              <img className={Styles['swiper-img']} 
                   src={banner3}
                   alt='Banner3'
               />
             <div className={Styles['swiper-title']}>Капитальный ремонт<br/>
                                                     промышленных дизельных<br/>
                                                     двигателей<br/>
                <button onClick={() => openModal("modal12")} className={Styles["def-btn"]} >Свидетельство</button>
                        </div>
          </div>

            <Modal isOpen={openModalId === "modal12"} onClose={closeModal} id="modal9">
                    <div className={Styles["certificate-container"]}>
                      <div className={Styles["certificate-content"]}>
                        <img className={Styles["certificate"]}
                             src={ certificateImg}
                             alt="Сертификат" 
                             />
                           <button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
                      </div>
                  </div>
              </Modal>
         </SwiperSlide>
            
     </Swiper>
    </>
  );
}

export { CardList };