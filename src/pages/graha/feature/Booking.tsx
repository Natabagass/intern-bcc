import { LazyLoadImage } from "react-lazy-load-image-component";
import { gedung } from '../../../models/dummy/gedung'
import icon from '../../../components/icons/Icons';
import Nav from "../../../components/partials/Nav";
import Ruang1 from '../../../assets/ruang1.svg'
import Ruang2 from '../../../assets/ruang2.svg'
import Ruang3 from '../../../assets/ruang3.svg'
import { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import Keterangan from "../../../features/booking/KeteranganBook";

const Booking = () => {
    const [nama, setNama] = useState('')
    const navigate = useNavigate()
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
                    <icon.IoIosArrowForward className="opacity-[50%]" />
                    <span className="font-bold text-black opacity-[100%]">&nbsp; {nama}</span>
                </div>
                <div className="flex items-stretch justify-between flex-col lg:flex-row">
                    <LazyLoadImage
                        src={Ruang1}
                        className="xl:w-[80%] w-full lg:w-[70%] bg-cover bg-center min-h-[400px]"
                        alt="Gambar 1"
                    />
                    <div className="lg:w-[25%] w-[50%] flex lg:flex-col flex-row xl:w-[30%] ml-0 mt-5 lg:mt-0 lg:ml-7">
                            <LazyLoadImage
                                src={Ruang2}
                                className="bg-cover bg-center mb-0 lg:mb-44 mr-8 lg:mr-0 w-full min-h-[200px]"
                                alt="Gambar 1"
                            />
                            <LazyLoadImage
                                src={Ruang3}
                                className="bg-cover bg-center w-full min-h-[200px]"
                                alt="Gambar 1"
                            />
                        {/* <div className="flex justify-end w-full">
                            <Button
                                type="button"
                                className="px-3 absolute text-[#F78CB2] mt-52 mr-5 bg-white border-2 border-[#F78CB2]"
                                children="Lihat semua foto"
                                onClick={() => navigate('/')}
                            />
                        </div> */}
                    </div>
                </div>
                {/* <Keterangan /> */}
            </div>
        </>
    );
}

export default Booking;