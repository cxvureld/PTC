
import React, { useEffect } from 'react';
import './Modal.css'; 

const Modal = ({ isOpen, onClose, children }) => {
    
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Отключаем прокрутку
    } else {
      document.body.style.overflow = 'unset'; // Включаем прокрутку обратно
    }

    return () => {
      document.body.style.overflow = 'unset'; // Убираем стиль при размонтировании
    };
  }, [isOpen]);


  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;