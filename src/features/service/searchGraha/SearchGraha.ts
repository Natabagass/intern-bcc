import AxiosInstance from "../../api/AxiosInstance";
const axiosInstance = AxiosInstance();

const searchGraha = async (name: string, kecamatan:string) => {
    try {
        const res = axiosInstance.get(`/search/gedungs?name=${name}&kecamatan=${kecamatan}`)
        return res
    } catch (err){
        console.log(err)
    }
}

export {searchGraha}