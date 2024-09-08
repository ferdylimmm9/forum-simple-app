import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../../helper";

export const threadKeys = {
  getThreadsKey: ["get-threads"],
  getThreadKey: (id: string) => ["get-thread", id],
};

const ENDPOINT = "/threads";

export function useGetThreads() {
  return useQuery({
    queryKey: threadKeys.getThreadsKey,
    queryFn: () => {
      return httpClient.get(ENDPOINT);
    },
  });
}

export function useGetThread(id: string) {
  return useQuery({
    queryKey: threadKeys.getThreadKey(id),
    queryFn: () => {
      return httpClient.get(ENDPOINT + "/" + id);
    },
  });
}
