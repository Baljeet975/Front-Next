import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPhoneNumber, RecaptchaVerifier } from "@firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  return (
    <userAuthContext.Provider
      value={{
        setUpRecaptcha,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function setUpRecaptcha(number) {
  const recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {},
    auth
  );
  recaptchaVerifier.render();
  return signInWithPhoneNumber(auth, number, recaptchaVerifier);
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
