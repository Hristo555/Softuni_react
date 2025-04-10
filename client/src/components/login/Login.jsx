import { Link, useNavigate } from "react-router";
import Register from "../register/Register"
import { useActionState, useContext } from "react";
import { useLogin } from "../../api/authApi";
import { UserContext } from "../../context/UserContext";

export default function Login({onLogin}){
    const navigate = useNavigate();
    const {userLoginHandler} = useContext(UserContext)
    const { login } = useLogin();
    
    const loginHandler = async (prevState, formData) => {
        const values = Object.fromEntries(formData);

        const authData = await login(values.email, values.password);

        userLoginHandler(authData);
        
        navigate('/blogs');

        return values;
    };

    const [values, loginAction, isPending] = useActionState(loginHandler, {email: '', password: ''});

    return(
        <section id="login-page" className="content auth">
        <form id="login" action={loginAction}>
            <div className="flex flex-col text-center relative">
                <div className="absolute left-[40%] mt-10 bg-white rounded-md">
                    <h1 className="mt-2 mb-2">Login</h1>

                    <div className="p-2 m-2 relative">
                        <label className="absolute bottom-[33px]" htmlFor="email">Email:</label>
                        <input className="border-2" type="email" id="email" name="email" placeholder="maria@email.com" />
                    </div>
                    <div className="p-2 m-2 relative">
                        <label className="absolute bottom-[33px]" htmlFor="pass">Password:</label>
                        <input className="border-2" type="password" name="password" id="register-password" />
                    </div>
                    <div>
                        <input className="btn submit p-2 pl-4 pr-4 m-2 rounded-md text-black bg-orange-200 bold" type="submit" value="Login" />
                    </div>

                    <div className="field p-2 m-2">
                        <span>If you already have profile click <Link to="/register"><b className="bold text-black">here</b></Link></span>
                    </div>
                </div>
            </div>
        </form>
        </section>
    );
}