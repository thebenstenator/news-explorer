import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  activeModal,
  handleCloseClick,
  handleModalSwitch,
  handleRegister,
}) {
  const defaultValues = { email: "", password: "", username: "" };

  function handleSubmit(evt) {
    evt.preventDefault();
    handleRegister();
  }
  return (
    <ModalWithForm
      name="register"
      buttonText={"Sign up"}
      title="Sign up"
      handleCloseClick={handleCloseClick}
      activeModal={activeModal}
      onSubmit={handleSubmit}
      redirectText="Sign in"
      onRedirect={() => handleModalSwitch("login")}
    >
      <label htmlFor="register-email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          id="register-email"
          placeholder="Enter email"
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          id="register-password"
          placeholder="Enter password"
        />
      </label>
      <label htmlFor="register-username" className="modal__label">
        Password
        <input
          type="text"
          name="username"
          className="modal__input"
          id="register-username"
          placeholder="Enter your username"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
