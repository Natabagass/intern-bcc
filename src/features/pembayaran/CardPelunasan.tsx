import icons from "../../components/icons";
import BCA from '../../assets/BCA.svg'
import bri from '../../assets/bri.svg'
import Mandiri from '../../assets/mandiri.svg'
import Bni from '../../assets/bni.svg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../components/button";
import Timer from "../../components/timer/Timer";
import Swal from "sweetalert2";
import { PembayaranContext } from "../../context/PembayaranContext";
import { useContext } from "react";
import { rupiahFormatter } from "../../components/formatter/Rupiah";

const Lunas = () => {
    const { harga, setVisible } = useContext(PembayaranContext)
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
            <div className="shadow-lg top-24 sticky p-[24px] font-inter">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="font-bold">Pilih Metode Pembayaran</h1>
                    <button onClick={() => setVisible(false)}><icons.RxCrossCircled className="text-[24px] md:hidden flex text-[#F78CB2] mt-1" /></button>
                </div>
                <div className="my-3 flex flex-row justify-between">
                    <div>
                        <h1>Biaya yang harus dibayarkan</h1>
                        <h3 className="font-bold text-[24px] mt-3">{rupiahFormatter(harga)}</h3>
                    </div>
                    <div>
                        <h1>Pilih Dalam Waktu</h1>
                        <Timer />
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