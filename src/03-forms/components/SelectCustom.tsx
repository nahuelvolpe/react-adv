import { ErrorMessage, useField } from "formik";

interface ISelectCustomProps {
  label: string;
  name: string;
  placeholder?: string;
  [key: string]: any;
}

export const SelectCustom = ({ label, ...props }: ISelectCustomProps) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
