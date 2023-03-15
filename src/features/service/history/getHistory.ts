import AxiosInstance from "../../api/AxiosInstance";
const axiosInstance = AxiosInstance();

const getHistory = async () => {
    try {
        const res = axiosInstance.get('/history')
        return res
    } catch (err){
        console.log(err)
    }
}

export {getHistory}