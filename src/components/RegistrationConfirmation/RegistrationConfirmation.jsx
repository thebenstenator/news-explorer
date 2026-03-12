import "./RegistrationConfirmation.css";
import "../ModalWithForm/ModalWithForm.css";

function RegistrationConfirmation({
  activeModal,
  closeModal,
  handleModalSwitch,
}) {
  return (
    <div
      className={`modal ${activeModal === "confirmation" ? "modal_opened" : ""}`}
    >
      <div className="modal__content modal__content_type_confirmation">
        <button
          className="modal__close"
          type="button"
          onClick={closeModal}
        ></button>
        <h3 className="modal__title modal__title_type_confirmation">
          Registration successfully completed!
        </h3>
        <button
          className="modal__sign-in-link"
          type="button"
          onClick={() => handleModalSwitch("login")}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default RegistrationConfirmation;
