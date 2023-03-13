import { useState } from "react";
import Nav from "../../components/partials/Nav"
import icons from "../../components/icons";

const Faq = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <Nav />
            <div className="my-[100px] mx-[70px]">
                <h1 className="font-bold text-[20px]">Frequently Asked Question</h1>

                <div className="flex flex-row w-[80%] items-center justify-between mt-[50px]">
                    <h1 className="font-bold text-[32px]">Pertanyaan Umum</h1>
                    <div className="flex flex-col">
                        <hr className="my-2" />
                        <div className="p-5">
                            <div onClick={() => setVisible(true)} className="flex flex-row items-center">
                                <h2 className="font-bold text-[24px]">Bagaimana Cara Sewa gedung di grent.com?</h2>
                                <span className="ml-10 text-[24px]"><icons.MdOutlineKeyboardArrowDown /></span>
                            </div>
                            <h4 className={`${visible ? 'visible' : 'invisible'} text-[20px] my-2`}>Bagaimana cara sewa gedung di grent.com?</h4>
                        </div>
                        <hr className="my-2" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;