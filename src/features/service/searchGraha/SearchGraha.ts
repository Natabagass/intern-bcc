import AxiosInstance from "../../api/AxiosInstance";
const axiosInstance = AxiosInstance();

const searchGraha = async (name: string) => {
    try {
        const res = axiosInstance.get(`/search/gedungs?name=${name}`)
        return res
    } catch (err){
        console.log(err)
    }
}

export {searchGraha}