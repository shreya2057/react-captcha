import { Button, Heading, VStack } from "@chakra-ui/react";
// import "./App.css";
import { FormControl } from "./component/form/FormControl";
import { useForm } from "react-hook-form";
import * as z from "zod";

const validationSchema = z.object({
  email: z.string().email({ message: "Email is invalid" }),
  password: z.string().min(1, { message: "Password is required" }),
});

function App() {
  const form = useForm<z.infer<typeof validationSchema>>();
  return (
    <VStack flex={1} height={"100%"} py={10}>
      <VStack width={"50%"} as={"form"} gap={6}>
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
        <Button>Submit</Button>
      </VStack>
    </VStack>
  );
}

export default App;
