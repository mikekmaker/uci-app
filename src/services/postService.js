import { apiClient } from "../api/client";

export const postService = {
  getPost: async () => {
    const { data } = await apiClient.get("/me");
    return data;
  },
};