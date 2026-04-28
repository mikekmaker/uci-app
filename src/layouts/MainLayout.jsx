import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import logo from "../assets/logo.jpg";

export default function MainLayout() {
const navigate = useNavigate();
const token = useAuthStore((s) => s.token);
const logout = useAuthStore((s) => s.logout);
console.log(token);
console.log(logout);

const handleLogout = () => {
  logout();
  navigate("/");
};
  return (
    <>
    <header className="flex justify-between items-center px-6 py-4
bg-gradient-to-r from-[#0B1120] to-[#111827]
border-b border-blue-500 shadow-lg">
      {/* <header className="flex justify-between items-center px-6 py-4 bg-[#0B1120] border-b border-[#2563EB] shadow-md"> */}
      {/* <header className="flex justify-between items-center p-4 border-b"> */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AI CRP Logo"
            className="w-10 h-10 object-contain"
          />          
        </Link>       
        <nav className="flex gap-3 items-center">         
          {token ? (
            <>
             <Link
                to="/profile"
                className="text-lg font-semibold text-gray-500"
              >
                Perfil
              </Link>
              <Link
                to="/editor"
                className="px-4 py-2 rounded-md bg-blue-600 text-white"
              >
                Editor
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-500 text-white"
              >Logout                
              </button>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text-lg font-semibold text-gray-500"
              >
                Inicio
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 rounded-md bg-blue-600 text-white"
              >
                Login
              </Link>
              <Link
              to="/register"
              className="px-4 py-2 rounded-md bg-lime-600 text-white"
              >
              Registro
              </Link>
            </>
          )}
          <Link to="/about"  className="px-4 py-2 rounded-md bg-gray-200">Acerca</Link>          
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}