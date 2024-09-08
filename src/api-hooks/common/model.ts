export type ApiErrorType = {
  status: string;
  message: string;
};

export type ApiResultType<T> = ApiErrorType & {
  data: T;
};
