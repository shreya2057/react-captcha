import ReCAPTCHA from "react-google-recaptcha";
import { SITE_KEY } from "../constants";
import { RefObject } from "react";

export const ReCaptcha = ({
  captchaRef,
}: {
  captchaRef: RefObject<ReCAPTCHA>;
}) => {
  return <ReCAPTCHA ref={captchaRef} sitekey={SITE_KEY} />;
};
