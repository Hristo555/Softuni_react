import { Routes, Route } from "react-router"
import { useState } from "react"

import { UserContext } from "./context/UserContext"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Login from "./components/login/Login"
import Logout from "./components/logout/Logout"
import Register from "./components/register/Register"
import Show_all from "./components/blogs/show/Show_All"
import Create from "./components/blogs/create/Create"
import BlogDetails from "./components/blogs/details/BlogDetails"
import BlogEdit from "./components/blogs/details/BlogEdit"

export default function App() {
    const [authData, setAuthData] = useState('');

    const userLoginHandler = (data) => {
      setAuthData(data);
    }
  return (
    <UserContext.Provider value={{...authData, userLoginHandler}}>
      <div className="box">
          <Header />

      <main className="main">
          <Routes>
              <Route index element={<Home />}/>
              <Route path="/blogs" element={<Show_all />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/createblog" element={<Create />} />
              <Route path="/blogs/:blogid/details" element={<BlogDetails />} />
              <Route path="/blogs/:blogid/edit" element={<BlogEdit />} />
          </Routes>
      </main>

          <Footer /> 
      </div>
    </UserContext.Provider>
  )
}
