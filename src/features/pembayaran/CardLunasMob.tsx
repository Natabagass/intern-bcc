import { useContext, useState } from "react";
import BCA from '../../assets/image/BCA.svg'
import bri from '../../assets/image/bri.svg'
import Mandiri from '../../assets/image/mandiri.svg'
import Bni from '../../assets/image/bni.svg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import Button from "../../components/button";
import { rupiahFormatter } from "../../components/formatter";
import Timer from "../../components/timer";
import icons from "../../components/icons";
import { PembayaranContext } from "../../context/PembayaranContext";
import { Pembayaran } from "../../models/dummy/pembayaran";
import AxiosInstance from "../api/AxiosInstance";

const LunasMobile = () => {
    const axiosInstance = AxiosInstance()
    const { totalBiaya, setVisible } = useContext(PembayaranContext)
    const [forms, setForms] = useState<{ nominal: number, bukti: File | undefined }>({
        nominal: 0,
        bukti: undefined
    })
    const [visibleBNI, setVisibleBNI] = useState(false)
    const [visibleBCA, setVisibleBCA] = useState(false)
    const [fileNameMob, setFileNameMob] = useState<string | undefined>("No Selected File")
    const [visibleMandiri, setVisibleMandiri] = useState(false)
    const [visibleBRI, setVisibleBRI] = useState(false)
    const { id } = useParams()
    const myId = parseInt(id!, 10)


    const handlePayment = async () => {
        try {
            const result = await axiosInstance.post(`/payment/${myId}`, forms, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            console.log(result)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className="fixed inline overflow-auto h-full z-10 shadow-lg md:hidden bottom-0 w-full bg-white border border-[#F78CB2] rounded-xl p-5">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="font-bold">Pilih Metode Pembayaran</h1>
                    <button onClick={() => setVisible(false)}><icons.RxCrossCircled className="text-[24px] md:hidden flex text-[#F78CB2] mt-1" /></button>
                </div>
                <div className="my-3 flex flex-row justify-between">
                    <div>
                        <h1>Biaya yang harus dibayarkan</h1>
                        <input
                            type="number"
                            name="nominal"
                            hidden
                            value={rupiahFormatter(totalBiaya)}
                            onChange={() => setForms({ ...forms, nominal: totalBiaya })}
                            className="font-bold text-[24px] mt-3" />
                        <h3 className="font-bold text-[24px] mt-3">{rupiahFormatter(totalBiaya)}</h3>
                    </div>
                    <div>
                        <h1>Pilih Dalam Waktu</h1>
                        <Timer />
                    </div>
                </div>

                <div>
                    <hr className="mt-2 mb-3" />
                    <h2 className="font-bold">Unggah Bukti Pembayaran</h2>
                    <div className="mt-8 flex flex-col lg:flex-row items-center justify-between">
                        <h3 className="text-[14px]">Unggah bukti pembayaran dengan format .jpg, .png atau .pdf</h3>
                        <label htmlFor="inputFile" className="p-2 xl:p-3 text-[12px] xl:text-[16px] mt-5 lg:mt-0 cursor-pointer items-center flex flex-row bg-[#F78CB2] text-white rounded-xl"><icons.CgFileAdd className="mr-3 text-[20px]" />Pilih Berkas</label>
                        <form encType="multipart/form-data">
                            <input
                                type="file"
                                name="bukti"
                                id="inputFile"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const file = e.target.files?.[0]
                                    setFileNameMob(file?.name)
                                    setForms({ ...forms, bukti: file })
                                }}
                                style={{ display: "none" }}
                                accept='image/*,.pdf,.jpg,.png' />
                        </form>
                    </div>
                    <h4 className="text-[14px] my-4 flex justify-center text-[#F78CB2]">Uploaded File : {fileNameMob}</h4>
                </div>

                <div>
                    <hr />
                    <div className="flex items-center my-5">
                        <div onClick={() => setVisibleBCA(prev => !prev)} className="flex flex-col justify-start w-full items-center">
                            <div className="flex justify-start w-full flex-row">
                                <LazyLoadImage src={BCA} alt="BCA Logo" />
                                <div className="flex flex-row justify-between w-full">
                                    <h1 className="ml-3">BCA</h1>
                                    {visibleBCA ? <icons.AiOutlineMinus className="text-[24px]" /> : <icons.MdOutlineKeyboardArrowDown className="text-[24px]" />}
                                </div>
                            </div>
                            <div className={`${visibleBCA ? 'inline' : 'hidden'} w-full flex justify-start flex-col my-5`} >
                                {
                                    Pembayaran.map(data => {
                                        return (
                                            <>
                                                <h3>{data.id}. <span className="ml-2">{data.text}</span></h3>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="flex items-center my-5">
                        <div onClick={() => setVisibleMandiri(prev => !prev)} className="flex flex-col justify-start w-full items-center">
                            <div className="flex justify-start w-full flex-row">
                                <LazyLoadImage src={Mandiri} alt="Mandiri Logo" />
                                <div className="flex flex-row justify-between w-full">
                                    <h1 className="ml-3">Mandiri</h1>
                                    {visibleMandiri ? <icons.AiOutlineMinus className="text-[24px]" /> : <icons.MdOutlineKeyboardArrowDown className="text-[24px]" />}
                                </div>
                            </div>
                            <div className={`${visibleMandiri ? 'inline' : 'hidden'} w-full flex justify-start flex-col my-5`} >
                                {
                                    Pembayaran.map(data => {
                                        return (
                                            <>
                                                <h3>{data.id}. <span className="ml-2">{data.text}</span></h3>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="flex items-center my-5">
                        <div onClick={() => setVisibleBRI(prev => !prev)} className="flex flex-col justify-start w-full items-center">
                            <div className="flex justify-start w-full flex-row">
                                <LazyLoadImage src={bri} alt="BRI Logo" />
                                <div className="flex flex-row justify-between w-full">
                                    <h1 className="ml-3">BRI</h1>
                                    {visibleBRI ? <icons.AiOutlineMinus className="text-[24px]" /> : <icons.MdOutlineKeyboardArrowDown className="text-[24px]" />}
                                </div>
                            </div>
                            <div className={`${visibleBRI ? 'inline' : 'hidden'} w-full flex justify-start flex-col my-5`} >
                                {
                                    Pembayaran.map(data => {
                                        return (
                                            <>
                                                <h3>{data.id}. <span className="ml-2">{data.text}</span></h3>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="flex items-center my-5">
                        <div onClick={() => setVisibleBNI(prev => !prev)} className="flex flex-col justify-start w-full items-center">
                            <div className="flex justify-start w-full flex-row">
                                <LazyLoadImage src={Bni} alt="BNI Logo" />
                                <div className="flex flex-row justify-between w-full">
                                    <h1 className="ml-3">BNI</h1>
                                    {visibleBNI ? <icons.AiOutlineMinus className="text-[24px]" /> : <icons.MdOutlineKeyboardArrowDown className="text-[24px]" />}
                                </div>
                            </div>
                            <div className={`${visibleBNI ? 'inline' : 'hidden'} w-full flex justify-start flex-col my-5`} >
                                {
                                    Pembayaran.map(data => {
                                        return (
                                            <>
                                                <h3>{data.id}. <span className="ml-2">{data.text}</span></h3>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    onClick={() => handlePayment}
                    className="bg-[#F78CB2] hover:bg-white hover:border-[#F78CB2] hover:border hover:text-[#F78CB2] rounded-xl w-full text-white mt-8"
                >
                    Bayar
                </Button>
            </div>
        </>
    );
}

export default LunasMobile;