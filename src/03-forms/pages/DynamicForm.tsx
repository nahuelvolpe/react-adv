import { Form, Formik } from "formik";
import * as Yup from "yup";
import formJson from "../data/custom-form.json";
import { InputCustom, SelectCustom } from "../components";

const initialValues: { [key: string]: any } = {};
const requieredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Se debe ingresar un minimo de ${(rule as any).value || 2} caracteres`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("Reviste el formato del email");
    }

    //... otras reglas
  }

  requieredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requieredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "password" || type === "input" || type === "email") {
                return (
                  <InputCustom
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <SelectCustom key={name} name={label} label={label}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </SelectCustom>
                );
              }

              throw new Error(`El tipo ${type} no es soportado`);
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
