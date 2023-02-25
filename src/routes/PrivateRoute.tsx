import { Navigate, Outlet } from "react-router";

export default function PrivateRoute() {
    const token = localStorage.getItem('auth')

    if(token) return <Outlet/>

    return <Navigate to="/"/>
}