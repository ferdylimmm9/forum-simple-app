import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../../helper";

const leaderboardKey = {
  leaderboards: ["get-leaderboards"],
};
const ENDPOINT = "/leaderboards";

export function useGetLeaderboards() {
  return useQuery({
    queryKey: leaderboardKey.leaderboards,
    queryFn: () => {
      return httpClient.get(ENDPOINT);
    },
  });
}
