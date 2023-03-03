import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoIosArrowForward } from 'react-icons/io'
import { FaCircle } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
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
                                        <div className="flex flex-col p-5 font-inter w-[75%]">
                                            <h1 className="font-inter font-bold text-[32px]">{sub.name}</h1>
                                            <h3 className="text-[18px]">{sub.alamat}</h3>
                                            <h3 className="mt-2 opacity-[70%] flex flex-row items-center"><span className="mr-2"><GrLocation /></span>{sub.kecamatan}</h3>
                                            <div className="flex flex-row items-center mt-5">
                                                {
                                                    sub.tag.map((tag) => {
                                                        return (
                                                            <div>
                                                                <ul>
                                                                    <li className="mr-3">
                                                                        <h1
                                                                            className={
                                                                                `${tag.tipe === 'konser' ?
                                                                                    'p-3 bg-[#88ADF1] text-white rounded-lg' : `${tag.tipe === 'pernikahan' ?
                                                                                        'p-3 bg-[#F78CB2] text-white rounded-lg' : 'p-3 bg-[#F79C8C] text-white rounded-lg'}`}`}
                                                                        >{tag.tipe}</h1>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <hr className="w-full mt-10" />
                                            <div className="mt-[30px]">
                                                <h1 className="font-bold text-[32px] mt-5">Fasilitas</h1>
                                                {
                                                    sub.fasilitas.map((fasil) => {
                                                        return (
                                                            <div>
                                                                <ul>
                                                                    <li className="flex flex-row items-center mr-5">
                                                                        <span className="font-bold ml-3"><FaCircle className="text-[5px] mr-3" /></span>{fasil.barang}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <hr className="w-full mt-10" />
                                            <div className="mt-10">
                                                <h1 className="font-bold text-[20px]">Spesifikasi Luas</h1>
                                                <div className="flex flex-row items-center">
                                                    <span className="font-bold ml-3"><FaCircle className="text-[5px] mr-3" /></span>
                                                    <h3>{sub.Luas}</h3>
                                                </div>
                                            </div>

                                            <hr className="w-full mt-10" />
                                            <div className="mt-10">
                                                <h1 className="font-bold text-[20px] mt-5">Kapasitas</h1>
                                                <div className="flex flex-row items-center">
                                                    <span className="font-bold ml-3"><FaCircle className="text-[5px] mr-3" /></span>
                                                    <h3 className="font-medium text-[16px]">{sub.kapasitas}</h3>
                                                </div>
                                            </div>

                                            <hr className="w-full mt-10" />
                                            <div className="mt-10">
                                                <h1 className="font-bold text-[20px]">Aturan</h1>
                                                {
                                                    sub.aturan.map((aturan) => {
                                                        return (
                                                            <div>
                                                                <ul>
                                                                    <li className="flex flex-row items-center mr-5">
                                                                        <span className="font-bold ml-3"><FaCircle className="text-[5px] mr-3" /></span>{aturan.barang}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className='w-[25%] ml-5'>
                                            <div className="top-24 bg-white shadow-md sticky rounded-xl p-5">
                                                <h1 className="text-[16px] ">Mulai Dari</h1>
                                                <h3 className="font-bold text-[25px]">{sub.harga}</h3>

                                                <Button
                                                    type="button"
                                                    className="mt-7 w-full text-[#F78CB2] bg-white border border-[#F78CB2]"
                                                    children="Tanya Pemilik"
                                                    onClick={() => navigate('https://wa.me/6275156144979')}
                                                />

                                                <Button
                                                    type="submit"
                                                    className="mt-3 w-full text-white bg-[#F78CB2] hover:bg-[#f379a3]"
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