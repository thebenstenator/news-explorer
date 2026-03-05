import { NavLink, Link } from "react-router-dom";

import { useModalHandlers } from "../../hooks/useModalHandlers";
import "../ModalWithForm/ModalWithForm.css";
import "./MobileModal.css";

function MobileModal({ activeModal, handleSigninClick, handleCloseClick }) {
  const { handleOverlayMouseDown } = useModalHandlers(
    activeModal,
    "mobile",
    handleCloseClick,
    { esc: false },
  );

  return (
    <div
      onMouseDown={handleOverlayMouseDown}
      className={`modal ${activeModal === "mobile" ? "modal_opened" : ""}`}
    >
      <div className="modal__content modal__content_type_mobile">
        <button
          className="modal__close modal__close_type_mobile"
          onClick={handleCloseClick}
        ></button>
        <div className="modal__header">
          <Link className="modal__logo" to="/">
            NewsExplorer
          </Link>
        </div>
        <NavLink className="modal__home-btn" to="/">
          Home
        </NavLink>
        <button className="modal__sign-in-btn" onClick={handleSigninClick}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default MobileModal;
