import { LazyLoadImage } from "react-lazy-load-image-component";
import {IoIosArrowForward} from 'react-icons/io'
import {GrLocation} from 'react-icons/gr'
import { gedung } from '../../../models/dummy/gedung'
import Nav from "../../dashboard/utils/Nav";
import Ruang1 from '../../../assets/gedung.jpg'
import Ruang2 from '../../../assets/gedung2.jpeg'
import Ruang3 from '../../../assets/gedung1.jpg'
import { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";

const Booking = () => {
    const [nama, setNama] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        gedung.filter(data => {
            if (data.id === 1) {
                setNama(data.name)
            }
        })
    }, [])
    return (
        <>
            <Nav />
            <div className="mx-[50px] my-[100px]">
                <div className="my-[30px] items-center font-inter flex flex-row">
                    <h1 className="opacity-[50%]">Graha &nbsp;</h1>
                    <IoIosArrowForward className="opacity-[50%]"/> 
                    <span className="font-bold text-black opacity-[100%]">&nbsp; {nama}</span>
                </div>
                <div className="flex items-stretch justify-between flex-row">
                    <LazyLoadImage
                        src={Ruang1}
                        className="w-[65%] bg-cover bg-center h-[500px] rounded-xl"
                        alt="Gambar 1"
                    />
                    <div className="w-[35%] flex flex-col justify-between ml-5">
                        <div>
                            <LazyLoadImage
                                src={Ruang2}
                                className="bg-cover bg-center w-full h-[240px] rounded-xl"
                                alt="Gambar 1"
                            />
                        </div>
                        <div>
                            <LazyLoadImage
                                src={Ruang3}
                                className="bg-cover bg-center w-full h-[240px] rounded-xl"
                                alt="Gambar 1"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-[20px]">
                    {
                        gedung.filter(data => {
                            if (data.id === 1) {
                                return data.id
                            }
                        }).map((sub) => {
                            return (
                                <>
                                    <div className="flex flex-row justify-between ">
                                        <div className="flex flex-col border rounded-xl p-5 font-inter w-[64%]">
                                            <h1 className="font-inter font-bold text-[32px]">{sub.name}</h1>
                                            <h3 className="text-[18px]">{sub.alamat}</h3>
                                            <h3 className="mt-2 text-[#6A7682] opacity-[50%] flex flex-row items-center"><span className="mr-2"><GrLocation/></span>{sub.kecamatan}</h3>
                                            <div className="mt-[30px]">
                                                <h1 className="font-bold text-[20px] mt-5">Fasilitas : </h1>
                                            </div>
                                            {
                                                sub.fasilitas.map((fasil) => {
                                                    return (
                                                        <div>
                                                            <ul>
                                                                <li className="ml-[100px]">
                                                                    <span className="font-bold">{fasil.id}.</span> {fasil.barang}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <div className="mt-[50px]">
                                                <h1 className="font-bold text-[20px]">Spesifikasi Luas : <span className="font-medium text-[16px]">{sub.Luas}</span></h1>
                                                <h1 className="font-bold text-[20px] mt-5">Kapasitas : <span className="font-medium text-[16px]">{sub.kapasitas}</span></h1>
                                                <h1 className="font-bold text-[20px] mt-5">Aturan : </h1>
                                            </div>
                                            {
                                                sub.aturan.map((aturan) => {
                                                    return (
                                                        <div>
                                                            <ul>
                                                                <li className="ml-[100px]">
                                                                    <span className="font-bold">{aturan.id}.</span> {aturan.barang}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='w-[35%] ml-5'>
                                            <div className="border top-24 sticky rounded-xl p-5">
                                                <h1 className="text-[16px] ">Mulai Dari</h1>
                                                <h3 className="font-bold text-[25px] mt-2">{sub.harga}</h3>

                                                <Button
                                                    type="button"
                                                    className="mt-10 w-full text-[#F78CB2] bg-white border border-[#F78CB2]"
                                                    children="Tanya Pemilik"
                                                    onClick={() => navigate('/')}
                                                />

                                                <Button
                                                    type="submit"
                                                    className="mt-5 w-full text-white bg-[#F78CB2] hover:bg-[#f379a3]"
                                                    children="Booking Sekarang"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Booking;