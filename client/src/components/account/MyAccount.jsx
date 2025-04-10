import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function MyAccount(){
    const {email, username} = useContext(UserContext);
    return(
        <>
        <div className="info-wrapper inline-block m-2">
            <form action="">
                <div className="email p-2 m-2">Email: <input className="ml-2 border-2 bg-white" type="text" defaultValue={email}/></div>
                <div className="user p-2 m-2">Username: <input className="ml-2 border-2 bg-white" type="text" defaultValue={username}/></div>
                <button className="update p-2 m-2 rounded-md border-2 bg-white">Update</button>
            </form>
        </div>
        </>
    );
}