import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";

export default function LoginForm() {
  const { mutate, isPending, error } = useLogin();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    mutate(form);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">
  <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
    
    {/* Panel izquierdo */}
    <div className="hidden lg:flex flex-col justify-center bg-slate-900 text-white p-12">
      <h1 className="text-4xl font-bold mb-6 leading-tight">
        AI Code Review
        <br />
        Platform
      </h1>

      <p className="text-slate-300 text-lg leading-relaxed mb-8">
        Accede a tu plataforma de auditorí­a de código con inteligencia
        artificial, seguridad automatizada y reportes profesionales.
      </p>

      <div className="space-y-4">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          Seguridad automatizada
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          Refactor inteligente
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          Reportes profesionales
        </div>
      </div>
    </div>

    {/* Panel derecho */}
    <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto flex flex-col gap-5"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Iniciar sesiÃƒÂ³n
          </h1>

          <p className="text-slate-500 mt-2">
            Ingresa tus credenciales para continuar
          </p>
        </div>

        <div>
          <Label>Usuario</Label>
          <Input
            value={form.username}
            onChange={(e) =>
              setForm({
                ...form,
                username: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>ContraseÃ±a</Label>
          <Input
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />
        </div>

        {error && (
          <p className="text-sm text-red-500">
            {error.response?.data?.detail || "Usuario o contraseÃƒÂ±a incorrectos"}
          </p>
        )}

        <Button
          type="submit"
          disabled={isPending}
          className="w-full"
        >
          {isPending ? "Entrando..." : "Entrar"}
        </Button>

        <p className="text-sm text-center text-slate-500">
          ¿No tienes cuenta?{" "}
          <Link
            to="/register"
            className="font-semibold text-slate-900 hover:underline"
          >
            Crear cuenta
          </Link>
        </p>
      </form>
    </div>
  </div>
</div>
  );
}