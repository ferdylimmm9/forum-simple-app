export type GetMeResultType = {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
};

export type GetUsersResultType = {
  users: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  }[];
};

export type LoginResultType = {
  token: string;
};

export type RegisterResultType = {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
};

export type LoginInputType = {
  email: string;
  password: string;
};

export type RegisterInputType = {
  name: string;
  email: string;
  password: string;
};
