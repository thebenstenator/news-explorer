import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function RegisterModal({
  activeModal,
  handleCloseClick,
  handleModalSwitch,
  handleRegister,
}) {
  const defaultValues = { email: "", password: "", username: "" };

  const {
    values,
    handleChange,
    handleReset,
    validateForm,
    errors,
    isValid,
    handleBlur,
  } = useFormWithValidation(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    const valid = validateForm();
    if (!valid) return;
    handleRegister(values, handleReset);
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
      isValid={isValid}
    >
      <label htmlFor="register-email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          id="register-email"
          placeholder="Enter email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          required
        />
        <span
          className={`modal__error ${errors.email ? "modal__error_visible" : ""}`}
        >
          {errors.email}
        </span>
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          id="register-password"
          placeholder="Enter password"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
          required
        />
        <span
          className={`modal__error ${errors.password ? "modal__error_visible" : ""}`}
        >
          {errors.password}
        </span>
      </label>
      <label htmlFor="register-username" className="modal__label">
        Username
        <input
          type="text"
          name="username"
          className="modal__input"
          id="register-username"
          placeholder="Enter your username"
          onChange={handleChange}
          value={values.username}
          onBlur={handleBlur}
          required
        />
        <span
          className={`modal__error ${errors.username ? "modal__error_visible" : ""}`}
        >
          {errors.username}
        </span>
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
