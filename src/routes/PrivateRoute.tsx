import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router";

export default function PrivateRoute() {
    const token = Cookies.get('auth')

    if(token) return <Outlet/>

    return <Navigate to="/"/>
}