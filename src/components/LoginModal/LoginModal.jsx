import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function LoginModal({
  activeModal,
  handleLogin,
  handleCloseClick,
  handleModalSwitch,
}) {
  const defaultValues = { email: "", password: "" };

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
    handleLogin(values, handleReset);
    console.log("login values:", values);
    handleCloseClick();
    handleReset();
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
      isValid={isValid}
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          id="login-email"
          placeholder="Enter email"
          value={values.email || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <span
          className={`modal__error
            ${errors.email ? " modal__error_visible" : ""}`}
        >
          {errors.email}
        </span>
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          id="login-password"
          placeholder="Enter password"
          value={values.password || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <span
          className={`modal__error ${errors.password ? "modal__error_visible" : ""}`}
        >
          {errors.password}
        </span>
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
