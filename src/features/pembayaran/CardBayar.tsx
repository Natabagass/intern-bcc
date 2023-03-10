import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { gedung } from "../../models/dummy/gedung";
import Button from "../../components/button";
import { rupiahFormatter } from "../../components/formatter";
import { PembayaranContext } from "../../context/PembayaranContext";
import icons from "../../components/icons";

const Bayar = () => {
    const { setStep, setHarga, harga, totalBiaya, setTotalBiaya, setVisible } = useContext(PembayaranContext)
    const [tab, setTab] = useState('')
    const layanan = 500000
    const [totalKeseluruhan, setTotalKesuluruhan] = useState(0)
    const { id } = useParams()
    const myId = parseInt(id!, 10)

    useEffect(() => {
        setTotalBiaya(totalKeseluruhan + layanan)
    }, [totalKeseluruhan, layanan])

    return (
        <>
            <div className="shadow-lg top-24 sticky p-[24px]">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="font-bold">Pilih Metode Pembayaran</h1>
                    <button onClick={() => setVisible(false)}><icons.RxCrossCircled className="text-[24px] md:hidden flex text-[#F78CB2] mt-1"/></button>
                </div>
                <div className="my-3 flex flex-row">
                    <Button
                        className={`${tab === '30%' ? 'bg-[#F78CB2]  rounded-xl text-white' : ''} 'opacity-[50%] px-3 mr-3'`}
                        onClick={() => {
                            setTab('30%')
                            const diskon = harga * 0.3
                            setTotalKesuluruhan(diskon)
                            setTotalBiaya(totalKeseluruhan + layanan)
                        }}
                    >
                        30%</Button>
                    <Button
                        className={`${tab === "50%" ? 'bg-[#F78CB2]  rounded-xl text-white' : ''} 'opacity-[50%] px-3 mr-3'`}
                        onClick={() => {
                            setTab('50%')
                            const diskon = harga * 0.5
                            setTotalKesuluruhan(diskon)
                            setTotalBiaya(totalKeseluruhan + layanan)
                        }}
                    >
                        50%</Button>
                    <Button
                        className={`${tab === 'Bayar Lunas' ? 'bg-[#F78CB2]  rounded-xl text-white' : ''} 'opacity-[50%] px-3 mr-3'`}
                        onClick={() => {
                            setTab('Bayar Lunas')
                            const diskon = harga * 1
                            setTotalKesuluruhan(diskon)
                            setTotalBiaya(totalKeseluruhan + layanan)
                        }}
                    >
                        Bayar Lunas</Button>
                </div>

                <div className="my-5">
                    <h1 className="font-bold">Detail Pembayaran</h1>
                    <div className="mt-3 flex w-full justify-between flex-row">
                        <h3>Total Keseluruhan</h3>
                        <span className="text-[16px] font-bold">{rupiahFormatter(totalKeseluruhan)}</span>
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