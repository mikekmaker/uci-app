import { useMutation } from "@tanstack/react-query";
import { loginRequest, meRequest } from "../api/auth";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const setToken = useAuthStore((s) => s.setToken);
  const setUser = useAuthStore((s) => s.setUser);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginRequest,

    onSuccess: async (res) => {
      const token = res.data.access_token;

      setToken(token);

      const meRes = await meRequest();
      setUser(meRes.data);

      navigate("/editor");
    },
  });
};