import { apiClient } from "./client";

export const loginRequest = (data) =>
  apiClient.post("/Login", data);

export const meRequest = () =>
  apiClient.get("/me");

export const registerRequest = (data) =>
  apiClient.post("/Register", data);


