import { Link } from "react-router";
import styles from "./Header.module.css"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Header(){
    const {email} = useContext(UserContext);
    return(
        <header>
            <nav className={styles.main_nav}>
                <Link className={styles.links} to="/">Home</Link>
                <Link className={styles.links} to="/blogs">Blogs</Link>
                {email ? (
                    <div className="logged-wrapper">
                        <Link className={styles.links} to="/logout">Logout</Link>
                        {email}
                    </div>
                )
                : (
                    <div className="not-logged">
                        <Link className={styles.links} to="/login">Login</Link>
                        <Link className={styles.links} to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}