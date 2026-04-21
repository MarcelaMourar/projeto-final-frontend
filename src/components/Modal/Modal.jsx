import { useEffect } from "react";
import "../blocks/modal.css";
import closeIcon from "../../images/CloseIcon.png";

function Forms ({ isOpen, onClose, title, children}) {
    useEffect(() => {
        const handleEscClose = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscClose);
        }
        return () => document.removeEventListener("keydown", handleEscClose);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

   return (
    <div className="modal" onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={closeIcon} alt="Fechar" className="modal__close-icon" />
          
        </button>
        <h2 className="modal__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Forms;