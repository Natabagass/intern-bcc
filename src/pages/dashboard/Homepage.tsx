import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Parallax, Mousewheel } from "swiper";
import foto1 from '../../assets/foto1.png'
import foto2 from '../../assets/foto2.png'
import foto3 from '../../assets/foto3.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Hero from '../../assets/logoHomeFix.png'
import PesanOnline from '../../assets/pesan online.png'
import LihatGedung from '../../assets/lihat gedung.png'
import PesanGedung from '../../assets/pesan gedung.png'
import Nav from "./utils/Nav";
import { layanan, pemilikGraha } from "../../models/dummy/layanan";
import Footer from "./utils/Footer";

const Homepage = () => {
    return (
        <>
            <Nav />
            <div className="my-[100px] font-inter">

                <div className="flex flex-row mb-[30px] justify-around w-full">
                    <div className="w-[696px] mt-[100px]">
                        <h3 className="font-inter font-bold text-[64px] mb-[50px]">Masih bingung cari persewaan gedung? </h3>
                        <a href="/graha" className="p-3 bg-[#F78CB2] hover:bg-[#f379a3] rounded-lg text-white">Booking Sekarang</a>
                    </div>
                    <div>
                        <LazyLoadImage
                            src={Hero}
                            alt="Side Hero"
                            className="w-[500px]"
                        />
                    </div>
                </div>

                <div className="w-full bg-[#FEF3F7] min-h-fit">
                    <div className="flex flex-col">
                        <div className="mx-[70px] my-[50px]">
                            <h1 className="font-inter font-bold text-[48px]">Layanan Kami</h1>
                            <div className="flex flex-row justify-between">
                                {
                                    layanan.map(data => {
                                        return (
                                            <>
                                                <div className="flex mt-5 justify-between mr-10 flex-col">
                                                    <LazyLoadImage
                                                        src={`
                                                            ${data.keterangan === 'Pesan Online' ? PesanOnline :
                                                                data.keterangan === 'Lihat Gedung' ? LihatGedung : PesanGedung}
                                                            `}
                                                        alt='booking'
                                                        className="w-full h-fit"
                                                    />
                                                    <h1 className="font-bold font-inter text-[20px] flex justify-center mt-5">
                                                        {data.keterangan}
                                                    </h1>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex my-[50px] flex-row mx-[70px] justify-between">
                    <div className="w-[400px]">
                        <h3 className="font-inter font-bold text-[64px]">Mengapa Memilih Kami?</h3>
                    </div>
                    <div className="font-inter flex items-center w-[800px]">
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
                                <div className="title font-bold text-[64px]" data-swiper-parallax="-400">
                                    1. Discover
                                </div>
                                <div className="text mt-[20px]" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="title font-bold text-[64px]" data-swiper-parallax="-400">
                                    2. Found
                                </div>
                                <div className="text mt-[20px]" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="title font-bold text-[64px]" data-swiper-parallax="-400">
                                    3. Search
                                </div>
                                <div className="text mt-[20px]" data-swiper-parallax="-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="w-full bg-[#FEF3F7] min-h-fit">
                    <div className="flex flex-col">
                        <div className="mx-[70px] my-[50px]">
                            <h1 className="font-inter font-bold text-[48px]">Dari Pemilik Graha</h1>
                            <div className="flex flex-row justify-between mt-8">
                                {
                                    pemilikGraha.map((data) => {
                                        return (
                                            <>
                                                <div className="bg-white flex flex-col w-[30%] shadow-md justify-center items-center rounded-xl p-14">
                                                    <LazyLoadImage src={`
                                                            ${data.nama === 'Anthonio Priawan' ? foto1 :
                                                            data.nama === 'Suryani Mahalini' ? foto2 : foto3}
                                                            `}
                                                        alt='Foto Pemilik'
                                                        className="w-[150px]" />
                                                    <div className="flex justify-center flex-wrap flex-col text-center">
                                                        <h1 className="font-bold text-[24px] mt-7">{data.nama}</h1>
                                                        <h3 className="text-[16px] opacity-[50%]">{data.gedung}</h3>
                                                        <h3 className="text-[16px] mt-5">{data.komentar}</h3>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-[100px] mx-[70px]">
                    <h1 className="font-bold font-inter text-[64px]">Apa Kata Pengguna</h1>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Homepage;