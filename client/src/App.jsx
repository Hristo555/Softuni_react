import { Routes, Route } from "react-router"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Show_all from "./components/blogs/show/Show_All"
import Create from "./components/blogs/create/Create"
import BlogDetails from "./components/blogs/details/BlogDetails"
import BlogEdit from "./components/blogs/details/BlogEdit"
import { useState } from "react"

export default function App() {
    const [authData, setAuthData] = useState('');

    const userLoginHandler = (data) => {
      setAuthData(data);
    }
  return (
    <div className="box">
        <Header />

    <main className="main">
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/blogs" element={<Show_all />} />
            <Route path="/login" element={<Login onLogin={userLoginHandler} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/createblog" element={<Create />} />
            <Route path="/blogs/:blogid/details" element={<BlogDetails />} />
            <Route path="/blogs/:blogid/edit" element={<BlogEdit email={authData.email}/>} />
        </Routes>
    </main>

        <Footer /> 
    </div>
  )
}
