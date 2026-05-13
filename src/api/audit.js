import { apiClient } from "./client";

export const auditRequest = (data) =>
  apiClient.post("/audit/analyze", data);