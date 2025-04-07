import { Link } from "react-router";
import styles from "./Header.module.css"

export default function Header(){
    return(
        <header>
            <nav className={styles.main_nav}>
                <Link className={styles.links} to="/">Home</Link>

                <Link className={styles.links} to="/blogs">Blogs</Link>

                <Link className={styles.links} to="/login">Login</Link>
                <Link className={styles.links} to="/register">Register</Link>
                <Link className={styles.links} to="/logout">Logout</Link>
            </nav>
        </header>
    );
}