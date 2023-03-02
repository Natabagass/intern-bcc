import Nav from "../dashboard/utils/Nav";
import { gedung } from '../../models/dummy/gedung'
import fotoGedung from '../../assets/gedung.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import Footer from "../dashboard/utils/Footer";

const Graha = () => {
    const navigate = useNavigate()
    return (
        <>
            <Nav />
            <div className="mx-[100px] my-[100px]">
                <div className="grid grid-cols-4 w-full">
                    {
                        gedung.map((data, index) => {
                            return (
                                <div key={index} onClick={() => navigate('/graha/1')} className="mr-[20px] hover:opacity-80 cursor-pointer hover:-translate-y-2 transition rounded-xl border my-[30px] bg-white">
                                    <div>
                                        <LazyLoadImage className="w-[400px] rounded-t-xl" src={fotoGedung} alt="Foto gedung" />
                                    </div>
                                    <div className="bg-[#f0f0f0] py-[20px] font-inter text-black rounded-b-xl w-full">
                                        <div className="mx-[20px]">
                                            <h1 className="text-[18px] font-bold">{data.name}</h1>
                                            <div className="my-8">
                                                <h3>{data.alamat}</h3>
                                                <h3 className="mt-3">{data.kecamatan}</h3>
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className="text-[10px]">Mulai Dari</h3>
                                                <h1 className="text-[16px] font-bold">{data.harga}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Graha;