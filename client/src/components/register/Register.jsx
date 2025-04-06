import { Link } from "react-router";
import styles from "./Register.module.css"
import Login from "../login/Login"

export default function Register() {
    return (
        <section id="register-page" className="content auth">
            <form id="register">
                <div className={styles.container}>
                    <h1>Register</h1>

                    <div className={styles.input_email}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="maria@email.com" />
                    </div>
                    <div className={styles.input_password}>
                        <label htmlFor="pass">Password:</label>
                        <input type="password" name="password" id="register-password" />
                    </div>
                    <div className={styles.input_confirm_password}>
                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input type="password" name="confirm-password" id="confirm-password" />
                    </div>

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login" element={<Login />}>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
