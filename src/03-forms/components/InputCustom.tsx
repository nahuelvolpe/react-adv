import { ErrorMessage, useField } from "formik";

interface IInputCustomProps {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [key: string]: any;
}

export const InputCustom = ({ label, ...props }: IInputCustomProps) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
