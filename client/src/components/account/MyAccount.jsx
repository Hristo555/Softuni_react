import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function MyAccount(){
    const {email, username} = useContext(UserContext);
    return(
        <>
        <div className="info-wrapper">
            <form action="">
                <div className="email">Email: {email}</div>
                <div className="user">Username: {username}</div>
                <button className="update">Update</button>
            </form>
        </div>
        </>
    );
}