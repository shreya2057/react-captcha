import { FieldValues } from "react-hook-form";
import { Input, InputProps } from "./Input";
import { RadioInput, RadioInputProps } from "./RadioInput";

export const FormControl = <TFieldValues extends FieldValues>({
  inputControl,
  ...rest
}: FormControlProps<TFieldValues>) => {
  switch (inputControl) {
    case "input":
      return <Input {...(rest as InputProps<TFieldValues>)} />;
    case "radio":
      return <RadioInput {...(rest as RadioInputProps<TFieldValues>)} />;
  }
};

type FormControlProps<TFieldValues extends FieldValues> = {
  inputControl: "input" | "radio";
} & (InputProps<TFieldValues> | RadioInputProps<TFieldValues>);
