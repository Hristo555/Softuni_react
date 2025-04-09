import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Header(){
    const {email} = useContext(UserContext);
    return(
        <header className="bg-amber-50 p-3 border-b-2">
            <nav className="flex justify-evenly p-3">
            <h1 className="font-bold float-left">Blog It</h1>
                <div className="link-wrapper">
                    <Link className="p-2 m-2 text-black bg-amber-300 font-bold rounded-md" to="/">Home</Link>
                    <Link className="p-2 m-2 text-black bg-amber-300 font-bold rounded-md" to="/blogs">Blogs</Link>
                    <Link className="p-2 m-2 text-black bg-amber-300 font-bold rounded-md" to="/account">Account</Link>
                    <Link className="p-2 m-2 text-black bg-amber-300 font-bold rounded-md" to="/logout">Logout</Link>
                    {!email ? <Link className="p-2 m-2 text-white bg-amber-300 font-bold rounded-md" to="/login">Login</Link> : ''}
                    {!email ? <Link className="p-2 m-2 text-white bg-amber-300 font-bold rounded-md" to="/register">Register</Link> : ''}
                </div>
            </nav>
        </header>
    );
}