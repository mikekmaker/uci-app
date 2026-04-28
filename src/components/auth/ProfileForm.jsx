//nuevo useLogin
// import { useEffect, useState } from "react"
//import { apiGet } from "../api/client"
//import { useApp } from "../context/AppContext" <-- reemplazo esto por zustand
import { useAuthStore } from "../../store/authStore"
//import Button from "../components/Button"
import { Button } from "../../components/ui/Button"
import { Card } from "../../components/ui/Card"
//import { useQuery } from "@tanstack/react-query"
import { usePost } from "../../hooks/usePost"

export default function ProfileForm() {
  // const [data, setData] = useState(null)
  // const [error, setError] = useState(null)

  // const { data, isLoading, isError } = useQuery({
  // queryKey: ["post"],
  // queryFn: () =>
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then(res => res.json()),
  //})  
  const { data, isLoading, isError } = usePost()																  
  
  //const { user, setUser } = useApp() <--esto funciona con AppContext
  const user = useAuthStore((s) => s.user)
  const logout = useAuthStore((s) => s.logout)
  //parche
  console.log(user);
  console.log(logout);
  //fin parche
  // useEffect(() => {
  //   apiGet("https://jsonplaceholder.typicode.com/posts/1")
  //     .then(setData)
  //     .catch(setError)
  // }, [])					  

  if (isError) return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-white">¡Bienvenido!</h1>
        <p className="text-slate-300">Inicie sesión para empezar</p>
      </div>
    </div>
  )

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-white text-xl font-semibold">Cargando...</h1>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            ¡Bienvenido!
          </h1>
          <p className="mt-3 text-slate-300 text-lg">
            Administre su perfil y acceda a las herramientas principales de la plataforma.
          </p>
        </div>

        {/* CARD USUARIO */}
        <Card>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
            <h2 className="text-xl font-semibold">
              Perfil de Usuario
            </h2>

            <p className="text-slate-300">
              <span className="font-medium text-white">
                Usuario logueado:
              </span>

              {user ? (
                <span> {user.nombre} {user.apellido}</span>
              ) : (
                <span> Sin usuario autenticado</span>
              )}
            </p>
          </div>
        </Card>

        {/* CARD ESTADO GLOBAL */}
        <Card>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-lg">
            <h2 className="text-xl font-semibold">
              Acciones Rápidas
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button>
                Descargar Guía
              </Button>

              <Button variant="secondary">
                Solicitar Demo
              </Button>
            </div>
          </div>
        </Card>

        {/* API DATA */}
        {/* <pre className="text-sm bg-gray-100 p-2 rounded">
          {JSON.stringify(data, null, 2)}
        </pre> */}
      </div>
    </div>
  )
}