import { useContext, useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate, useParams } from "react-router-dom";
import {TbDiscount2} from 'react-icons/tb'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import Ruang1 from '../../assets/foto gedung 1.png'
import Biodata from "../../components/features/forms/FormBiodata";
import { gedung } from "../../models/dummy/gedung";
import Footer from "../../components/partials/Footer";
import Nav from "../../components/partials/Nav";
import Button from "../../components/button/Button";
import { diskon, layanan } from "../../models/dummy/layanan";

const Pembayaran = () => {
    const [nama, setNama] = useState('')
    const navigate = useNavigate()
    const [harga, setHarga] = useState('')
    const [clicked, setClicked] = useState(false)
    const { id } = useParams()
    const myId = parseInt(id!, 10)
    useEffect(() => {
        gedung.filter(data => {
            if (data.id === myId) {
                setNama(data.name)
                setHarga(data.harga)
            }
        })
    }, [])
    return (
        <>
            <Nav />
            <div className="mx-[50px] font-inter text-[#1B1D21] my-[100px]">
                <div className="my-[30px] items-center font-inter flex flex-row">
                    <h1 className="opacity-[50%]">Graha &nbsp;</h1>
                    <IoIosArrowForward className="opacity-[50%]" />
                    <span className="font-bold text-black opacity-[100%]">&nbsp; {nama}</span>
                </div>
                <div className="flex justify-between flex-row">
                    <div className="flex w-[50%] mr-10 flex-col">
                        <LazyLoadImage
                            src={Ruang1}
                            alt="gedung"
                            className="w-full"
                        />
                        <div>
                            {
                                gedung.filter(data => {
                                    if (data.id === myId) {
                                        return data.id
                                    }
                                }).map((sub, index) => {
                                    return (
                                        <>
                                            <div key={index} className="flex flex-row justify-between ">
                                                <div className="flex flex-col w-full p-5 font-inter">
                                                    <h1 className="font-inter font-bold text-[32px]">{sub.name}</h1>
                                                    <h3 className="text-[18px]">{sub.alamat}</h3>
                                                    <h3 className="mt-2 opacity-[70%] flex flex-row items-center"><span className="mr-2"><GrLocation /></span>{sub.kecamatan}</h3>
                                                    <div className="w-full p-5 shadow-lg mt-5 rounded-xl">
                                                        <Biodata />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="w-[50%]">
                        <div className="shadow-lg top-24 sticky p-[24px]">
                            <h1 className="font-bold">Pilih Metode Pembayaran</h1>
                            <div className="my-3 flex flex-row">
                                {
                                    diskon.map(data => {
                                        return (
                                            <>
                                                <Button
                                                    className={`${clicked ? 'bg-[#F78CB2] rounded-lg text-white' : 'opacity-[50%]'} mr-3`}
                                                    onClick={() => setClicked(true)}>
                                                    {data.jumlah}</Button>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="flex rounded-lg p-3 border hover:bg-[#F78CB2] hover:text-white flex-row items-center">
                                <TbDiscount2 className="mr-3 text-[20px]"/>
                                <div onClick={() => navigate('/')} className="flex cursor-pointer flex-row justify-between w-full items-center">
                                    <h1>Pakai Promo Agar Lebih Hemat</h1>
                                    <MdOutlineArrowForwardIos/>
                                </div>
                            </div>

                            <div className="my-5">
                                <h1 className="font-bold">Detail Pembayaran</h1>
                                <div className="mt-3 flex w-full justify-between flex-row">
                                    <h3>Total Keseluruhan</h3>
                                    <h3>{harga}</h3>
                                </div>
                            </div>
                            <hr />

                            <div className="my-5">
                                <div className="flex flex-row justify-between w-full">
                                    <h1>Biaya Layanan</h1>
                                    <h3>Rp 500,000</h3>
                                </div>
                                <div className="mt-3 flex flex-row justify-between w-full">
                                    <h1>Biaya yang harus dibayar</h1>
                                    <h3 className="font-bold">Rp 25,000,000</h3>
                                </div>
                            </div>
                            <Button className="bg-[#F78CB2] hover:bg-white hover:border-[#F78CB2] hover:border hover:text-[#F78CB2] rounded-xl w-full text-white mt-8">Bayar</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Pembayaran;