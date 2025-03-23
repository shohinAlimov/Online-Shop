import { FC, ReactNode } from "react";
import "./FormField.css";

interface IFormFieldProps {
  label: string;
  children: ReactNode;
}

export const FormField: FC<IFormFieldProps> = ({
  children,
  label,
}) => {
  return (
    <label className="form-field">
      <span className="form-field__label">{label}</span>
      {children}

    </label>
  );
};
