import axios from "axios";
import Cookies from "js-cookie";
const token = Cookies.get('auth')

const AxiosInstance = () => {
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