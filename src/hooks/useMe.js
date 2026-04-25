import { useQuery } from "@tanstack/react-query";
import { meRequest } from "../api/auth";
import { useAuthStore } from "../store/authStore";

export const useMe = () => {
  const setUser = useAuthStore((s) => s.setUser);
  const token = useAuthStore((s) => s.token);

  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await meRequest();
      setUser(res.data);
      return res.data;
    },
    enabled: !!token,
    retry: false,
  });
};