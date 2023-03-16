import Nav from "../../components/partials/Nav";
import icon from '../../components/icons';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../../components/partials/Footer";
import { rupiahFormatter } from "../../components/formatterRupiah";
import { useEffect, useState, useContext } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getGedung } from "../../features/service/gedung/getDataGedung";
import { gedungs } from "../../models/dto/data/gedung";
import { searchGraha } from "../../features/service/searchGraha/SearchGraha";

const Graha = () => {
    const [dataGedung, setDataGedung] = useState([])
    const [name, setName] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const getGedungs = async () => {
        try {
            const result = await getGedung()
            setDataGedung(result?.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSearch = async (e: {preventDefault: () => void}) => {
        e.preventDefault()
        setSearchParams({ name: name })
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
    const navigate = useNavigate()
    return (
        <>
            <Nav />
            <div className="mx-[30px] md:mx-[50px] lg:mx-[100px] min-h-screen my-[100px] font-inter">
                <form onSubmit={handleSearch}>
                    <div className="w-[100%] sm:w-[80%] lg:w-[50%] mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input name="name" onChange={(e) => { setName(e.target.value) }} type="search" id="default-search" className="block outline-none shadow-lg rounded-xl w-full p-4 pl-10 text-sm  " placeholder="Cari nama gedung" required />
                            <button type="submit" className="text-white bg-[#F78CB2] hover:bg-[#fc74a4] absolute right-2.5 bottom-2.5  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                        </div>
                    </div>
                </form>
                <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
                    {
                        dataGedung.map((data: gedungs, index: number) => {
                            return (
                                <div key={index} onClick={() => navigate(`/graha/${data.id}`)} className="mr-[20px] hover:opacity-80 shadow-md outline-none cursor-pointer hover:-translate-y-2 transition rounded-xl border my-[30px] bg-white">
                                    <div className="w-[100%]">
                                        <div className="bg-cover rounded-t-lg bg-center w-full min-h-[250px]" style={{ backgroundImage: `url(${data.link})` }} />
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
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Graha;