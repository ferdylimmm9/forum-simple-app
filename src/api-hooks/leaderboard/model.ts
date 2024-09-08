export type LeaderboardResultType = {
  leaderboards: {
    user: {
      id: string;
      name: string;
      email: string;
      avatar: string;
    };
    score: number;
  }[];
};
