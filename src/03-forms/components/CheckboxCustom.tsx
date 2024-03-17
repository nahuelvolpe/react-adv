import { ErrorMessage, useField } from "formik";

interface ICheckboxCustomProps {
  label: string;
  name: string;
  [key: string]: any;
}

export const CheckboxCustom = ({ label, ...props }: ICheckboxCustomProps) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
