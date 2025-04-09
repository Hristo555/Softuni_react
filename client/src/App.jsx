import { Routes, Route } from "react-router"
import '../public/App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import useLocalStorage from "./hooks/useLocalStorage"
import MyAccount from "./components/account/MyAccount"
import Protected from "./components/pathguard/Protected"
import Guest from "./components/pathguard/Guest"

export default function App() {
    const [authData, setAuthData] = useLocalStorage('auth', {});

    const userLoginHandler = (data) => {
      setAuthData(data);
    };

    const userLogOut = () => {
      setAuthData({});
    }
    console.info(authData)
  return (
    <UserContext.Provider value={{...authData, userLoginHandler, userLogOut}}>
      <div className="box">
          <Header />

      <main className="main">
            <Routes>
                <Route element={<Protected/>}>
                    <Route path="/account" element={<MyAccount />} />
                    <Route path="/blogs/:blogid/edit" element={<BlogEdit />} />
                    <Route path="/createblog" element={<Create />} />
                </Route>
                <Route element={<Guest/>}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                    <Route index element={<Home />}/>
                    <Route path="/blogs" element={<Show_all />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/blogs/:blogid/details" element={<BlogDetails />} />
        </Routes>
      </main>

          <Footer /> 
      </div>
    </UserContext.Provider>
  )
}
