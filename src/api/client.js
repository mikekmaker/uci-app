import axios from "axios";
import { useLoadingStore } from "../store/loadingStore";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// REQUEST interceptor ? empieza loading
apiClient.interceptors.request.use((config) => {
  useLoadingStore.getState().start();

  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// RESPONSE interceptor ? termina loading
apiClient.interceptors.response.use(
  (response) => {
    useLoadingStore.getState().stop();
    return response;
  },
  (error) => {
    useLoadingStore.getState().stop();

    console.error("API error:", error?.response?.status);

    return Promise.reject(error);
  }
);