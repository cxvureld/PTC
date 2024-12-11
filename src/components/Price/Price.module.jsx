import React, { useState } from "react";
import Modal from "../Modal/Modal";

import Styles from "./price.module.css";
import ymzImg from "../../assets/images//price_engine/ymz-238.png";
import ymz236Img from "../../assets/images/price_engine/ymz-236.png";
import ymz240Img from "../../assets/images/price_engine/ymz-240.png";
import dd6Img from "../../assets/images/price_engine/dd6.jpg";
import d12Img from "../../assets/images/price_engine/D12.png";
import a41Img from "../../assets/images/price_engine/a-41.png";
import a01Img from "../../assets/images/price_engine/a01.png";
import kamazImg from "../../assets/images/price_engine/KAMAZ.png";
import ymz238Modal from "../../assets/images/price-modal/ymz-238-big.png";
import ymz236Mdapl from "../../assets/images/price-modal/ymz-236-big.png";
import ymz240Modal from "../../assets/images/price-modal/ymz-240-big.png";
import dd6Modal from "../../assets/images/price-modal/dd6-big.jpg";
import b46Modal from "../../assets/images/price-modal/b46-big.png";
import a41Modal from "../../assets/images/price-modal/a-41-big.png";
import a01Modal from "../../assets/images/price-modal/a01-big.png";
import kamazModal from "../../assets/images/price-modal/KAMAZ-big.png";

const Price = () => {
    const [openModalId, setOpenModalId] = useState(null);

    const openModal = (id) => {
    setOpenModalId(id);
   };

    const closeModal = () => {
    setOpenModalId(null);
   };

    return (

      <section className={Styles["price-def"]} id="price-def">
   
          <div className={Styles["container"]}>
            <div className={Styles["section__header"]}>
              <h2 className={Styles["section__title"]}>Услуги</h2>
         </div>
            </div>

        <div className={Styles["main__cards"]}>
            
           <div className={Styles["test-item"]}>
            <button onClick={() => openModal("modal1")} className={Styles["card"]} > 
                    <img className={Styles["card__image"]} 
                            src={ymzImg} 
                            alt="ЯМЗ-238"
                            />
                    <div className={Styles["card__text"]}>
                                <p>Ремонт двигателя<br/>
                                    ЯМЗ-238</p>
                    </div>
            </button> 
           </div>
                   
            <Modal isOpen={openModalId === "modal1"} onClose={closeModal} id="modal1">
                      <div className={Styles["modal-card"]}>
                        <img className={Styles["modal-card-img"]}
                             src={ymz238Modal}
                             alt="ЯМЗ-238-модалка"
                            />
                     </div>
               <div className={Styles["container"]}>
                 <h2 className={Styles["modal-paragraph"]}>ЯМЗ-238</h2>
                 <h1 className={Styles["modal-title"]}>1.1.1 Конструктивные особенности семейства двигателей.  </h1>
                  <p className={Styles["modal-text"]}>Семейство дизелей типа ЯМЗ-238ДИ сформировано из судовых четырёхтактных дизелей, жидкостного
                                                      охлаждения, V-образного исполнения, однополостной камерой сгорания в поршне, непосредственным
                                                      впрыском топлива, блочным топливным насосом высокого давления.</p>

            <div className={Styles["table-container"]}>

            <table className="responsive-table" border="1" width="80%">
                  <thead>
                      <tr>
                          <th>Конструктивные признаки</th>
                          <th>Значения</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Обозначение семейства</td>
                          <td>ЯМЗ-238ДИ</td>
                      </tr>
                      <tr>
                          <td>Рабочий цикл (тактность)</td>
                          <td>4-тактный</td>
                      </tr>
                      <tr>
                          <td>Рабочий объём двигателя, дм<sup>3</sup></td>
                          <td>14,86</td>
                      </tr>
                      <tr>
                          <td>Диаметр цилиндра, мм</td>
                          <td>130</td>
                      </tr>
                      <tr>
                          <td>Ход поршня, мм</td>
                          <td>140</td>
                      </tr>
                      <tr>
                          <td>Число и расположение цилиндров</td>
                          <td>12, V-образное, угол 75°</td>
                      </tr>
                      <tr>
                          <td>Охлаждающая среда</td>
                          <td>Вода</td>
                      </tr>
                      <tr>
                          <td>Способ воздухоснабжения</td>
                          <td>Без наддува</td>
                      </tr>
                      <tr>
                          <td>Вид топлива</td>
                          <td>Дизельное по ГОСТ 305</td>
                      </tr>
                      <tr>
                          <td>Способ воспламенения топлива</td>
                          <td>Сжатие</td>
                      </tr>
                      <tr>
                          <td>Тип камеры сгорания</td>
                          <td>Открытая</td>
                          </tr>
                          <tr>
                            <td>Клапан впуска (расположение, размер тарелки, число)</td>
                            <td>В головке цилиндра, 48мм, один
                            на цилиндр</td>
                        </tr> 
                           <tr>
                            <td>Тип и конструктивные особенности
                            топливной системы</td>
                            <td>Комбинированная:Блочный ТНВД, трубки с защитными кожухами, форсунки</td>
                           </tr>
                           <tr>
                            <td>Количество сопловых отверстий
                            распылителя форсунки</td>
                            <td>4</td>
                           </tr>
                           <tr>
                            <td>Диаметр сопловых отверстий, мм</td>
                            <td>0,3</td>
                           </tr>
                           <tr>
                            <td>Установочный угол опережения впрыска топлива при номинальной мощности, град.</td>
                            <td>5-6</td>
                           </tr>
                           <tr>
                            <td>Цилиндровая мощность в пределах
                            семейства, кВт</td>
                            <td>Не более 16,5 кВт</td>
                           </tr>
                           <tr>
                            <td>Номинальная частота вращения в
                            пределах семейства, об/мин.</td>
                            <td>1500</td>
                           </tr>
                           <tr>
                            <td>Степень сжатия полная</td>
                            <td>16,5</td>
                           </tr>
                          </tbody>
                          </table>  
            </div> 
                                            
            <button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
         </div>
            </Modal>
                
            <div className={Styles["test-item"]}>
        <button onClick={() => openModal("modal2")} className={Styles["card"]}> 
               <img className={Styles["card__image"]} 
                    src={ymz236Img} 
                    alt="ЯМЗ-236"
                    />
            <div className={Styles["card__text"]}>
                     <p>Ремонт двигателя<br/>
                         ЯМЗ-236</p>
            </div>
        </button> 
            </div>
        
            <Modal isOpen={openModalId === "modal2"} onClose={closeModal}>
                     <div className={Styles["modal-card"]}>
                        <img className={Styles["modal-card-img"]}
                             src={ymz236Mdapl}
                             alt="ЯМЗ-236-модалка"
                             />
                     </div>
                <div className={Styles["container"]}>
                  <h2 className={Styles["modal-paragraph"]}>ЯМЗ-236</h2>
                  <h1 className={Styles["modal-title"]}>1.1.1 Конструктивные особенности семейства двигателей.  </h1>
                  <p className={Styles["modal-text"]}>Семейство дизелей типа ЯМЗ-236М2 сформировано из судовых четырёхтактных дизелей, жидкостного
                                                      охлаждения, V-образного исполнения, однополостной камерой сгорания в поршне, непосредственным
                                                      впрыском топлива, блочным топливным насосом высокого давления.</p>

                       <div className={Styles["table-container"]}>

                       <table className="responsive-table" border="1" width="80%">
       <thead>
           <tr>
               <th>Конструктивные признаки</th>
               <th>Значения</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Обозначение семейства</td>
               <td>ЯМЗ-236М2</td>
           </tr>
           <tr>
               <td>Рабочий цикл (тактность)</td>
               <td>4-тактный</td>
           </tr>
           <tr>
               <td>Рабочий объём двигателя, дм<sup>3</sup></td>
               <td>22,3</td>
           </tr>
           <tr>
               <td>Диаметр цилиндра, мм</td>
               <td>130</td>
           </tr>
           <tr>
               <td>Ход поршня, мм</td>
               <td>140</td>
           </tr>
           <tr>
               <td>Число и расположение цилиндров</td>
               <td>6, V-образное, угол 90"</td>
           </tr>
           <tr>
               <td>Охлаждающая среда</td>
               <td>Вода</td>
           </tr>
           <tr>
               <td>Способ воздухоснабжения</td>
               <td>Без наддува</td>
           </tr>
           <tr>
               <td>Вид топлива</td>
               <td>Дизельное по ГОСТ 305</td>
           </tr>
           <tr>
               <td>Способ воспламенения топлива</td>
               <td>Сжатие</td>
           </tr>
           <tr>
               <td>Тип камеры сгорания</td>
               <td>Открытая</td>
               </tr>
               <tr>
                 <td>Клапан впуска (расположение, размер тарелки, число)</td>
                 <td>В головке цилиндра, 61мм, один
                 на цилиндр</td>
             </tr> 
             <tr>
                <td>Клапан выпуска (расположение,
                    размер тарелки, число)</td>
                    <td>В головке цилиндра, 48мм, один
                    на цилиндр</td>
             </tr>
                <tr>
                 <td>Тип и конструктивные особенности
                 топливной системы</td>
                 <td>Комбинированная:Блочный ТНВД, трубки с защитными кожухами, форсунки</td>
                </tr>
                <tr>
                    <td>Тип и конструктивные особенности
                    форсунки</td>
                    <td>Закрытого типа, с
                       многоструйным распылителем,
                        гидравлически управляемой
                          иглой</td>
                </tr>
                <tr>
                 <td>Количество сопловых отверстий
                 распылителя форсунки</td>
                 <td>4</td>
                </tr>
                <tr>
                 <td>Диаметр сопловых отверстий, мм</td>
                 <td>0,3</td>
                </tr>
                <tr>
                 <td>Установочный угол опережения впрыска топлива при номинальной мощности, град.</td>
                 <td>18</td>
                </tr>
                <tr>
                 <td>Цилиндровая мощность в пределах
                 семейства, кВт</td>
                 <td>Не более 16,5 кВт</td>
                </tr>
                <tr>
                 <td>Номинальная частота вращения в
                 пределах семейства, об/мин.</td>
                 <td>1500</td>
                </tr>
                <tr>
                 <td>Степень сжатия полная</td>
                 <td>16,5</td>
                </tr>
               </tbody>
               </table>  
               </div> 
                                 
           <button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
        </div>
            </Modal>

           <div className={Styles["test-item"]}>
              <button onClick={() => openModal("modal3")} className={Styles["card"]}> 
                 <img className={Styles["card__image"]} 
                      src={ymz240Img} 
                      alt="ЯМЗ-240"
                      />
              <div className={Styles["card__text"]}>
                     <p>Ремонт двигателя<br/>
                         ЯМЗ-240</p>
              </div>
            </button> 
           </div>

            <Modal isOpen={openModalId === "modal3"} onClose={closeModal}>
                   <div className={Styles["modal-card"]}>
                     <img className={Styles["modal-card-img"]}
                          src={ymz240Modal}
                          alt="ЯМЗ-240-модалка"
                          />
                    </div>
              <div className={Styles["container"]}>
                <h2 className={Styles["modal-paragraph"]}>ЯМЗ-240</h2>
                <h1 className={Styles["modal-title"]}>1.1.1 Конструктивные особенности семейства двигателей.  </h1>
                <p className={Styles["modal-text"]}>Семейство дизелей типа ЯМЗ-240 сформировано из судовых четырёхтактных дизелей, жидкостного
                                                    охлаждения, V-образного исполнения, однополостной камерой сгорания в поршне, непосредственным
                                                    впрыском топлива, блочным топливным насосом высокого давления.</p>

             <div className={Styles["table-container"]}>

             <table className="responsive-table" border="1" width="80%">
       <thead>
           <tr>
               <th>Конструктивные признаки</th>
               <th>Значения</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Обозначение семейства</td>
               <td>ЯМЗ-240</td>
           </tr>
           <tr>
               <td>Рабочий цикл (тактность)</td>
               <td>4-тактный</td>
           </tr>
           <tr>
               <td>Рабочий объём двигателя, дм<sup>3</sup></td>
               <td>22,3</td>
           </tr>
           <tr>
               <td>Диаметр цилиндра, мм</td>
               <td>130</td>
           </tr>
           <tr>
               <td>Ход поршня, мм</td>
               <td>140</td>
           </tr>
           <tr>
               <td>Число и расположение цилиндров</td>
               <td>12, V-образное, угол 75"</td>
           </tr>
           <tr>
               <td>Охлаждающая среда</td>
               <td>Вода</td>
           </tr>
           <tr>
               <td>Способ воздухоснабжения</td>
               <td>Без наддува</td>
           </tr>
           <tr>
               <td>Вид топлива</td>
               <td>Дизельное по ГОСТ 305</td>
           </tr>
           <tr>
               <td>Способ воспламенения топлива</td>
               <td>Сжатие</td>
           </tr>
           <tr>
               <td>Тип камеры сгорания</td>
               <td>Открытая</td>
               </tr>
               <tr>
                 <td>Клапан впуска (расположение, размер тарелки, число)</td>
                 <td>В головке цилиндра, 61мм, один
                 на цилиндр</td>
             </tr> 
             <tr>
                <td>Клапан выпуска (расположение,
                    размер тарелки, число)</td>
                    <td>В головке цилиндра, 48мм, один
                    на цилиндр</td>
             </tr>
                <tr>
                 <td>Тип и конструктивные особенности
                 топливной системы</td>
                 <td>Комбинированная:Блочный ТНВД, трубки с защитными кожухами, форсунки</td>
                </tr>
                <tr>
                    <td>Тип и конструктивные особенности
                    форсунки</td>
                    <td>Закрытого типа, с
                       многоструйным распылителем,
                        гидравлически управляемой
                          иглой</td>
                </tr>
                <tr>
                 <td>Количество сопловых отверстий
                 распылителя форсунки</td>
                 <td>4</td>
                </tr>
                <tr>
                 <td>Диаметр сопловых отверстий, мм</td>
                 <td>0,3</td>
                </tr>
                <tr>
                 <td>Установочный угол опережения впрыска топлива при номинальной мощности, град.</td>
                 <td>18</td>
                </tr>
                <tr>
                 <td>Цилиндровая мощность в пределах
                 семейства, кВт</td>
                 <td>Не более 18,5 кВт</td>
                </tr>
                <tr>
                 <td>Номинальная частота вращения в
                 пределах семейства, об/мин.</td>
                 <td>1800</td>
                </tr>
                <tr>
                 <td>Степень сжатия полная</td>
                 <td>16,5</td>
                </tr>
               </tbody>
               </table>  
               </div> 
                <button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
             </div>
            </Modal>

            <div className={Styles["test-item"]}>
         
         <button onClick={() => openModal("modal4")} className={Styles["card"]}> 
         
         <img className={Styles["card__image"]} 
                 src={dd6Img} 
                 alt="D6"
                 />
                 <div className={Styles["card__text"]}>
                     <p>Ремонт двигателя<br/>
                         типа D6 и D12</p>
                 </div>
     </button> 
     
            </div>

            <Modal isOpen={openModalId === "modal4"} onClose={closeModal}>
                  <div className={Styles["modal-card"]}>
                    <img className={Styles["modal-card-img"]}
                         src={dd6Modal}
                         alt="Д6-Модалка"
                         />
                  </div>
             <div className={Styles["container"]}>
               <h2 className={Styles["modal-paragraph"]}>D6 и D12</h2>
               <h1 className={Styles["modal-title"]}>1.1.1 Конструктивные особенности семейства двигателей.  </h1>
               <p className={Styles["modal-text"]}>Семейство V-СГС/ЕЗ сформировано из главных судовых четырехтактных дизелей,
                                                   водяного охлаждения, V-образного исполнения, без наддува, открытой камерой сгорания,
                                                   непосредственным впрыском топлива, блочным топливным насосом высокого давления,
                                                   работающих по винтовой характеристике.</p>

            <div className={Styles["table-container"]}>
            <table className="responsive-table" border="1" width="80%">
       <thead>
           <tr>
               <th>Конструктивные признаки</th>
               <th>Значения</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Обозначение семейства</td>
               <td>D6/D12</td>
           </tr>
           <tr>
               <td>Рабочий цикл (тактность)</td>
               <td>4-тактный</td>
           </tr>
           <tr>
               <td>Диаметр Цилиндра<sup>3</sup></td>
               <td>150</td>
           </tr>
           <tr>
               <td>Ход поршня</td>
               <td>180 мм</td>
           </tr>
           <tr>
               <td>Способ воспламенения</td>
               <td>От сжатия</td>
           </tr>
           <tr>
               <td>Охлаждающая среда</td>
               <td>Вода</td>
           </tr>
           <tr>
               <td>Расположение цилиндров</td>
               <td>Рядное,вертикальное/ V-образное, угол 60</td>
           </tr>
           <tr>
               <td>Способ воздухоснабжения</td>
               <td>Без Наддува</td>
           </tr>
           <tr>
               <td>Кол-во и размер впускных клапанов (каналов)</td>
               <td>Два на цилиндр, диаметр 54мм</td>
           </tr>
           <tr>
               <td>Кол-во и размер выпускных клапанов (каналов)</td>
               <td>Два на цилиндр, диаметр 50мм</td>
               </tr>
               <tr>
                 <td>Тип топлива</td>
                 <td>Дизельное по ГОСТ 305 (зарубежные аналоги по ИСО 8217)</td>
             </tr> 
             <tr>
                <td>Тип и конструктивные особенности камеры сгорания</td>
                    <td>открытая камера сгорания</td>
             </tr>
                <tr>
                 <td>Тип и конструктивные особенности топливной системы</td>
                 <td>Блочный ТНВД трубки и форсунки</td>
                </tr>
                <tr>
                    <td>Тип и конструктивные особенности форсунки</td>
                    <td>Закрытого типа с гидравлическим
                    управлением подъемом иглы</td>
                </tr>
                <tr>
                 <td>Количество сопловых отверстий
                 распылителя форсунки</td>
                 <td>7</td>
                </tr>
                <tr>
                 <td>Диаметр сопловых отверстий, мм</td>
                 <td>0, 25 мм равномерно по окружности, телесный угол конуса факелов 140 °</td>
                </tr>
                <tr>
                 <td>Угол опережения впрыска топлива при номинальной</td>
                 <td>32 град. ПКВ до ВМТ</td>
                </tr>
                <tr>
                 <td> Способ регулирования цикловой подачи топлива (мощности)</td>
                 <td>Концом подачи</td>
                </tr>
                <tr>
                 <td>Цилиндровая мощность в пределах семейства</td>
                 <td>Не более 18,3 кВт</td>
                </tr>
                <tr>
                 <td>Номинальная частота вращения в пределах семейства</td>
                 <td>1500 об/мин</td>
                </tr>
                <tr>
                    <td>Количество цилиндров</td>
                    <td>6/12</td>
                </tr>
                <tr>
                    <td>Степень сжатия полная</td>
                    <td>14</td>
                </tr>
               </tbody>
               </table>  
               </div> 
                                 
              <button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
           </div>
            </Modal>

            <div className={Styles["test-item"]}>
               <button onClick={() => openModal("modal5")} className={Styles["card"]}>
                    <img className={Styles["card__image"]} 
                         src={d12Img} 
                         alt="В-46"
                        />
                    <div className={Styles["card__text"]}>
                                <p>Ремонт двигателя<br/>
                                    типа B-46</p>
                    </div>

                </button>
            </div>
                
            <Modal isOpen={openModalId === "modal5"} onClose={closeModal}>
                       <div className={Styles["modal-card"]}>
                         <img className={Styles["modal-card-img"]}
                              src={b46Modal}
                              alt="B46-Модалка"
                              />
                      </div>
           <div className={Styles["container"]}>
             <h2 className={Styles["modal-paragraph"]}>В-46</h2>
             <h1 className={Styles["modal-title"]}>Технические характеристики дизельного двигателя В-46  </h1>
        
                       <div className={Styles["table-container"]}>
                       <table className="responsive-table" border="1" width="80%">
       <thead>
           <tr>
               <th>Показатель</th>
               <th>Значение</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Тип двигателя</td>
               <td>четырехтактный, V-образный, 12-цилиндровый многотопливный дизельный двигатель жидкостного охлаждения с наддувом от центробежного нагнетателя</td>
           </tr>
           <tr>
               <td>Система смесеобразования</td>
               <td>непосредственный впрыск топлива</td>
           </tr>
           <tr>
               <td>Мощность двигателя без сопротивления на впуске и выпуске, кВт (л.с.)</td>
               <td>574 (780)</td>
           </tr>
           <tr>
               <td>Частота вращения, с-1 (об/мин)</td>
               <td>33,3 (2000)</td>
           </tr>
           <tr>
               <td>Запас по крутящему моменту, %</td>
               <td>18</td>
           </tr>
           <tr>
               <td>Удельный расход топлива, г/кВт*ч
               (г/л.с.*ч)</td>
               <td>245 (180)</td>
           </tr>
           <tr>
               <td>Масса, кг</td>
               <td>980</td>
           </tr>
           <tr>
               <td>Удельная мощность, кВт/кг
               (л.с./кг)</td>
               <td>0,59 (0,80)</td>
           </tr>
           <tr>
               <td>Диаметр цилиндра, мм</td>
               <td>150,0</td>
           </tr>
           <tr>
               <td>Ход поршня в цилиндре с главным
               шатуном, мм</td>
               <td>180,0</td>
               </tr>
               <tr>
                 <td>Ход поршня в цилиндре с
                 прицепным шатуном, мм</td>
                 <td>186,7</td>
             </tr> 
             <tr>
                <td>Рабочий объем, л</td>
                    <td>38,88</td>
             </tr>
                <tr>
                 <td>Минимальная температура надежного пуска двигателя без предварительного разогрева, °С</td>
                 <td>5°C</td>
                </tr>
                <tr>
                    <td>Допустимые условия эксплуатации двигателей:</td>
        
                </tr>
                <tr>
                 <td>- температура окружающего
                 воздуха</td>
                 <td>от -40°С до +50°С</td>
                </tr>
                <tr>
                 <td>- относительная влажность
                 воздуха</td>
                 <td>до 98% при 20°С</td>
                </tr>
                <tr>
                 <td>- высота над уровнем моря</td>
                 <td>до 3000 м</td>
                </tr>
                <tr>
                 <td> Порядок чередования вспышек</td>
                 <td>равномерный, через 60° поворота коленчатого вала</td>
                </tr>
                <tr>
                 <td>Степень уравновешенности</td>
                 <td>полная динамическая уравновешенность</td>
                </tr>
                
                 
               </tbody>
               </table>  
               </div> 
                <button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
           </div>
            </Modal>
                 
            <div className={Styles["test-item"]}>
                <button onClick={() => openModal("modal6")} className={Styles["card"]}>
                    <img className={Styles["card__image" ]}
                         src={a41Img}
                         alt="А-41"
                         />
                  <div className={Styles["card__text"]}>
                                <p>Ремонт двигателя типа<br/>
                                    А-41, Д-240</p>
                  </div>
                </button>
            </div>
                
            <Modal isOpen={openModalId === "modal6"} onClose={closeModal}>
               <div className={Styles["modal-card"]}>
                 <img className={Styles["modal-card-img"]}
                      src={ a41Modal }
                      alt="А-41-Модалка"
                      />
               </div>
         <div className={Styles["container"]}>
           <h2 className={Styles["modal-paragraph"]}>А-41</h2>
           <h1 className={Styles["modal-title"]}>Основные технические характеристики дизельного двигателя А-41  </h1>
        
                <div className={Styles["table-container"]}>
                <table className="responsive-table" border="1" width="80%">
       <thead>
           <tr>
               <td>Мощность номинальная, кВт/л.с.</td>
               <td>69/94</td>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Общий рабочий объём, л</td>
               <td>7.43</td>
           </tr>
           <tr>
               <td>Порядок работы</td>
               <td>1-3-4-2</td>
           </tr>
           <tr>
               <td>Направление вращения коленчатого
               вала</td>
               <td>Правое</td>
           </tr>
           <tr>
               <td>Степень сжатия</td>
               <td>16</td>
           </tr>
           <tr>
               <td>Диаметр поршня, мм</td>
               <td>130</td>
           </tr>
           <tr>
               <td>Ход поршня, мм</td>
               <td>140</td>
           </tr>
           <tr>
               <td>Номинальная частота вращения, об/мин</td>
               <td>1750</td>
           </tr>
           <tr>
               <td>Максимальный крутящий момент при
               1200-1300 оборотах, Н.м</td>
               <td>442</td>
           </tr>
           <tr>
               <td>Минимальное устойчивая частота
               холостых оборотов, об/мин</td>
               <td>600</td>
           </tr>
           <tr>
               <td>Удельный расход топлива, г. на кВт в
               час/г на л.с. в час</td>
               <td>227/170</td>
               </tr>
               <tr>
                 <td>Расход масла к расходу топлива, %</td>
                 <td>2.5</td>
             </tr> 
             <tr>
                <td>Запас крутящего момента, %</td>
                    <td>Не менее 15</td>
             </tr>
                <tr>
                 <td>Размер длина/высота/ширина, мм</td>
                 <td>1428/1334/827</td>
                </tr>
                <tr>
                 <td>Масса, кг</td>
                 <td>930</td>
                </tr>
                <tr>
                 <td>Допустимый рабочий продольный угол
                 наклона,°</td>
                 <td>30</td>
                </tr>
                <tr>
                 <td>Допустимый рабочий поперечный угол
                 наклона,°</td>
                 <td>25</td>
                </tr> 
               </tbody>
               </table>  
               </div> 
                <button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
          </div>
            </Modal>
                
            <div className={Styles["test-item"]}>
               <button onClick={() => openModal("modal7")} className={Styles["card"]}>
                    <img className={Styles["card__image"]} 
                         src={a01Img}
                         alt="А-01"
                         />
                    <div className={Styles["card__text"]}>
                                <p>Ремонт двигателя типа<br/>
                                    А-01, Д-260</p>
                    </div>
                </button>
            </div>

             <Modal isOpen={openModalId === "modal7"} onClose={closeModal}>
                <div className={Styles["modal-card"]}>
                  <img className={Styles["modal-card-img"]}
                       src={ a01Modal }
                       alt="А-01-Модалка"
                       />
                </div>
       <div className={Styles["container"]}>
         <h2 className={Styles["modal-paragraph"]}>А-01</h2>
         <h1 className={Styles["modal-title"]}>Основные технические характеристики дизельного двигателя А-01  </h1>
        
                       <div className={Styles["table-container"]}>
                       <table className="responsive-table" border="1" width="80%">
       <thead>
           <tr>
               <th>Наименование</th>
               <th>Значение</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Количество цилиндров</td>
               <td>6</td>
           </tr>
           <tr>
               <td>Диаметр поршней, мм</td>
               <td>140</td>
           </tr>
           <tr>
               <td>Рабочий ход, мм</td>
               <td>130</td>
           </tr>
           <tr>
               <td>Объем двигателя, л</td>
               <td>11,15</td>
           </tr>
           <tr>
               <td>Мощность, л.с.</td>
               <td>135</td>
           </tr>
           <tr>
               <td>Частота вращения, мин</td>
               <td>1700</td>
           </tr>
           <tr>
               <td>Крутящий момент, Н*м</td>
               <td>685</td>
           </tr>
           <tr>
               <td>Расход топлива, г/л.с. в час</td>
               <td>163</td>
           </tr>
           <tr>
               <td>Угар масла с топливом, г/л</td>
               <td>3</td>
           </tr>
           <tr>
               <td>Масса, кг</td>
               <td>1200</td>
               </tr>
                
               </tbody>
               </table>  
               </div> 
                <button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
          </div>
             </Modal>
     
           <div className={Styles["test-item"]}>  
           <button onClick={() => openModal("modal8")} className={Styles["card"]}>
                <img className={Styles["card__image" ]}
                     src={kamazImg} 
                     alt="КАМАЗ"
                     />
                <div className={Styles["card__text"]}>
                                <p>Ремонт двигателя<br/>
                                    КАМАЗ</p>
                </div>
            </button>
                </div> 
           </div>

            <Modal isOpen={openModalId === "modal8"} onClose={closeModal}>
               <div className={Styles["modal-card"]}>
                 <img className={Styles["modal-card-img"]}
                      src={ kamazModal }
                      alt="КАМАЗ-Модалка"
                      />
                </div>
         <div className={Styles["container"]}>
           <h2 className={Styles["modal-paragraph"]}>КАМАЗ</h2>
           <h1 className={Styles["modal-title"]}>Характеристики двигателей КАМАЗ 740.10.210 л.с. и 7403 260 л.с.  </h1>
        
                       <div className={Styles["table-container"]}>
                       <table className="responsive-table" border="1" width="80%">
       <thead>
           <tr>
               <td>Модель двигателя</td>
               <td>740.10.210 л.с.</td>
               <td>7403 260 л.с.</td>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Мощность кВт (лошадиные силы)</td>
               <td>154(210)</td>
               <td>191(260)</td>
           </tr>
           <tr>
               <td>Частота вращения коленвала мин.-1</td>
               <td>2600</td>
               <td>2600</td>
           </tr>
           <tr>
               <td>Максимальный крутящий момент НМ (кГм)</td>
               <td>667(68)</td>
               <td>765(80)</td>
           </tr>
           <tr>
               <td>Цилиндры</td>
               <td>8 с V-образным
               расположением</td>
               <td>8 с V-образным
               расположением</td>
           </tr>
           <tr>
               <td>Цилиндр в диаметре (поршневой ход) в мм.</td>
               <td>120/120</td>
               <td>120/120</td>
           </tr>
           <tr>
               <td>Рабочий объем в литрах</td>
               <td>10.85</td>
               <td>10.85</td>
           </tr>
           <tr>
               <td>Степень сжатия</td>
               <td>17</td>
               <td>16,5</td>
           </tr>
           <tr>
               <td>Порядок работы цилиндров</td>
               <td>1-5-4-2-6- 3-7-8</td>
               <td>1-5-4-2-6- 3-7-8</td>

           </tr>
           <tr>
               <td>Направление вращения согласно ГОСТу
               22836-77</td>
               <td>Правое</td>
               <td>Правое</td>
           </tr>
           <tr>
               <td>Масса двигателя в комплектности (брутто)
               согласно ГОСТу</td>
               <td>750</td>
               <td>780</td>
               </tr>

               <tr>
                <td>Заправочная емкость системы смазки
                двигателя, в литрах</td>
                <td>26</td>
                <td>28</td>
               </tr>
                
                <tr>
                    <td>Емкость системы охлаждения конкретно
                    двигателя, в литрах</td>
                    <td>18</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td>Модель ТНВД</td>
                    <td>33 ЯЗДА</td>
                    <td>334 ЯЗДА</td>
                </tr>

                <tr>
                    <td>Форсунка</td>
                    <td>271</td>
                    <td>271</td>
                </tr>

                <tr>
                    <td>Давление начала впрыскивания, МПа</td>
                    <td>21,3-22,3</td>
                    <td>22,95-23,73 (234-242)</td>
                </tr>

               </tbody>
               </table>  
               </div> 
                <button className={Styles["close-modal-button"]}  onClick={closeModal}>Закрыть</button>
           </div>
            </Modal>
            
</section>
    )
};

export  { Price };