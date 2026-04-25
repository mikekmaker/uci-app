import { apiClient } from "../api/client";

export const userService = {
  getAll: async () => {
    const { data } = await apiClient.get("/users");
    return data;
  },

  getById: async (id) => {
    const { data } = await apiClient.get(`/users/${id}`);
    return data;
  },
};