import { LazyLoadImage } from "react-lazy-load-image-component";
import Nav from "../../dashboard/Nav";
import Ruang1 from '../../../assets/gedung.jpg'
import Ruang2 from '../../../assets/gedung2.jpeg'
import Ruang3 from '../../../assets/gedung1.jpg'

const Booking = () => {
    return (
        <>
            <Nav />
            <div className="mx-[50px] my-[150px]">
                <div className="flex w-full justify-center flex-row">
                    <LazyLoadImage
                        src={Ruang1}
                        className="w-[800px] h-[530px] mr-[50px] rounded-lg"
                        alt="Gambar 1"
                    />
                    <div className="flex flex-col">
                        <LazyLoadImage
                            src={Ruang2}
                            className="w-[500px] h-[256px] mb-[20px] rounded-lg"
                            alt="Gambar 1"
                        />
                        <LazyLoadImage
                            src={Ruang3}
                            className="w-[500px] h-[256px] rounded-lg"
                            alt="Gambar 1"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Booking;