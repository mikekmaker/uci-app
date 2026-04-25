import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
 
export default function RegisterForm() {
  const { mutate, isPending, error } = useRegister();

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    username:"",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    
    mutate({
      nombre: form.nombre,
      apellido: form.apellido,
      username: form.username,
      password: form.password,
    });
    console.log(mutate);
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
            Regístrate para comenzar a auditar código con inteligencia
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
                Crear cuenta
              </h1>

              <p className="text-slate-500 mt-2">
                Completa tus datos para registrarte
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Nombre</Label>
                <Input
                  value={form.nombre}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      nombre: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <Label>Apellido</Label>
                <Input
                  value={form.apellido}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      apellido: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div>
                <Label>usuario</Label>
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
              <Label>Password</Label>
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

            <div>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({
                    ...form,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>

            {error && (
              <p className="text-sm text-red-500">
                {error.response?.data?.detail || "Error al registrar usuario"}
              </p>
            )}

            <Button type="submit" disabled={isPending}>
              {isPending ? "Registrando..." : "Registrarme"}
            </Button>

            <p className="text-sm text-center text-slate-500">
              ¿Ya tienes cuenta?{" "}
              <Link
                to="/login"
                className="font-semibold text-slate-900 hover:underline"
              >
                Iniciar sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}