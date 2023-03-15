import { useEffect, useState } from "react"
import { getHistory } from "../../../features/service/history/getHistory"
import { history } from "../../../models/dto/data/history"
import { dateFormatter } from "../../../components/formatterDate"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { rupiahFormatter } from "../../../components/formatterRupiah"

const History = () => {
    const [dataHistory, getDataHistory] = useState<history[]>([])
    const getData = async () => {
        try {
            const res = await getHistory()
            getDataHistory(res?.data.data)
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="flex flex-col font-inter">
                {
                    dataHistory.map((data: history) => {
                        return (
                            <>
                                <div className="shadow-lg my-3 p-5 rounded-xl">
                                    <div className="flex flex-row items-center">
                                        <h1 className="font-bold">{dateFormatter(data.tanggal)}</h1>
                                        <h1 className="font-bold mx-2 p-2 bg-[#FCDDEC] rounded-lg">DP 30%</h1>
                                        <h3 className="text-[#A8B5C2]">#{data.id}</h3>
                                    </div>
                                    <div className="flex flex-row items-center my-5">
                                        <LazyLoadImage src={data.link_gedung} alt="gambar" className="w-[15%] min-h-[50px]" />
                                        <div className="flex flex-row w-full items-center justify-between">
                                            <div className="flex ml-5 flex-col w-full">
                                                <h1 className="font-bold text-[20px]">{data.nama_gedung}</h1>
                                                <h3 className="text-[#6A7682]">Sudah Terbayar 30%</h3>
                                            </div>
                                            <div className="flex flex-row items-center w-full">
                                                <hr className="rotate-90 w-[20%]" />
                                                <div className="flex flex-col">
                                                    <h4 className="text-[#6A7682] text-[12px]">Biaya yang diperlukan</h4>
                                                    <h1 className="text-[20px] font-bold">{rupiahFormatter(data.nominal)}</h1>
                                                </div>
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