import axios from "axios";
import Token from "./token";

export const BASE_URL = "https://forum-api.dicoding.dev/v1" as const;

export const httpClient = axios.create({
  baseURL: BASE_URL,
});

httpClient.interceptors.request.use((request) => {
  const token = Token.getToken();
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});
