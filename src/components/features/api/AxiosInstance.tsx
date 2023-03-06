import axios from "axios";
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const AxiosInstance = () => {
    const token = cookies.get('auth')
    const res = axios.create({
        baseURL: 'https://intern-production.up.railway.app/v0',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    return res
}

export default AxiosInstance;