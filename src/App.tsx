import { Heading, VStack } from "@chakra-ui/react";
import "./App.css";
import { FormControl } from "./component/form/FormControl";
import { useForm } from "react-hook-form";

function App() {
  const form = useForm();
  return (
    <>
      <VStack>
        <Heading>React Captcha</Heading>
        <FormControl
          inputControl="input"
          control={form.control}
          name="Test"
          label="test"
        />
      </VStack>
    </>
  );
}

export default App;
