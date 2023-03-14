import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { rupiahFormatter } from "../../components/formatter";
import { biodata } from "../../models/dto/data/biodata";
import { Biodatas } from "../../models/dto/defaultValue/biodataValue";
import { getBiodata } from "../service/pembayaran/getDataBiodata";
import { PembayaranContext } from "../../context/PembayaranContext";
import AxiosInstance from "../api/AxiosInstance";
import { gedungsbyId } from "../../models/dto/data/gedungbyId";
import { dataId } from "../../models/dto/defaultValue/byIdValue";

const Biodata = () => {
    const axiosInstance = AxiosInstance()
    const { id } = useParams()
    const [dataGedung, setDataGedung] = useState<gedungsbyId>(dataId)
    const [biodataData, setBiodataData] = useState<biodata>(Biodatas)
    const myId = parseInt(id!, 10)
    const getBiodatas = async () => {
        try {
            const result = await getBiodata()
            console.log(result)
            setBiodataData(result?.data.data)
            console.log(biodataData)
        } catch (err) {
            console.log(err)
        }
    }
    const getGedungbyId = async () => {
        try {
            const res = await axiosInstance.get(`/gedungs/${myId}`)
            setDataGedung(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getBiodatas()
        getGedungbyId()
    }, [])
    return (
        <div>
            <div>
                <h1>Mulai Dari</h1>
                <span className="text-[20px] lg:text-[25px] font-bold">{rupiahFormatter(dataGedung.Harga)}</span>
                <hr className="w-full my-5" />
            </div>
            <label className="font-medium text-[18px] lg:text-[20px]">Biodata</label>
            <div className='flex mb-5 font-inter flex-col mt-[15px]'>
                <label htmlFor="nama" className="text-[14]">Nama</label>
                    <h3 className="mt-2 bg-[#F4F7FA] rounded-xl pl-3 w-full p-3">{biodataData.nama}</h3>
            </div>

            <div className='flex my-5 font-inter flex-col '>
                <label htmlFor="tanggal" className="text-[14]">Tanggal</label>
                    <h3 className="mt-2 bg-[#F4F7FA] rounded-xl pl-3 w-full p-3">{biodataData.tanggal}</h3>
            </div>

            <div className='flex my-5 font-inter flex-col '>
                <label htmlFor="keperluan" className="text-[14]">Keperluan</label>
                    <h3 className="mt-2 bg-[#F4F7FA] rounded-xl pl-3 w-full p-3">{biodataData.keperluan}</h3>
            </div>

            <div className='flex mt-6 flex-col'>
                <label htmlFor='nomer' className="text-[14]">No HP</label>
                <div className="relative flex items-center">
                    <h3 className="mt-2 bg-[#F4F7FA] rounded-xl pl-3 w-full p-3">{biodataData.nomor}</h3>
                </div>
            </div>

            <div className='flex mt-6 flex-col'>
                <label htmlFor='alamat' className="text-[14]">Alamat</label>
                <div className="relative flex items-cent er">
                    <h3 className="mt-2 bg-[#F4F7FA] rounded-xl pl-3 w-full p-3">{biodataData.alamat}</h3>   
                </div>
            </div>
        </div>
    );
}

export default Biodata;