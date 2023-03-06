import { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate, useParams } from "react-router-dom";
import Ruang1 from '../../assets/foto gedung 1.png'
import Biodata from "../../components/features/forms/FormBiodata";
import { gedung } from "../../models/dummy/gedung";
import Footer from "../../components/partials/Footer";
import Nav from "../../components/partials/Nav";

const Pembayaran = () => {
    const [nama, setNama] = useState('')
    const { id } = useParams()
    const myId = parseInt(id!, 10)
    useEffect(() => {
        gedung.filter(data => {
            if (data.id === myId) {
                setNama(data.name)
            }
        })
    }, [])
    return (
        <>
            <Nav />
            <div className="mx-[50px] text-[#1B1D21] my-[100px]">
                <div className="my-[30px] items-center font-inter flex flex-row">
                    <h1 className="opacity-[50%]">Graha &nbsp;</h1>
                    <IoIosArrowForward className="opacity-[50%]" />
                    <span className="font-bold text-black opacity-[100%]">&nbsp; {nama}</span>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <LazyLoadImage
                            src={Ruang1}
                            alt="gedung"
                            className="w-[30%]"
                        />
                        <div>
                            {
                                gedung.filter(data => {
                                    if (data.id === myId) {
                                        return data.id
                                    }
                                }).map((sub,index) => {
                                    return (
                                        <>
                                            <div key={index} className="flex flex-row justify-between ">
                                                <div className="flex flex-col p-5 font-inter">
                                                    <h1 className="font-inter font-bold text-[32px]">{sub.name}</h1>
                                                    <h3 className="text-[18px]">{sub.alamat}</h3>
                                                    <h3 className="mt-2 opacity-[70%] flex flex-row items-center"><span className="mr-2"><GrLocation /></span>{sub.kecamatan}</h3>
                                                    <div className="w-full p-5 shadow-lg mt-5 rounded-xl">
                                                        <Biodata/>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Pembayaran;