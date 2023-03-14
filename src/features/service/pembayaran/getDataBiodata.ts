import AxiosInstance from "../../api/AxiosInstance";
import { useEffect, useState } from "react";
const axiosInstance = AxiosInstance();

const getBiodata = async () => {
    try {
        const res = axiosInstance.get('/booking-details')
        return res
    } catch (err){
        console.log(err)
    }
}

export {getBiodata}