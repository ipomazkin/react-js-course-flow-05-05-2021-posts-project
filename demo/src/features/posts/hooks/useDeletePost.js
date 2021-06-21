import { useMutation, useQueryClient } from "react-query";
import { remove } from "../api/PostsAPI";

export function useDeletePost(cb = () => {}) {
  const queryClient = useQueryClient();
  return useMutation(({id}) => {
    return remove(id);
  }, {
    onSuccess: () => {
      cb();
      queryClient.invalidateQueries('posts');
    },
  })
}
