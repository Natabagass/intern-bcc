import { useEffect, useState, useContext } from "react"
import { getHistory } from "../../../features/service/history/getHistory"
import { history } from "../../../models/dto/data/history"
import { dateFormatter } from "../../../components/formatterDate"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { rupiahFormatter } from "../../../components/formatterRupiah"
import icons from "../../../components/icons"
import Swal from "sweetalert2"

const History = () => {
    const [dataHistory, getDataHistory] = useState<history[]>([])
    const [gambar, setGambar] = useState('')
    const getData = async () => {
        try {
            const res = await getHistory()
            getDataHistory(res?.data.data)
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    const detailTransaksi = async () => {
        dataHistory.map(data => {
            return setGambar(data.link)
        })
        Swal.fire({
            title: 'Bukti Pembayaran!',
            text: 'Foto Bukti Pembayaran Terakhir',
            imageUrl: `${gambar}`,
            imageWidth: 600,
            imageHeight: 400,
        })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="flex flex-col mb-10 font-inter">
                {
                    dataHistory.map((data: history) => {
                        return (
                            <>
                                <div className="shadow-lg my-3 p-5 rounded-xl">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                                        <h1 className="font-bold  xl:text-[16px] text-[12px] md:text-[14px]">{dateFormatter(data.tanggal_booking)}</h1>
                                        <div className="flex items-center flex-row">
                                            <h1 className="font-bold sm:mt-0 mt-2 mx-0 sm:mx-2 p-2 xl:text-[16px] text-[12px] md:text-[14px] bg-[#FCDDEC] rounded-lg">{data.status}</h1>
                                            <h3 className="text-[#A8B5C2] sm:ml-0 ml-2 xl:text-[16px] text-[12px] md:text-[14px]">#{data.id}</h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center my-5">
                                        <LazyLoadImage src={data.link_gedung} alt="gambar" className="w-[15%] min-h-[50px]" />
                                        <div className="flex flex-col md:flex-row w-full items-center">
                                            <div className="flex ml-5 flex-col mt-7 md:mt-0 w-full">
                                                <h1 className="font-bold text-[16px] xl:text-[20px]">{data.nama_gedung}</h1>
                                                <h3 className="xl:text-[16px] text-[14px] text-[#6A7682]">{`${data.status === 'Bayar Lunas' ? 'Lunas' : `Sudah Terbayar ${data.status}`}`}</h3>
                                            </div>
                                            <div className="flex flex-col md:flex-row items-end md:items-center w-full">
                                                <hr className="rotate-0 md:flex hidden md:rotate-90 w-[30%]" />
                                                <div className="flex md:mt-0 mt-4 flex-col">
                                                    <h4 className="text-[#6A7682] text-[12px]">{`${data.status === 'Bayar Lunas' ? 'Total Biaya' : `Biaya yang Sudah Dibayarkan`}`}</h4>
                                                    <h1 className="sm:text-[16px] text-[14px] md:text-[18px] lg:text-[20px] font-bold">{rupiahFormatter(data.nominal)}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex text-[10px] sm:text-[12px] mr-1 md:mr-14 justify-end items-center flex-col sm:flex-row">
                                        <div className="flex flex-col sm:flex-row sm:items-center items-end justify-end w-full mx-12 mt-2">
                                            <button onClick={detailTransaksi} className="mx-10 sm:mx-0 sm:mb-0 mb-3">Lihat Bukti Pembayaran</button>
                                            <div className="flex flex-row items-center">
                                                <h3 className="bg-[#F78CB2] mx-3 text-white p-2 rounded-lg">{`${data.status === 'Bayar Lunas' ? 'Selesai' : 'Lanjut Pembayaran'}`}</h3>
                                                <a target="_blank" href="https://wa.me/6289602668749"><icons.HiDotsHorizontal className="text-[25px] border-[#F78CB2] border rounded-md text-[#F78CB2] opacity-50" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}

export default History;