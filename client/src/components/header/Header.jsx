import { Link, useLocation } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Header(){
    const {email} = useContext(UserContext);
    const {pathname} = useLocation();
    const style = 'p-2 m-2 text-black border-green-200 border-b-2 font-bold hover:bg-green-200',
          selected_style = 'p-2 m-2 text-black bg-green-200 border-green-200 border-b-2 font-bold hover:bg-green-200';
    return(
        <header className="bg-white p-3 border-b-2">
            <nav className="flex justify-evenly p-3">
            <Link className="font-bold float-left" to="/">Blog It</Link>
                <div className="link-wrapper">
                    <Link className={pathname === '/' ? selected_style : style} to="/">Home</Link>
                    <Link className={pathname.includes('blogs') ? selected_style : style} to="/blogs">Blogs</Link>
                    <Link className={pathname === '/account' ? selected_style : style} to="/account">Account</Link>
                    <Link className={pathname === '/logout' ? selected_style : style} to="/logout">Logout</Link>
                    {!email ? <Link className={pathname === '/login' ? selected_style : style} to="/login">Login</Link> : ''}
                    {!email ? <Link className={pathname === '/register' ? selected_style : style} to="/register">Register</Link> : ''}
                </div>
            </nav>
        </header>
    );
}