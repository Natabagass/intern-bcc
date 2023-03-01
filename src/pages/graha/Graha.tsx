import Nav from "../dashboard/Nav";
import { gedung } from '../../models/dummy/dummy'
import fotoGedung from '../../assets/gedung.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Graha = () => {
    const navigate = useNavigate()
    return (
        <>
            <Nav />
            <div className="mx-[100px] my-[100px]">
                <div className="flex flex-row justify-between flex-wrap w-full">
                    {
                        gedung.map((data, index) => {
                            return (
                                <div key={index} onClick={() => navigate('/graha/1')} className="mr-[20px] hover:-translate-y-3 transition rounded-xl border my-[30px] bg-white">
                                    <div>
                                        <LazyLoadImage className="w-[400px] rounded-t-xl" src={fotoGedung} alt="Foto gedung" />
                                    </div>
                                    <div className="bg-[#f0f0f0] py-[20px] rounded-b-xl w-full text-gray-500">
                                        <div className="mx-[20px]">
                                            <h1 className="text-[18px] font-medium">{data.name}</h1>
                                            <div>
                                                {
                                                    data.fasilitas.map((sub) => {
                                                        return (
                                                            <>
                                                                <div className="">
                                                                    <h1 className="">{sub.barang}</h1>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Graha;