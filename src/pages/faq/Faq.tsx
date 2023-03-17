import { useState } from "react";
import Nav from "../../components/partials/Nav"
import icons from "../../components/icons";

const Faq = () => {
    const [visibleFirst, setVisibleFirst] = useState(false)
    const [visibleSecond, setVisibleSecond] = useState(false)
    const [visibleThird, setVisibleThird] = useState(false)
    const [visibleFourth, setVisibleFourth] = useState(false)
    return (
        <>
            <Nav />
            <div className="my-[100px] mx-[70px]">
                <h1 className="font-bold text-[20px]">Frequently Asked Question</h1>

                <div className="flex flex-row w-[90%] items-start mt-20 min-h-[400px] justify-between">
                    <h1 className="font-bold text-[32px]">Pertanyaan Umum</h1>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <hr className="my-2" />
                            <div className="p-5">
                                <div onClick={() => setVisibleFirst(prev => !prev)} className="flex flex-row items-center">
                                    <h2 className="font-bold text-[24px] my-5">Bagaimana Cara Sewa gedung di grent.com?</h2>
                                    <span className="ml-10 text-[24px]">{visibleFirst ? <icons.AiOutlineMinus /> : <icons.MdOutlineKeyboardArrowDown />}</span>
                                </div>
                                <h4 className={`${visibleFirst ? 'inline' : 'hidden'} text-[20px]`}>Bagaimana cara sewa gedung di grent.com?</h4>
                            </div>
                            <hr className="my-2" />
                        </div>
                        <div className="flex flex-col">
                            <hr className="my-2" />
                            <div className="p-5">
                                <div onClick={() => setVisibleSecond(prev => !prev)} className="flex flex-row items-center">
                                    <h2 className="font-bold text-[24px] my-5">Bagaimana Cara Sewa gedung di grent.com?</h2>
                                    <span className="ml-10 text-[24px]">{visibleSecond ? <icons.AiOutlineMinus /> : <icons.MdOutlineKeyboardArrowDown />}</span>
                                </div>
                                <h4 className={`${visibleSecond ? 'inline' : 'hidden'} text-[20px]`}>Bagaimana cara sewa gedung di grent.com?</h4>
                            </div>
                            <hr className="my-2" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-[90%] items-start min-h-[300px] justify-between">
                    <h1 className="font-bold text-[32px]">Akun</h1>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <hr className="my-2" />
                            <div className="p-5">
                                <div onClick={() => setVisibleFirst(prev => !prev)} className="flex flex-row items-center">
                                    <h2 className="font-bold text-[24px] my-5">Bagaimana Cara Sewa gedung di grent.com?</h2>
                                    <span className="ml-10 text-[24px]">{visibleThird ? <icons.AiOutlineMinus /> : <icons.MdOutlineKeyboardArrowDown />}</span>
                                </div>
                                <h4 className={`${visibleThird ? 'inline' : 'hidden'} text-[20px]`}>Bagaimana cara sewa gedung di grent.com?</h4>
                            </div>
                            <hr className="my-2" />
                        </div>
                        <div className="flex flex-col">
                            <hr className="my-2" />
                            <div className="p-5">
                                <div onClick={() => setVisibleSecond(prev => !prev)} className="flex flex-row items-center">
                                    <h2 className="font-bold text-[24px] my-5">Bagaimana Cara Sewa gedung di grent.com?</h2>
                                    <span className="ml-10 text-[24px]">{visibleFourth ? <icons.AiOutlineMinus /> : <icons.MdOutlineKeyboardArrowDown />}</span>
                                </div>
                                <h4 className={`${visibleFourth ? 'inline' : 'hidden'} text-[20px]`}>Bagaimana cara sewa gedung di grent.com?</h4>
                            </div>
                            <hr className="my-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;