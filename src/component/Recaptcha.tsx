import ReCAPTCHA from "react-google-recaptcha";
import { RECHAPTCHA_SITE_KEY } from "../constants";
import { RefObject } from "react";

export const ReCaptcha = ({
  captchaRef,
}: {
  captchaRef: RefObject<ReCAPTCHA>;
}) => {
  return <ReCAPTCHA ref={captchaRef} sitekey={RECHAPTCHA_SITE_KEY} />;
};
