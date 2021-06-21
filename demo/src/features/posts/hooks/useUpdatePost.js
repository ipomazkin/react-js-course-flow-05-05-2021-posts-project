import { useMutation, useQueryClient } from "react-query";
import { update } from "../api/PostsAPI";

export function useUpdatePost(cb = () => {}) {
  const queryClient = useQueryClient();
  return useMutation(({ id, values: { title, body }}) => {
    return update(id, {
      title,
      body,
    });
  }, {
    onSuccess: (data, variables) => {
      cb();
      queryClient.invalidateQueries('posts');
      queryClient.invalidateQueries(['posts', variables.id]);
    },
  })
}
