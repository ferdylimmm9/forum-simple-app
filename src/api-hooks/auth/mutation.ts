import { useMutation } from "@tanstack/react-query";

import { LoginInputType, RegisterInputType } from "./model";
import { httpClient } from "../../helper";


export function useLogin() {
  return useMutation({
    mutationFn: (input: LoginInputType) => {
      return httpClient.post("/login", input);
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: (input: RegisterInputType) => {
      return httpClient.post("/register", input);
    },
  });
}
