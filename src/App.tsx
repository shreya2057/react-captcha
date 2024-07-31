import { Button, Heading, VStack } from "@chakra-ui/react";
import { RefObject, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormControl } from "./component/form/FormControl";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReCaptcha } from "./component/Recaptcha";

const validationSchema = z.object({
  email: z.string().email({ message: "Email is invalid" }),
  password: z.string().min(1, { message: "Password is required" }),
  captcha_type: z.string().min(1, { message: "Captcha type is required" }),
});

function App() {
  const form = useForm<z.infer<typeof validationSchema>>({
    defaultValues: { email: "", password: "", captcha_type: "" },
    resolver: zodResolver(validationSchema),
  });
  const captchaRef = useRef() as RefObject<ReCAPTCHA>;
  const onSubmit = (data: z.infer<typeof validationSchema>) => {
    if (captchaRef) {
      console.log({ data }, captchaRef?.current?.getValue());
    }
  };
  return (
    <VStack flex={1} height={"100%"} py={10}>
      <VStack
        width={"50%"}
        as={"form"}
        gap={6}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Heading>React Captcha</Heading>
        <FormControl
          inputControl="input"
          control={form.control}
          name="email"
          label="Email"
        />
        <FormControl
          inputControl="input"
          control={form.control}
          name="password"
          label="Password"
        />
        <FormControl
          inputControl="radio"
          control={form.control}
          name="captcha_type"
          values={["recaptcha", "hcaptcha"]}
          label="Captcha Type"
        />
        {form.watch("captcha_type") === "recaptcha" && (
          <ReCaptcha captchaRef={captchaRef} />
        )}
        <Button type="submit">Submit</Button>
      </VStack>
    </VStack>
  );
}

export default App;
