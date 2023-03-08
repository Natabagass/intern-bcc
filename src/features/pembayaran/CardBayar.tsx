import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { gedung } from "../../models/dummy/gedung";
import Button from "../../components/button/Button";
import { rupiahFormatter } from "../../components/formatter/Rupiah";
import { PembayaranContext } from "../../context/PembayaranContext";
import Lunas from "./CardPelunasan";

const Bayar = () => {
    const {setStep, setHarga, harga} = useContext(PembayaranContext)
    const [tab, setTab] = useState('')
    const [jumlah, setJumlah] = useState(0)
    const layanan = 500000
    const [totalBiaya, setTotalBiaya] = useState(0)
    const [dp, setDp] = useState(0)
    const { id } = useParams()
    const myId = parseInt(id!, 10)
    useEffect(() => {
        gedung.filter(data => {
            if (data.id === myId) {
                setJumlah(data.harga)
            }
        })
    }, [])
    return (
        <>
            <div className="shadow-lg top-24 sticky p-[24px]">
                <h1 className="font-bold">Pilih Metode Pembayaran</h1>
                <div className="my-3 flex flex-row">
                    <Button
                        className={`${tab === '30%' ? 'bg-[#F78CB2]  rounded-xl text-white' : ''} 'opacity-[50%] px-3 mr-3'`}
                        onClick={() => {
                            setTab('30%')
                            const total = jumlah * 0.3
                            setDp(total)
                            setHarga(totalBiaya)
                            setTotalBiaya(total + layanan)
                        }}
                    >
                        30%</Button>
                    <Button
                        className={`${tab === "50%" ? 'bg-[#F78CB2]  rounded-xl text-white' : ''} 'opacity-[50%] px-3 mr-3'`}
                        onClick={() => { 
                            setTab('50%')
                            const total = jumlah * 0.5
                            setDp(total)
                            setHarga(totalBiaya)
                            setTotalBiaya(total + layanan)
                        }}
                    >
                        50%</Button>
                    <Button
                        className={`${tab === 'Bayar Lunas' ? 'bg-[#F78CB2]  rounded-xl text-white' : ''} 'opacity-[50%] px-3 mr-3'`}
                        onClick={() => { 
                            setTab('Bayar Lunas')
                            const total = jumlah * 1
                            setDp(total)
                            setHarga(totalBiaya)
                            setTotalBiaya(total + layanan)
                        }}
                    >
                        Bayar Lunas</Button>
                </div>
                {/* <div className="flex rounded-lg p-3 border hover:bg-[#F78CB2] hover:text-white flex-row items-center">
                    <icon.TbDiscount2 className="mr-3 text-[20px]" />
                    <div onClick={() => navigate('/')} className="flex cursor-pointer flex-row justify-between w-full items-center">
                        <h1>Pakai Promo Agar Lebih Hemat</h1>
                        <icon.MdOutlineArrowForwardIos />
                    </div>
                </div> */}

                <div className="my-5">
                    <h1 className="font-bold">Detail Pembayaran</h1>
                    <div className="mt-3 flex w-full justify-between flex-row">
                        <h3>Total Keseluruhan</h3>
                        <span className="text-[16px] font-bold">{rupiahFormatter(dp)}</span>
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
                        <span className="text-[16px] font-bold">{rupiahFormatter(totalBiaya)}</span>
                    </div>
                </div>
                <Button
                    type="button" 
                    onClick={() => setStep(2)}
                    className="bg-[#F78CB2] hover:bg-white hover:border-[#F78CB2] hover:border hover:text-[#F78CB2] rounded-xl w-full text-white mt-8"
                    >
                        Bayar
                    </Button>
            </div>
        </>
    );
}

export default Bayar;