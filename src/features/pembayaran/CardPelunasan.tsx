import icons from "../../components/icons";
import BCA from '../../assets/image/BCA.svg'
import bri from '../../assets/image/bri.svg'
import Mandiri from '../../assets/image/mandiri.svg'
import Bni from '../../assets/image/bni.svg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../components/button";
import Timer from "../../components/timer";
import Swal from "sweetalert2";
import { PembayaranContext } from "../../context/PembayaranContext";
import { useContext, useEffect, useState } from "react";
import { rupiahFormatter } from "../../components/formatter";
import { Pembayaran } from "../../models/dummy/pembayaran";

const Lunas = () => {
    const { totalBiaya, setVisible } = useContext(PembayaranContext)
    const [visibleBNI, setVisibleBNI] = useState(false)
    const [visibleBCA, setVisibleBCA] = useState(false)
    const [visibleMandiri, setVisibleMandiri] = useState(false)
    const [visibleBRI, setVisibleBRI] = useState(false)
    const berhasil = () => {
        Swal.fire({
            icon: 'success',
            showConfirmButton: false,
            title: 'Pembayaran Berhasil'
        }).then(result => {
            if (result.dismiss) {
                window.location.replace('/')
            }
        })
    }
    return (
        <>
            <div className="shadow-lg top-24 sticky p-[24px]">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="font-bold">Pilih Metode Pembayaran</h1>
                    <button onClick={() => setVisible(false)}><icons.RxCrossCircled className="text-[24px] md:hidden flex text-[#F78CB2] mt-1" /></button>
                </div>
                <div className="my-3 flex flex-row justify-between">
                    <div>
                        <h1>Biaya yang harus dibayarkan</h1>
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
                    <div className="my-8 flex flex-col lg:flex-row items-center justify-between">
                        <h3 className="text-[14px]">Unggah bukti pembayaran dengan format .jpg, .png atau .pdf</h3>
                        <label htmlFor="inputFile" className="p-2 xl:p-3 text-[12px] xl:text-[16px] mt-5 lg:mt-0 cursor-pointer items-center flex flex-row bg-[#F78CB2] text-white rounded-xl"><icons.CgFileAdd className="mr-3 text-[20px]" />Pilih Berkas</label>
                        <input type="file" id="inputFile" style={{ display: "none" }} accept='image/*,.pdf,.jpg,.png' />
                    </div>
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
                    onClick={() => berhasil()}
                    className="bg-[#F78CB2] hover:bg-white hover:border-[#F78CB2] hover:border hover:text-[#F78CB2] rounded-xl w-full text-white mt-8"
                >
                    Bayar
                </Button>
            </div>

            <div className="fixed inline overflow-auto h-full z-10 shadow-lg md:hidden bottom-0 w-full bg-white border border-[#F78CB2] rounded-xl p-5">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="font-bold">Pilih Metode Pembayaran</h1>
                    <button onClick={() => setVisible(false)}><icons.RxCrossCircled className="text-[24px] md:hidden flex text-[#F78CB2] mt-1" /></button>
                </div>
                <div className="my-3 flex flex-row justify-between">
                    <div>
                        <h1>Biaya yang harus dibayarkan</h1>
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
                    <div className="my-8 flex flex-col lg:flex-row items-center justify-between">
                        <h3 className="text-[14px]">Unggah bukti pembayaran dengan format .jpg, .png atau .pdf</h3>
                        <label htmlFor="inputFile" className="p-2 xl:p-3 text-[12px] xl:text-[16px] mt-5 lg:mt-0 cursor-pointer items-center flex flex-row bg-[#F78CB2] text-white rounded-xl"><icons.CgFileAdd className="mr-3 text-[20px]" />Pilih Berkas</label>
                        <input type="file" id="inputFile" style={{ display: "none" }} accept='image/*,.pdf,.jpg,.png' />
                    </div>
                </div>

                <div>
                    <hr />
                    <div className="flex items-center my-5">
                        <LazyLoadImage src={BCA} alt="BCA Logo" />
                        <div className="flex flex-row justify-between w-full items-center">
                            <h1 className="ml-3">BCA</h1>
                            <icons.MdOutlineKeyboardArrowDown className="text-[24px]" />
                        </div>
                    </div>

                    <hr />
                    <div className="flex items-center my-5">
                        <LazyLoadImage src={Mandiri} alt="mandiri Logo" />
                        <div className="flex flex-row justify-between w-full items-center">
                            <h1 className="ml-3">Mandiri</h1>
                            <icons.MdOutlineKeyboardArrowDown className="text-[24px]" />
                        </div>
                    </div>

                    <hr />
                    <div className="flex items-center my-5">
                        <LazyLoadImage src={bri} alt="BRI Logo" />
                        <div className="flex flex-row justify-between w-full items-center">
                            <h1 className="ml-3">BRI</h1>
                            <icons.MdOutlineKeyboardArrowDown className="text-[24px]" />
                        </div>
                    </div>

                    <hr />
                    <div className="flex items-center my-5">
                        <LazyLoadImage src={Bni} alt="Bni Logo" />
                        <div className="flex flex-row justify-between w-full items-center">
                            <h1 className="ml-3">BNI</h1>
                            <icons.MdOutlineKeyboardArrowDown className="text-[24px]" />
                        </div>
                    </div>
                </div>
                <Button
                    onClick={() => berhasil()}
                    className="bg-[#F78CB2] hover:bg-white hover:border-[#F78CB2] hover:border hover:text-[#F78CB2] rounded-xl w-full text-white mt-8"
                >
                    Bayar
                </Button>
            </div>
        </>
    );
}

export default Lunas;