import { Cookies } from 'react-cookie';
const cookies = new Cookies();
import { Navigate, Outlet } from "react-router";

export default function PrivateRoute() {
    const token = cookies.get('auth')

    if(token) return <Outlet/>

    return <Navigate to="/"/>
}