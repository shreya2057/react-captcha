import { Button, Heading, VStack } from "@chakra-ui/react";
// import "./App.css";
import { RefObject, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormControl } from "./component/form/FormControl";
import { SITE_KEY } from "./constants";

const validationSchema = z.object({
  email: z.string().email({ message: "Email is invalid" }),
  password: z.string().min(1, { message: "Password is required" }),
});

function App() {
  const form = useForm<z.infer<typeof validationSchema>>();
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
        <ReCAPTCHA ref={captchaRef} sitekey={SITE_KEY} />
        <Button type="submit">Submit</Button>
      </VStack>
    </VStack>
  );
}

export default App;
