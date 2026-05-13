import { apiClient } from "./client";

export const loginRequest = (data) =>
  apiClient.post("/auth/login", data);

export const meRequest = () =>
  apiClient.get("/auth/me");

export const registerRequest = (data) =>
  apiClient.post("/auth/register", data);


