import "./ModalWithForm.css";
import { useModalHandlers } from "../../hooks/useModalHandlers";

function ModalWithForm({
  title,
  name,
  buttonText,
  onSubmit,
  children,
  redirectText,
  activeModal,
  handleCloseClick,
  onRedirect,
  isValid,
}) {
  const { handleOverlayMouseDown } = useModalHandlers(
    activeModal,
    name,
    handleCloseClick,
  );

  return (
    <div
      onMouseDown={handleOverlayMouseDown}
      className={`modal ${activeModal === name ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        <button
          className="modal__close"
          type="button"
          onClick={handleCloseClick}
        ></button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__buttons">
            <button className="modal__submit" type="submit" disabled={!isValid}>
              {buttonText}
            </button>
            {onRedirect && (
              <p className="modal__redirect">
                or{" "}
                <button
                  className="modal__redirect-btn"
                  type="button"
                  onClick={onRedirect}
                >
                  {redirectText}
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
