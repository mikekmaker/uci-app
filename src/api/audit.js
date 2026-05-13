import { apiClient } from "./client";

export const auditRequest = (data) =>
  apiClient.post("/audit/analyze", data);

export const historialRequest = async () => {
  const response = await apiClient.get("/audit/registro");

  return response.data;
};