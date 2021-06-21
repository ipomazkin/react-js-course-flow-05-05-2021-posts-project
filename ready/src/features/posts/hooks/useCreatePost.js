import { useMutation, useQueryClient } from "react-query";
import { create } from "../api/PostsAPI";

export function useCreatePost(cb = () => {}) {
  const queryClient = useQueryClient();
  return useMutation(({ title, body }) => {
    return create({
      title,
      body,
    });
  }, {
    onSuccess: () => {
      cb();
      queryClient.invalidateQueries('posts');
    },
  })
}
