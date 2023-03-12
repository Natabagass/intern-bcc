import { useContext } from 'react'
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
import Footer from "../../../components/partials/Footer";
import BookMobile from "../../../features/booking/BookMobile";
import { PembayaranContext } from "../../../context/PembayaranContext";
import icons from '../../../components/icons/Icons';

const Booking = () => {
    const { visible, setVisible } = useContext(PembayaranContext)
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
                <div className="flex items-stretch justify-between md:flex-row flex-col">
                    <div className="md:w-[70%] w-full bg-cover bg-center min-h-[400px] rounded-lg" style={{ backgroundImage: `url(${Ruang1})` }} />
                    <div className="md:w-[30%] flex md:flex-col flex-row justify-between md:ml-5 md:mt-0 mt-5">
                        <div className="bg-cover bg-center w-full min-h-[200px] rounded-lg md:mb-5 md:mr-0 mr-5" style={{ backgroundImage: `url(${Ruang2})` }} />
                        <div className="flex justify-end w-full">
                            <div className="bg-cover bg-center w-full min-h-[200px] rounded-lg" style={{ backgroundImage: `url(${Ruang3})` }} />
                            <Button
                                type="button"
                                className="px-2 xl:px-3 absolute text-[#F78CB2] text-[12px] lg:text-[16px] items-center mt-36 md:mt-32 flex mr-5 bg-white border-2 border-[#F78CB2]"
                                children="Lihat semua foto"
                                onClick={() => navigate('/')}
                            />
                        </div>
                    </div>
                </div>
                <Keterangan />
            </div>
            <div className={`${!visible ? 'invisible' : 'visible'} fixed bottom-0 z-50 bg-white inline w-full md:hidden`}>
                <BookMobile />
            </div>
            <div className="w-full md:hidden fixed bottom-0 justify-around bg-white flex border rounded-t-xl border-[#F78CB2] p-5">
                <a
                    href="https://wa.me/6275156144979"
                    target='_blank'
                    className="mt-4 p-2 flex w-[50%] mr-5 justify-center text-[14px] lg:text-[16px] rounded-lg text-[#F78CB2] bg-white border border-[#F78CB2]"
                >Tanya Pemilik</a>
                <Button className="mt-4 w-[50%] ml-5 text-white bg-[#F78CB2] text-[14px] lg:text-[16px] hover:bg-[#f379a3]" onClick={() => setVisible(true)}>Ajukan Sewa</Button>
            </div>
            <Footer />
        </>
    );
}

export default Booking;