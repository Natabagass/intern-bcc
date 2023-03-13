import AxiosInstance from "../../api/AxiosInstance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const axiosInstance = AxiosInstance();

const getGedungbyId = async () => {
    const { id } = useParams()
    const myId = parseInt(id!, 10)
    try {
        const res = await axiosInstance.get(`/gedungs/${myId}`)
        return res
    } catch (err){
        console.log(err)
    }
}

export {getGedungbyId}