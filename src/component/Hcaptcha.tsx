import HCaptcha from "@hcaptcha/react-hcaptcha";
import { RefObject } from "react";
import { HCAPTCHA_SITE_KEY } from "../constants";

export const Hcaptcha = ({
  captchaRef,
  setToken,
}: {
  captchaRef: RefObject<HCaptcha>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const onLoad = () => {
    if (captchaRef.current) {
      captchaRef.current.execute();
    }
  };
  return (
    <HCaptcha
      sitekey={HCAPTCHA_SITE_KEY}
      onLoad={onLoad}
      onVerify={(token) => setToken(token)}
      ref={captchaRef}
    />
  );
};
