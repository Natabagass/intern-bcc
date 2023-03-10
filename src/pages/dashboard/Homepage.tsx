import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Parallax, Mousewheel, Navigation } from "swiper";
import foto1 from '../../assets/pemilik1.svg'
import foto2 from '../../assets/pemilik2.svg'
import foto3 from '../../assets/pemilik3.svg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Hero from '../../assets/home.svg'
import PesanOnline from '../../assets/layanan1.svg'
import LihatGedung from '../../assets/layanan2.svg'
import PesanGedung from '../../assets/layanan3.svg'
import Nav from "../../components/partials/Nav";
import { layanan, pemilikGraha } from "../../models/dummy/layanan";
import Footer from "../../components/partials/Footer";
import RunComponent from "../../features/home/RunningComponent";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 500,
            easing: 'ease-in-sine'
        });
    }, [])
    return (
        <>
            <Nav />
            <div className="my-[100px] font-inter">
                <div className="flex flex-row mb-[30px] items-center justify-around w-full">
                    <div className="w-[80%] justify-center sm:w-[45%] lg:w-[35%] flex sm:justify-between flex-col">
                        <div className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[48px] w-full font-bold">
                            <h1>
                                Bingung cari persewaan gedung
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Acara?')
                                            .changeDeleteSpeed(100)
                                            .changeDelay(100)
                                            .pauseFor(2500)
                                            .deleteChars(6)
                                            .typeString('pernikahan?')
                                            .pauseFor(2500)
                                            .deleteChars(11)
                                            .typeString('konser?')
                                            .pauseFor(2500)
                                            .start();
                                    }}
                                    options={{
                                        loop: true,
                                        deleteSpeed: 200,
                                    }}
                                />
                            </h1>
                        </div>
                        <h1 data-aos="fade-right" className="text-[14px] sm:text-[16px] md:text-[20px] w-[70%] sm:w-[80%] lg:w-[100%] mt-5">Gausah risau kini semua pilihan sudah tersedia dalam satu platform</h1>
                        <a data-aos="fade-left" href="/graha" className="p-2 md:p-3 text-center sm:text-left bg-[#F78CB2] w-[60%] sm:w-[50%] md:w-[45%] lg:w-[50%] text-[12px]  sm:text-[14px] md:text-[16px] mt-6 justify-end hover:bg-[#f379a3] rounded-lg text-white">Booking Sekarang</a>
                    </div>
                    <div className="w-[35%] hidden sm:flex">
                        <LazyLoadImage
                            src={Hero}
                            alt="Side Hero"
                            className="w-[100%]"
                        />
                    </div>
                </div>

                <div className="w-full bg-[#FEF3F7] min-h-fit">
                    <div className="flex flex-col">
                        <div className="mx-[30px] lg:mx-[70px] my-[20px]">
                            <h1 className="font-inter font-bold text-[24px] lg:text-[48px]">Layanan Kami</h1>
                            <div data-aos="fade-up" className="hidden lg:flex flex-row justify-between">
                                {
                                    layanan.map(data => {
                                        return (
                                            <>
                                                <div className="flex mt-5 mr-10 flex-col">
                                                    <LazyLoadImage
                                                        src={`
                                                            ${data.keterangan === 'Pesan Online' ? PesanOnline :
                                                                data.keterangan === 'Lihat Gedung' ? LihatGedung : PesanGedung}
                                                            `}
                                                        alt='booking'
                                                        className="w-full h-fit"
                                                    />
                                                    <h1 className="font-bold font-inter text-[14px] sm:text-[16px] lg:text-[20px] flex justify-center mt-5">
                                                        {data.keterangan}
                                                    </h1>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="flex justify-center lg:hidden w-full">
                                <Swiper
                                    navigation={true}
                                    spaceBetween={50}
                                    modules={[Navigation]}
                                    slidesPerView={1}
                                    className="mySwiper w-[60%] flex">
                                    {
                                        layanan.map(data => {
                                            return (
                                                <>
                                                    <SwiperSlide className="flex mt-5 mr-10 flex-col">
                                                        <LazyLoadImage
                                                            src={`
                                                            ${data.keterangan === 'Pesan Online' ? PesanOnline :
                                                                    data.keterangan === 'Lihat Gedung' ? LihatGedung : PesanGedung}
                                                            `}
                                                            alt='booking'
                                                            className="w-full h-fit rounded-xl"
                                                        />
                                                        <h1 className="font-bold font-inter text-[14px] sm:text-[16px] lg:text-[20px] flex justify-center mt-5">
                                                            {data.keterangan}
                                                        </h1>
                                                    </SwiperSlide>
                                                </>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex my-[50px] flex-row mx-[30px] sm:mx-[70px] justify-between">
                    <div className="w-[30%]">
                        <h3 className="font-inter font-bold text-[24px] sm:text-[32px] lg:text-[64px]">Mengapa Memilih Kami?</h3>
                    </div>
                    <div className="font-inter flex items-center w-[50%] sm:w-[60%]">
                        <Swiper
                            direction={"horizontal"}
                            speed={800}
                            slidesPerView={1}
                            mousewheel={true}
                            parallax={true}
                            modules={[Parallax, Mousewheel]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="title font-bold text-[24px] sm:text-[32px] lg:text-[64px]" data-swiper-parallax="-400">
                                    Lengkap
                                </div>
                                <div className="text text-[12px] lg:text-[24px] mt-[20px]" data-swiper-parallax="-100">
                                    <p>
                                        Detail dan Informasi mengenai gedung yang kita sajikan akurat dan lengkap
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="title font-bold text-[24px] sm:text-[32px] lg:text-[64px]" data-swiper-parallax="-400">
                                    Found
                                </div>
                                <div className="text text-[12px] lg:text-[24px] mt-[20px]" data-swiper-parallax="-100">
                                    <p>
                                        Booking dan pembayaran bisa dilakukan secara langsung melalui web kami dan pastinya terpercaya
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="title font-bold text-[24px] sm:text-[32px] lg:text-[64px]" data-swiper-parallax="-400">
                                    Akurat
                                </div>
                                <div className="text text-[12px] lg:text-[24px] mt-[20px]" data-swiper-parallax="-100">
                                    <p>
                                        Kualitas dari pelayanan serta kepuasan pengguna dapat anda lihat pada review pengguna
                                    </p>
                                </div>
                            </SwiperSlide>
                            <h1 className="text-[12px] lg:text-[24px] mt-7 lg:mt-10 font-bold">Scroll Me!</h1>
                        </Swiper>
                    </div>
                </div>

                <div className="w-full bg-[#FEF3F7] min-h-fit">
                    <div className="flex flex-col">
                        <div className="mx-[30px] sm:mx-[70px] mt-[20px]">
                            <h1 className="font-inter font-bold text-[24px] lg:text-[48px]">Dari Pemilik Graha</h1>
                            <div data-aos="fade-up" className="hidden lg:flex flex-row justify-between mt-8">
                                {
                                    pemilikGraha.map((data) => {
                                        return (
                                            <>
                                                <div className="bg-white flex flex-col mb-[50px] lg:w-[30%] shadow-md items-center rounded-xl p-14">
                                                    <LazyLoadImage src={`
                                                            ${data.nama === 'Anthonio Priawan' ? foto1 :
                                                            data.nama === 'Suryani Mahalini' ? foto2 : foto3}
                                                            `}
                                                        alt='Foto Pemilik'
                                                        className="w-[50%]" />
                                                    <div className="flex justify-center flex-wrap flex-col text-center">
                                                        <h1 className="font-bold text-[12px] lg:text-[24px] mt-7">{data.nama}</h1>
                                                        <h3 className="text-[14px] lg:text-[16px] opacity-[50%]">{data.gedung}</h3>
                                                        <h3 className="text-[14px] lg:text-[16px] mt-5">{data.komentar}</h3>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="flex justify-center lg:hidden w-full">
                                <Swiper
                                    navigation={true}
                                    spaceBetween={50}
                                    modules={[Navigation]}
                                    slidesPerView={1}
                                    className="mySwiper w-[60%] my-10 flex">
                                    {
                                        pemilikGraha.map((data) => {
                                            return (
                                                <>
                                                    <SwiperSlide className="bg-white flex flex-col mb-[50px] justify-center items-center rounded-xl p-5 sm:p-14">
                                                        <div className="w-full flex justify-center">
                                                            <LazyLoadImage src={`
                                                            ${data.nama === 'Anthonio Priawan' ? foto1 :
                                                                    data.nama === 'Suryani Mahalini' ? foto2 : foto3}
                                                            `}
                                                                alt='Foto Pemilik'
                                                                className="w-[80%] sm:w-[50%]" />
                                                        </div>
                                                        <div className="flex justify-center flex-wrap flex-col text-center">
                                                            <h1 className="font-bold text-[12px] lg:text-[24px] mt-7">{data.nama}</h1>
                                                            <h3 className="text-[14px] lg:text-[16px] opacity-[50%]">{data.gedung}</h3>
                                                            <h3 className="text-[12px] sm:text-[14px] lg:text-[16px] mt-5">{data.komentar}</h3>
                                                        </div>
                                                    </SwiperSlide>
                                                </>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-[100px]">
                    <div className="mx-[30px] sm:mx-[70px]">
                        <h1 className="font-bold font-inter text-[24px] sm:text-[32px] lg:text-[64px]">Apa Kata Pengguna</h1>
                    </div>
                    <RunComponent />
                </div>

            </div>
            {/* <Footer /> */}
        </>
    );
}

export default Homepage;