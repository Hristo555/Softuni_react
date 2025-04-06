import { Routes, Route } from "react-router"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Show_all from "./components/home/blogs/show/Show_All"
import Create from "./components/home/blogs/create/Create"
import BlogDetails from "./components/home/blogs/details/BlogDetails"

export default function App() {

  return (
    <div className="box">
        <Header />

    <main className="main">
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/blogs" element={<Show_all />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/createblog" element={<Create />} />
            <Route path="/blog/:blogid/details" element={<BlogDetails />} />
        </Routes>
    </main>

        <Footer /> 
    </div>
  )
}
