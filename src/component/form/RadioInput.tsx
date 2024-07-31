import { Radio, RadioGroup, RadioGroupProps, Stack } from "@chakra-ui/react";
import { FormWrapper } from "./FormWrapper";
import { Control, FieldValues, Path, useController } from "react-hook-form";

export const RadioInput = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  values,
  ...rest
}: RadioInputProps<TFieldValues>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const { onChange, value } = field;
  return (
    <FormWrapper label={label} error={error}>
      <RadioGroup onChange={onChange} defaultValue={value} {...rest}>
        <Stack spacing={4} direction="row">
          {values?.map((valueName, index) => (
            <Radio key={index} value={valueName}>
              {valueName}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormWrapper>
  );
};

export type RadioInputProps<TFieldValues extends FieldValues> = {
  label: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  values: string[];
} & RadioGroupProps;
