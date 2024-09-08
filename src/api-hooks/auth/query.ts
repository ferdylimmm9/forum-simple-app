import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../../helper";

const authKey = {
  meKey: ["get-me"],
  getUsersKey: ["get-users"],
};

const ENDPOINT = "/users";

export function useGetMe() {
  return useQuery({
    queryKey: authKey.meKey,
    queryFn: () => {
      return httpClient.get(ENDPOINT + "/me");
    },
    staleTime: Infinity,
  });
}

export function useGetUsers() {
  return useQuery({
    queryKey: authKey.getUsersKey,
    queryFn: () => {
      return httpClient.get(ENDPOINT);
    },
  });
}
