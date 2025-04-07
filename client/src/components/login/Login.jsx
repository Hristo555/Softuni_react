import { Link, useNavigate } from "react-router";
import Register from "../register/Register"
import { useActionState } from "react";

export default function Login({onLogin}){
    const navigate = useNavigate();
    
    const loginHandler = (prevState, formData) => {
        const values = Object.fromEntries(formData);

        const email = formData.get('email');
        
        onLogin(values.email);
        
        // navigate('/blogs');

        return values;
    };

    const [values, loginAction, isPending] = useActionState(loginHandler, {email: '', password: ''});

    return(
        <section id="login-page" className="auth">
            <form id="login" action={loginAction}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" disabled={isPending}/>
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}