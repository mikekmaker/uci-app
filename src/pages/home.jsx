//nuevo useLogin
// import { useEffect, useState } from "react"
//import { apiGet } from "../api/client"
//import { useApp } from "../context/AppContext" <-- reemplazo esto por zustand
import { useAuthStore } from "../store/authStore"
//import Button from "../components/Button"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
//import { useQuery } from "@tanstack/react-query"
import { usePost } from "../hooks/usePost"

export default function Home() {
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
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">¡Bienvenido!</h1>
      <p> Inicie Sesión para empezar</p>
    </div>
  )
  if (isLoading) return <h1>Cargando...</h1>

										   
  
  return (
    <div className="space-y-4">
	  
      <h1 className="text-2xl font-bold">
        ¡Bienvenido!
      </h1>

      {/* CARD USUARIO */}
      <Card>
        <div className="p-4 border rounded space-y-3">
          <p className="font-medium">
            Usuario logueado:
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
				<div className="p-4 border rounded space-y-3">
          <div className="p-2 border rounded">            
            <div className="flex gap-2 mt-3">			 
              <Button>
                Descargar Guía
              </Button>
              <Button variant="secondary">
                Solicitar Demo
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* API DATA */}
      {/* <pre className="text-sm bg-gray-100 p-2 rounded">
        {JSON.stringify(data, null, 2)}
      </pre> */}
    </div>
  )
}