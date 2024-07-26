import {
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FormWrapper } from "./FormWrapper";
import { Control, FieldValues, Path, useController } from "react-hook-form";

export const Input = <TFieldValues extends FieldValues>({
  label,
  name,
  control,
  ...rest
}: InputProps<TFieldValues>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const { value, onChange } = field;
  return (
    <FormWrapper label={label} error={error}>
      <InputGroup>
        <ChakraInput onChange={onChange} value={value} {...rest} />
      </InputGroup>
    </FormWrapper>
  );
};

export type InputProps<TFieldValues extends FieldValues> = {
  label: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
} & ChakraInputProps;
