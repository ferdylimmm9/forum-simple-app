export enum VoteTypeEnum { 
  UP ='up-vote',
  DOWN = 'down-vote',
  NEUTRAL = 'neutral-vote'
}

export type CreateThreadResultType = {
  thread: {
    id: string;
    title: string;
    body: string;
    category: string;
    createdAt: string;
    ownerId: string;
    upVotesBy: string[];
    downVotesBy: string[];
    totalComments: number;
  };
};

export type GetThreadsResultType = {
  threads: {
    id: string;
    title: string;
    body: string;
    category: string;
    createdAt: string;
    ownerId: string;
    upVotesBy: string[];
    downVotesBy: string[];
    totalComments: Number;
  };
};

export type GetThreadResultType = {
  detailThread: {
    id: string;
    title: string;
    body: string;
    category: string;
    createdAt: string;
    owner: {
      id: string;
      name: string;
      avatar: string;
    };
    upVotesBy: string[];
    downVotesBy: string[];
    comments: {
      id: string;
      content: string;
      createdAt: string;
      owner: {
        id: string;
        name: string;
        avatar: string;
      };
      upVotesBy: string[];
      downVotesBy: string[];
    }[];
  };
};

export type CreateCommentResultType = {
  comment: {
    id: string;
    content: string;
    createdAt: string;
    upVotesBy: string[];
    downVotesBy: string[];
    owner: {
      id: string;
      name: string;
      email: string;
    };
  };
};

export type VoteThreadResultType = {
  vote: {
    id: string;
    userId: string;
    threadId: string;
    voteType: -1 | 0 | 1;
  };
};

export type VoteCommentResultType = {
  vote: {
    id: string;
    userId: string;
    commentId: string;
    voteType: -1 | 0 | 1;
  };
};


export type ThreadInputType = {
  title: string;
  body: string;
  category?: string;
};

export type CommentInputType = {
  content: string;
};
