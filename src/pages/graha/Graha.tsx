import Nav from "../../components/partials/Nav";
import icon from '../../components/icons/Icons';
import { gedung } from '../../models/dummy/gedung'
import fotoGedung from '../../assets/cakrawala.svg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/partials/Footer";
import { rupiahFormatter } from "../../components/formatter/Rupiah";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getGedung } from "../../features/service/gedung/getDataGedung";

const Graha = () => {
    const [gedungs, setGedungs] = useState([])
    const getGedungs = async () => {
        try {
            const result = await getGedung()
            console.log(result)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 500
        });
        getGedungs()
    }, [])
    const navigate = useNavigate()
    return (
        <>
            <Nav />
            <div className="mx-[50px] sm:mx-[100px] my-[100px] font-inter">
                <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
                    {
                        gedung.map((data, index) => {
                            return (
                                <div key={index} onClick={() => navigate(`/graha/${data.id}`)} className="mr-[20px] hover:opacity-80 shadow-md outline-none cursor-pointer hover:-translate-y-2 transition rounded-xl border my-[30px] bg-white">
                                    <div>
                                        <LazyLoadImage className="w-full rounded-t-xl" src={fotoGedung} alt="Foto gedung" />
                                    </div>
                                    <div className="bg-white py-[10px] font-inter text-black rounded-b-xl w-full">
                                        <div className="mx-[20px]">
                                            <h1 className="sm:text-[16px] text-[18px] font-bold">{data.name}</h1>
                                            <div className="my-5 font-inter text-[12px]">
                                                <h3 className="lg:text-[12px]">{data.alamat}</h3>
                                                <h3 className="mt-1 text-[#6A7682] flex flex-row items-center"><span className="mr-2"><icon.GrLocation /></span>{data.kecamatan}</h3>
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className="text-[10px] text-[#1B1D21]">Mulai Dari</h3>
                                                <span className="text-[14px] lg:text-[16px] font-bold">{rupiahFormatter(data.harga)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Graha;