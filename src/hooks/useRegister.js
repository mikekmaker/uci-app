import { useMutation } from "@tanstack/react-query";
import { registerRequest } from "../api/auth";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerRequest,

    onSuccess: () => {
      alert("Usuario registrado correctamente");
      navigate("/login");
    },

    onError: (error) => {
      console.error(error);
      alert("Error al registrar usuario");
    },
  });
};