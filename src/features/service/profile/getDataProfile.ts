import { useEffect, useState } from "react";
import AxiosInstance from "../../api/AxiosInstance";
const axiosInstance = AxiosInstance();

const getProfile = async () => {
    try {
        const res = axiosInstance.get('/validate')
        return res
    } catch (err){
        console.log(err)
    }
}

export {getProfile}