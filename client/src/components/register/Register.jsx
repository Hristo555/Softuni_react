import { Link, useNavigate } from "react-router";
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
                <div className="flex flex-col text-center relative">
                    <div className="absolute left-[40%] mt-10 bg-white rounded-md">
                        <h1 className="mt-2 mb-2">Register</h1>

                        <div className="p-2 m-2 relative">
                            <label className="absolute bottom-[33px]" htmlFor="email">Email:</label>
                            <input className="border-2" type="email" id="email" name="email" placeholder="maria@email.com" />
                        </div>
                        <div className="p-2 m-2 relative">
                            <label className="absolute bottom-[33px]" htmlFor="pass">Password:</label>
                            <input className="border-2" type="password" name="password" id="register-password" />
                        </div>
                        <div className=" p-2 m-2 relative">
                            <label className="absolute bottom-[33px]" htmlFor="con-pass">Confirm Password:</label>
                            <input className="border-2" type="password" name="confirm-password" id="confirm-password" />
                        </div>
                        <div>
                            <input className="btn submit p-2 pl-4 pr-4 m-2 rounded-md bg-orange-200 text-black bold" type="submit" value="Register" />
                        </div>

                        <div className="field p-2 m-2">
                            <span>If you already have profile click <Link to="/login"><b className="bold text-black">here</b></Link></span>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
