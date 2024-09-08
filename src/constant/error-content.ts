export const ErrorContent = {
  400: {
    title: "Bad Request",
    description: "The server could not understand the request",
  },
  401: {
    title: "Access Denied",
    description: "You should login to access this page",
  },
  403: {
    title: "Access Denied",
    description: "You do not have permission to access this page",
  },
  404: {
    title: "Not Found",
    description: "This page has moved or removed",
  },
  500: {
    title: "Internal Server Error",
    description: "The server encountered an internal error",
  },
  next: {
    title: "Ops!",
    description: "Something went wrong. Please try again",
  },
} as const;
