import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function Protected(){
    const token = useAuth().accessToken;

    if(!token)
    {
        return <Navigate to="/login" />
    }
    return(
        <Outlet/>
    );
}