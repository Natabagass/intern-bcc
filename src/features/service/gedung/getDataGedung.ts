import AxiosInstance from "../../api/AxiosInstance";
import { useEffect, useState } from "react";
const axiosInstance = AxiosInstance();

const getGedung = async () => {
    try {
        const res = axiosInstance.get('/gedungs')
        return res
    } catch (err){
        console.log(err)
    }
}

export {getGedung}