import { LazyLoadImage } from "react-lazy-load-image-component";
import Hero from '../../assets/card.png'
import Nav from "./Nav";
import ImgPage from '../../assets/mantap.jfif'
import ImgHeroBtm from '../../assets/view.jpg'
const Homepage = () => {
    return (
        <>
            <Nav />
            <div className="my-[40px]">

                <div className="flex flex-row mb-[30px] justify-around w-full">
                    <div className="w-[696px] mt-[100px]">
                        <h3 className="font-inter font-bold text-[64px] mb-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        <a href="/graha" className=" p-3 bg-slate-500 hover:bg-slate-600 rounded-lg text-white">Booking Sekarang</a>
                    </div>
                    <div>
                        <LazyLoadImage
                            src={Hero}
                            alt="Side Hero"
                            className="w-[500px]"
                        />
                    </div>
                </div>

                <div>
                    <LazyLoadImage 
                        src={ImgPage}
                        alt="Foto"
                        className="h-[704px] w-full"
                    />
                </div>

                <div className="flex my-[50px] flex-row mx-[50px] justify-between">
                    <div className="w-[400px]">
                        <h3 className="font-inter font-bold text-[64px]">Mengapa Memilih Kami?</h3>
                    </div>
                    <div className="font-inter">
                        <div>
                            <h1 className="text-[32px] font-bold">1. Discover</h1>
                            <h3>Markicob</h3>
                        </div>
                        <div className="my-5">
                            <h1 className="text-[32px] font-bold">2. Tes</h1>
                            <h3>Markicob</h3>
                        </div>
                        <div className="my-5">
                            <h1 className="text-[32px] font-bold">3. Haya</h1>
                            <h3>Markicob</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <LazyLoadImage 
                        src={ImgHeroBtm}
                        alt="Foto"
                        className="h-[288px] w-full"
                    />
                </div>

            </div>
        </>
    );
}

export default Homepage;