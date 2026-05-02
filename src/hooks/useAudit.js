import { useMutation } from "@tanstack/react-query";
import { auditRequest } from "../api/audit";

export const useAudit = () => {
  return useMutation({
    mutationFn: auditRequest,

    onSuccess: (data) => {
      console.log("Audit success:", data);
    },

    onError: (error) => {
      console.error(error);
      alert("Error al analizar el código");
    },
  });
};