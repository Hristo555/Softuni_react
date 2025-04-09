import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function Guest(){
    const token = useAuth().accessToken;
    
    if(token)
    {
        return <Navigate index />
    }
    return(
        <Outlet/>
    );
};


