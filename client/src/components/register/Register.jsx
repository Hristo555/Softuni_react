import { Link, useNavigate } from "react-router";
import styles from "./Register.module.css";
import { useRegister } from "../../api/authApi";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext"

export default function Register() {
    const navigate = useNavigate();
    const {register} = useRegister();
    const {userLoginHandler} = useContext(UserContext);

    const registerForm = async (formData) =>{
        const {email, password} = Object.fromEntries(formData);

        const confirmPassword = formData.get('confirm-password');

        if(password !== confirmPassword)
        {
            console.log('Password mismatch')
            return;
        }

       const authData =  await register(email, password);

       userLoginHandler(authData);

       navigate('/home');
    }
    return (
        <section id="register-page" className="content auth">
            <form id="register" action={registerForm}>
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
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
