import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoIosArrowForward } from 'react-icons/io'
import { gedung } from '../../../models/dummy/gedung'
import Nav from "../../../components/partials/Nav";
import Ruang1 from '../../../assets/foto gedung 1.png'
import Ruang2 from '../../../assets/gedung2.jpeg'
import Ruang3 from '../../../assets/gedung1.jpg'
import { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import Keterangan from "../../../components/features/booking/KeteranganBook";

const Booking = () => {
    const [nama, setNama] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
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
                <div className="flex items-stretch justify-between flex-row">
                    <LazyLoadImage
                        src={Ruang1}
                        className="w-[75%] bg-cover bg-center h-[500px]"
                        alt="Gambar 1"
                    />
                    <div className="w-[25%] flex flex-col justify-between ml-5">
                        <div>
                            <LazyLoadImage
                                src={Ruang2}
                                className="bg-cover bg-center w-full h-[240px]"
                                alt="Gambar 1"
                            />
                        </div>
                        <div>
                            <div className="flex justify-end">
                                <Button
                                    type="button"
                                    className="px-3 absolute text-[#F78CB2] mt-44 mr-5 bg-white border-2 border-[#F78CB2]"
                                    children="Lihat semua foto"
                                    onClick={() => navigate('/')}
                                />
                            </div>
                            <LazyLoadImage
                                src={Ruang3}
                                className="bg-cover bg-center w-full h-[240px]"
                                alt="Gambar 1"
                            />
                        </div>
                    </div>
                </div>
                <Keterangan />
            </div>
        </>
    );
}

export default Booking;