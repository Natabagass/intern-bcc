import { Navigate, Outlet } from "react-router";
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export default function AuthRoute() {
    const token = cookies.get('auth')

    if (token){
        return <Navigate to="/" />
    }

    return <Outlet/>
}
