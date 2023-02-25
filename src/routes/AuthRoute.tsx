import { Navigate, Outlet } from "react-router";

export default function AuthRoute() {
    const token = localStorage.getItem('auth')

    if (token){
        return <Navigate to="/dashboard" />
    }

    return <Outlet/>
}
