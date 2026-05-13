import { useQuery } from "@tanstack/react-query";
import { historialRequest } from "../api/audit";

export const useHistorial = () => {
  return useQuery({
    queryKey: ["historial"],
    queryFn: historialRequest,
  });
};