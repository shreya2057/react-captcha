import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

export const FormWrapper = ({
  children,
  label,
  error,
}: {
  children: React.ReactNode;
  label?: string;
  error?: FieldError;
}) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel>{label}</FormLabel>}
      {children}
      {error && <FormErrorMessage>{error?.message}</FormErrorMessage>}
    </FormControl>
  );
};
