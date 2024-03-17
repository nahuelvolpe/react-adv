import { useForm } from "../hooks/useForm";
import { FormEvent } from "react";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    onChange,
    resetForm,
    isValidEmail,
    formData,
    name,
    email,
    password,
    repeatPassword,
  } = useForm({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form
        noValidate
        autoComplete="off"
        onSubmit={(ev) => {
          onSubmit(ev);
        }}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(ev) => {
            onChange(ev);
          }}
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>La contreña tiene que tener 6 caracteres</span>
        )}

        <input
          type="password"
          placeholder="Repeat Password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={onChange}
        />
        {repeatPassword.trim().length <= 0 && (
          <span>Este campo es necesario</span>
        )}
        {repeatPassword.trim().length > 0 && password !== repeatPassword && (
          <span>Las contraseñas deben ser iguales</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
