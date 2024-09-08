import { useMutation } from "@tanstack/react-query";
import { CommentInputType, ThreadInputType, VoteTypeEnum } from "./model";
import { httpClient } from "../../helper";

const ENDPOINT = "/threads";
export function useCreateThread() {
  return useMutation({
    mutationFn: (input: ThreadInputType) => {
      return httpClient.post(ENDPOINT, input);
    },
  });
}

export function useCreateComment(threadId: string) {
  return useMutation({
    mutationFn: (input: CommentInputType) => {
      return httpClient.post(ENDPOINT + "/" + threadId + "/comments", input);
    },
  });
}

export function useVoteThread(threadId: string) {
  return useMutation({
    mutationFn: (action: VoteTypeEnum) => {
      return httpClient.post(ENDPOINT + "/" + threadId + "/" + action);
    },
  });
}

export function useVoteComment(threadId: string, commentId: string) {
  return useMutation({
    mutationFn: (action: VoteTypeEnum) => {
      return httpClient.post(
        ENDPOINT + "/" + threadId + "/comments/" + commentId + "/" + action
      );
    },
  });
}
