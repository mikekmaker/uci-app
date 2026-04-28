import { Routes, Route } from "react-router-dom"
import { GlobalLoader } from "./components/GlobalLoader";
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Editor from "./pages/Editor"
import Register from "./pages/Register"
import Profile from "./pages/Profile"

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
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile/> } />
      </Route>
    </Routes>
    </>
  )
}