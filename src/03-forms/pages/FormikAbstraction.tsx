import { Form, Formik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { InputCustom, SelectCustom, CheckboxCustom } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Email no tiene un formato válido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["mobile-developer"], "Esta opción no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <InputCustom
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Nahuel"
            />

            <InputCustom
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Volpe"
            />

            <InputCustom
              label="Email"
              name="email"
              type="email"
              placeholder="nahuel@gmail.com"
            />

            <SelectCustom label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer-ui">Designer UI</option>
              <option value="designer-ux">Designer UX</option>
              <option value="mobile-developer">Mobile Developer</option>
            </SelectCustom>

            <CheckboxCustom label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
