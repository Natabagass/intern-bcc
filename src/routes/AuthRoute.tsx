import { Navigate, Outlet } from "react-router";
import Cookies from 'js-cookie'

export default function AuthRoute() {
    const token = Cookies.get('auth')

    if (token){
        return <Navigate to="/" />
    }

    return <Outlet/>
}
