import { Routes, Route } from "react-router-dom"
import { GlobalLoader } from "./components/GlobalLoader";
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/home"
import About from "./pages/About"
import Login from "./pages/Login"
import Editor from "./pages/Editor"

export default function App() {
  return (  
    <>
    <GlobalLoader />  
    <Routes>      
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="editor" element={<Editor />} />
      </Route>
    </Routes>
    </>
  )
}