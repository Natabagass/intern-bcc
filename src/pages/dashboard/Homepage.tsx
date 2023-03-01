import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Parallax, Mousewheel } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Hero from '../../assets/card.png'
import Nav from "./Nav";
import ImgPage from '../../assets/mantap.jfif'
import ImgHeroBtm from '../../assets/view.jpg'

const Homepage = () => {
    return (
        <>
            <Nav />
            <div className="my-[100px]">

                <div className="flex flex-row mb-[30px] justify-around w-full">
                    <div className="w-[696px] mt-[100px]">
                        <h3 className="font-inter font-bold text-[64px] mb-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        <a href="/graha" className=" p-3 bg-[#F78CB2] hover:bg-[#f379a3] rounded-lg text-white">Booking Sekarang</a>
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

                <div className="flex my-[50px] flex-row mx-[50px] justify-around">
                    <div className="w-[400px]">
                        <h3 className="font-inter font-bold text-[64px]">Mengapa Memilih Kami?</h3>
                    </div>
                    <div className="font-inter flex items-center w-[600px]">
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