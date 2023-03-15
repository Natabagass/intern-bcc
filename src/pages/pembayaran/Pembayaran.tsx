import { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import icon from '../../components/icons';
import { useParams } from "react-router-dom";
import Ruang1 from '../../assets/image/ruang1.svg'
import Biodata from "../../features/forms/FormBiodata";
import { gedung } from "../../models/dummy/gedung";
import Footer from "../../components/partials/Footer";
import Nav from "../../components/partials/Nav";
import { PembayaranContext } from "../../context/PembayaranContext";
import Lunas from "../../features/pembayaran/CardPelunasan";
import Bayar from "../../features/pembayaran/CardBayar";
import Button from "../../components/button";
import { gedungsbyId } from "../../models/dto/data/gedungbyId";
import { dataId } from "../../models/dto/defaultValue/byIdValue";
import AxiosInstance from "../../features/api/AxiosInstance";

const Pembayaran = () => {
    const axiosInstance = AxiosInstance()
    const { step, visible, setHarga, setVisible } = useContext(PembayaranContext)
    const [imageUrl, setImageUrl] = useState<string[]>([])
    const [dataGedung, setDataGedung] = useState<gedungsbyId>(dataId)
    const { id } = useParams()
    const myId = parseInt(id!, 10)

    const getGedungbyId = async () => {
        try {
            const res = await axiosInstance.get(`/gedungs/${myId}`)
            setDataGedung(res.data.data)
            setImageUrl(res.data.data.Links)
            setHarga(res.data.data.Harga)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getGedungbyId()
    }, [])
    return (
        <>
            <Nav />
            <div className="mx-[50px] font-inter text-[#1B1D21] my-[100px]">
                <div className="my-[30px] items-center font-inter flex flex-row">
                    <h1 className="opacity-[50%]">Graha &nbsp;</h1>
                    <icon.IoIosArrowForward className="opacity-[50%]" />
                    <span className="font-bold text-black opacity-[100%]">&nbsp; {dataGedung.Nama}</span>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                    <div className="flex w-full md:w-[50%] mr-10 flex-col">
                        <LazyLoadImage
                            src={imageUrl[0]}
                            alt="gedung"
                            className="w-full"
                        />
                        <div>
                            <div className="flex flex-row justify-between ">
                                <div className="flex flex-col w-full p-5 font-inter">
                                    <h1 className="font-inter font-bold text-[24px] lg:text-[32px]">{dataGedung.Nama}</h1>
                                    <h3 className="text-[14px] lg:text-[18px]">{dataGedung.Alamat}</h3>
                                    <h3 className="mt-2 opacity-[70%] text-[14px] lg:text-[16px] flex flex-row items-center"><span className="mr-2"><icon.GrLocation /></span>{dataGedung.Kecamatan}</h3>
                                    <div className="w-full p-5 shadow-lg mt-5 rounded-xl">
                                        <Biodata />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Button type="button" onClick={() => setVisible(true)} className="mt-5 md:hidden flex text-white rounded-xl bg-[#F78CB2]">Bayar</Button>
                    </div>

                    <div className="w-[50%] md:inline hidden">
                        {step === 1 ? <Bayar /> : <Lunas />}
                    </div>
                </div>
            </div>
            <div className={`${!visible ? 'invisible' : 'visible'} fixed bottom-0 z-50 bg-white inline w-full md:hidden`}>
                {step === 1 ? <Bayar /> : <Lunas />}
            </div>
            <Footer />
        </>
    );
}

export default Pembayaran;