import { LazyLoadImage } from "react-lazy-load-image-component";
import { gedung } from '../../../models/dummy/gedung'
import Nav from "../../dashboard/utils/Nav";
import Ruang1 from '../../../assets/gedung.jpg'
import Ruang2 from '../../../assets/gedung2.jpeg'
import Ruang3 from '../../../assets/gedung1.jpg'
import { useEffect, useState } from "react";
import Button from "../../../components/button/Button";

const Booking = () => {
    const [nama, setNama] = useState('')
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
            <div className="mx-[50px] my-[150px]">
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
                <div className="mt-[100px]">
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
                                            <h3 className="text-[20px] font-semibold">{sub.alamat}</h3>
                                            <div className="mt-[100px]">
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
                                            <div>
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
                                        </div>
                                        <div className='w-[35%] ml-5'>
                                            <div className="border top-24 sticky rounded-xl p-5">
                                                <h1 className="text-[20px] font-bold">Harga Mulai Dari</h1>
                                                <h3 className="font-medium">{sub.harga}</h3>

                                                <Button
                                                    type="submit"
                                                    className="mt-10 w-full text-white bg-[#F78CB2] hover:bg-[#f379a3]"
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