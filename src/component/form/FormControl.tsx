import { FieldValues } from "react-hook-form";
import { Input, InputProps } from "./Input";

export const FormControl = <TFieldValues extends FieldValues>({
  inputControl,
  ...rest
}: FormControlProps<TFieldValues>) => {
  switch (inputControl) {
    case "input":
      return <Input {...(rest as InputProps<TFieldValues>)} />;
  }
};

type FormControlProps<TFieldValues extends FieldValues> = {
  inputControl: "input";
} & InputProps<TFieldValues>;
