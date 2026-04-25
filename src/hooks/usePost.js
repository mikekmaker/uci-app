import { useQuery } from "@tanstack/react-query";
import { postService } from "../services/postService";


export const usePost = () => {
  return useQuery({
    queryKey: ["post"],
    queryFn: postService.getPost,
  });
};