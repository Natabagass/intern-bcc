import {AiOutlineInstagram} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'

const Footer = () => {
    return (
        <>
            <footer className="bottom-0 min-h-fit bg-[#FEF8FA]">
                <div className="flex flex-row mx-[70px] justify-between font-inter">
                    <div className="flex flex-col my-[50px]">
                        <h1 className="text-[32px] font-bold">Grent.com</h1>
                        <h3 className="mt-10">© Dibuat oleh Kelompok 13</h3>
                    </div>

                    <div className="flex flex-col my-[50px]">
                        <h1 className="text-[32px] font-bold">Layanan Kami</h1>
                        <ul className="mt-5">
                            <li>
                                <a href="/" className='hover:text-[#F898BA]'>Home</a>
                            </li>
                            <li className="mt-3">
                                <a href="/graha" className='hover:text-[#F898BA]'>Graha</a>
                            </li>
                            <li className="mt-3">
                                <a href="/faq" className='hover:text-[#F898BA]'>FAQ</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col my-[50px]">
                        <h1 className="text-[32px] font-bold">Hubungi Kami</h1>
                        <ul className="mt-5">
                            <li className="mt-3">
                                <span>0812345679812</span>
                            </li>
                            <li className="mt-3">
                                <span>grent@mail.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col my-[50px]">
                        <h1 className="text-[32px] font-bold">Sosial Media</h1>
                        <ul className="mt-5">
                            <li>
                                <span>grent@mail.com</span>
                            </li>
                            <li className='flex flex-row mt-3'>
                                <a className='bg-[#F898BA] cursor-pointer mr-3 rounded-full text-[25px] text-white hover:bg-slate-200 hover:text-[#F898BA] p-2'><AiOutlineInstagram/></a>
                                <a className='bg-[#F898BA] cursor-pointer rounded-full text-[25px] hover:bg-slate-200 hover:text-[#F898BA] text-white p-2'><HiOutlineMail/></a>
                            </li>
                        </ul>

                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;