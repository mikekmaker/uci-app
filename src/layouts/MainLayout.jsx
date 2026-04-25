import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

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
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-lg font-semibold">AI CRP</h1>
        {/* <nav className="flex gap-3">
          <Link to="/">Inicio</Link>
          <Link to="/about">Acerca</Link>

          <Link
            to="/login"
            className="px-4 py-2 rounded-md bg-blue-600 text-white"
          >
            Login
          </Link>
        </nav> */}
        <nav className="flex gap-3 items-center">
          <Link to="/">Inicio</Link>
          <Link to="/about">Acerca</Link>
          {token ? (
            <>
              <Link
                to="/editor"
                className="px-4 py-2 rounded-md bg-gray-200"
              >
                Editor
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-500 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}