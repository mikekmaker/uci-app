import { apiClient } from "../api/client";

export const postService = {
  getPost: async () => {
    const { data } = await apiClient.get("/auth/me");
    return data;
  },
};