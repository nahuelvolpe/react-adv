import * as Yup from "yup";
import { Form, Formik } from "formik";
import { InputCustom } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe tener 2 caracteres o más")
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Email no tiene un formato válido")
            .required("Requerido"),
          password: Yup.string()
            .min(6, "Debe tener 6 caracteres o más")
            .required("Requerido"),
          repeatPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <InputCustom
              label="Name"
              name="name"
              type="text"
              placeholder="Nahuel"
            />

            <InputCustom
              label="Email"
              name="email"
              type="email"
              placeholder="nahuel@gmail.com"
            />

            <InputCustom label="Password" name="password" type="password" />

            <InputCustom
              label="Repeat Password"
              name="repeatPassword"
              type="password"
            />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
