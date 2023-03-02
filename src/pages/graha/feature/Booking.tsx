import { LazyLoadImage } from "react-lazy-load-image-component";
import { gedung } from '../../../models/dummy/dummy'
import Nav from "../../dashboard/Nav";
import Ruang1 from '../../../assets/gedung.jpg'
import Ruang2 from '../../../assets/gedung2.jpeg'
import Ruang3 from '../../../assets/gedung1.jpg'
import { useEffect, useState } from "react";

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
                        className="w-[67%] bg-cover bg-center min-h-[300px] rounded-xl"
                        alt="Gambar 1"
                    />
                    <div className="w-[30%] flex flex-col justify-between ml-5">
                        <LazyLoadImage
                            src={Ruang2}
                            className="bg-cover bg-center w-full min-h-[150px] rounded-xl"
                            alt="Gambar 1"
                        />
                        <LazyLoadImage
                            src={Ruang3}
                            className="bg-cover bg-center w-full min-h-[150px] rounded-xl"
                            alt="Gambar 1"
                        />
                    </div>
                </div>
                <div className="flex flex-row mt-10">
                    <div>
                        {
                            gedung.filter(data => {
                                if (data.id === 1) {
                                    return data.id
                                }
                            }).map((sub) => {
                                return (
                                    <div>
                                        <h1 className="font-inter font-bold text-[32px]">{sub.name}</h1>
                                        {
                                            sub.fasilitas.map((fasil) => {
                                                return (
                                                    <div>
                                                        <ul>
                                                            <li className="flex flex-row">
                                                                {fasil.barang}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Booking;