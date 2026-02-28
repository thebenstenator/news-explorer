import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ activeModal, handleLogin, handleCloseClick }) {
  const defaultValues = { email: "", password: "" };

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin();
  }
  return (
    <ModalWithForm
      name="login"
      buttonText={"Sign in"}
      title="Sign in"
      handleCloseClick={handleCloseClick}
      activeModal={activeModal}
      onSubmit={handleSubmit}
      redirectText="Sign up"
      onRedirect={() => handleModalSwitch("register")}
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          id="login-email"
          placeholder="Enter email"
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          id="login-password"
          placeholder="Enter password"
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
