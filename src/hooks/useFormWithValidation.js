import { useState, useCallback } from "react";

export function useFormWithValidation(defaultValues = {}) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    let message = "";
    if (name === "email") {
      if (!value || String(value).trim() === "") {
        message = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = "Enter a valid email address";
      }
    } else if (name === "password") {
      if (!value || String(value).trim() === "") {
        message = "Password is required";
      } else if (value.length < 5) {
        message = "Password must be at least 5 characters";
      }
    } else if (name === "username") {
      if (!value || String(value).trim() === "") {
        message = "Username is required";
      } else if (value.length < 4) {
        message = "Username must be at least 4 characters";
      }
    }
    return message;
  };

  const validateAll = (vals) => {
    const nextErrors = {};
    const keys = Object.keys({ ...defaultValues, ...vals });
    for (const key of keys) {
      nextErrors[key] = validateField(key, vals[key]);
    }
    const nextIsValid = Object.values(nextErrors).every((m) => !m);
    setErrors(nextErrors);
    setIsValid(nextIsValid);
    return nextIsValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => {
      const next = { ...prev, [name]: value };
      return next;
    });

    if (isSubmitted) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
      setIsValid(
        Object.values({ ...errors, [name]: validateField(name, value) }).every(
          (m) => !m,
        ),
      );
    }
  };

  const validateForm = (vals = values) => {
    setIsSubmitted(true);
    return validateAll(vals);
  };

  const handleReset = useCallback(
    (newValues = defaultValues, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setIsSubmitted(false);
    },
    [defaultValues],
  );

  return {
    values,
    handleChange,
    handleReset,
    setValues,
    errors,
    isValid,
    validateForm,
    isSubmitted,
  };
}
