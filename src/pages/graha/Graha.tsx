import Nav from "../../components/partials/Nav";
import icon from '../../components/icons';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../../components/partials/Footer";
import { rupiahFormatter } from "../../components/formatterRupiah";
import { useEffect, useState, useContext } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import fotoGedung from "../../assets/image/atria hotel.svg"
import { getGedung } from "../../features/service/gedung/getDataGedung";
import { gedungs } from "../../models/dto/data/gedung";
import { searchGraha } from "../../features/service/searchGraha/SearchGraha";
import { gedung } from "../../models/dummy/gedung";

const Graha = () => {
    const [dataGedung, setDataGedung] = useState([])
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [kecamatan, setKecamatan] = useState('')
    console.log(kecamatan)
    const [searchParams, setSearchParams] = useSearchParams()
    const getGedungs = async () => {
        try {
            const result = await getGedung()
            setDataGedung(result?.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSearch = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setSearchParams({ name: name, kecamatan: kecamatan })
    }

    useEffect(() => {
        const search = async () => {
            try {
                const result = await searchGraha(searchParams.get('name')!, searchParams.get('kecamatan')!)
                setDataGedung(result?.data.data)
            } catch (error) {
                console.error(error)
            }
        }
        search()
    }, [searchParams])

    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 500
        });
        getGedungs()
    }, [])

    return (
        <>
            <Nav />
            <div className="mx-[20px] md:mx-[50px] lg:mx-[100px] min-h-screen my-[100px] font-inter">
                <form onSubmit={handleSearch}>
                    <div className="flex justify-center flex-row">
                        <div className="w-[100%] sm:w-[80%] lg:w-[50%] mr-5">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input name='name' onChange={(e) => setName(e.target.value)} type="search" id="default-search" className="block outline-none shadow-lg placeholder:text-[12px] sm:placeholder:text-[16px] rounded-xl w-full p-3 pl-10 text-sm  " placeholder="Cari nama gedung" />
                                <select name="kecamatan" placeholder="Pilih Kecamatan" onChange={(e) => setKecamatan(e.target.value)} className="outline-none absolute right-2.5 bottom-2.5 rounded-xl p-1 cursor-pointer text-[10px] sm:text-[12px] lg:text-[14px] text-[#F78CB2]">
                                    <option value="">Kecamatan</option>
                                    <option value="Klojen">Klojen</option>
                                    <option value="Lowokwaru">Lowokwaru</option>
                                    <option value="Karang Ploso">Karang Ploso</option>
                                    <option value="Blimbing">Blimbing</option>
                                </select>
                            </div>
                        </div>
                        <div className="items-center flex">
                            <button type="submit" className="text-white sm:text-[12px] text-[14px] bg-[#F78CB2] hover:bg-[#fc74a4] mt-2 font-medium rounded-lg text-sm p-1 sm:p-2">Search</button>
                        </div>
                    </div>
                </form>
                <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-7 lg:grid-cols-4 w-full">


                    {
                        gedung.map((data, index) => {
                            return (
                                <div key={index} onClick={() => navigate(`/graha/${data.id}`)} className="mr-[20px] hover:opacity-80 shadow-md outline-none cursor-pointer hover:-translate-y-2 transition rounded-xl border my-[30px] bg-white">
                                    <div>
                                        <LazyLoadImage className="w-full rounded-t-xl" src={fotoGedung} alt="Foto gedung" />
                                    </div>
                                    <div className="bg-white py-[10px] font-inter text-black rounded-b-xl w-full">
                                        <div className="mx-[20px]">
                                            <h1 className="sm:text-[16px] text-[18px] font-bold">{data.name}</h1>
                                            <div className="my-5 font-inter text-[12px]">
                                                <h3 className="lg:text-[12px]">{data.alamat}</h3>
                                                <h3 className="mt-1 text-[#6A7682] flex flex-row items-center"><span className="mr-2"><icon.GrLocation /></span>{data.kecamatan}</h3>
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className="text-[10px] text-[#1B1D21]">Mulai Dari</h3>
                                                <span className="text-[14px] lg:text-[16px] font-bold">{rupiahFormatter(data.harga)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/** Ini adalah bagian map gedung dengan call api */}
                    {/* {
                        dataGedung.map((data: gedungs, index: number) => {
                            return (
                                <div key={index} onClick={() => navigate(`/graha/${data.id}`)} className="mr-[20px] hover:opacity-80 shadow-md outline-none cursor-pointer hover:-translate-y-2 transition rounded-xl border mb-[30px] bg-white">
                                    <div className=" sm:w-[100%]">
                                        <div className="bg-cover rounded-t-lg bg-center w-full min-h-[150px] sm:min-h-[250px]" style={{ backgroundImage: `url(${data.link})` }} />
                                    </div>
                                    <div className="bg-white py-[10px] font-inter text-black rounded-b-xl w-full">
                                        <div className="mx-[20px]">
                                            <h1 className="sm:text-[16px] text-[18px] font-bold">{data.nama}</h1>
                                            <div className="my-5 font-inter text-[12px]">
                                                <h3 className="lg:text-[12px]">{data.alamat}</h3>
                                                <h3 className="mt-1 text-[#6A7682] flex flex-row items-center"><span className="mr-2"><icon.GrLocation /></span>{data.kecamatan}</h3>
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className="text-[10px] text-[#1B1D21]">Mulai Dari</h3>
                                                <span className="text-[14px] lg:text-[16px] font-bold">{rupiahFormatter(data.harga)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    } */}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Graha;