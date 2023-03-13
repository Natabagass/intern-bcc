import logo from '../../assets/image/grent.com.svg'
import styled from "styled-components";
import icons from '../icons';
import { LazyLoadImage } from "react-lazy-load-image-component";
import AxiosInstance from "../../features/api/AxiosInstance";
import { useEffect, useState } from "react";
import { Cookies } from 'react-cookie';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IoLogOutOutline } from 'react-icons/io5'

const HoverUnderline = styled.span`
    position: relative;
    display: inline-block;
    &:hover::after {
        content: "";
        display: block;
        height: 3.5px;
        width: 100%;
        background-color: #F78CB2;
        position: absolute;
        bottom: -25px;
        animation: slide 0.3s ease-in-out forwards;
    }
    @keyframes slide {
        from {
        transform: scaleX(0);
        }
        to {
            transform: scaleX(1);
        }
    }
    `;

const Nav = () => {
    const axiosInstance = AxiosInstance();
    const cookies = new Cookies();
    const token = cookies.get('auth')
    const [isOpen, setIsOpen] = useState(false);
    const [nama, setNama] = useState('')
    const getdata = async () => {
        await axiosInstance.get('/validate')
            .then(res => {
                setNama(res.data.data.Nama)
            })
            .catch(err => {
                
            })
    }

    useEffect(() => {
        getdata()
    }, [token])         

    const logout = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        cookies.remove('auth', { path: '/' })
        window.location.replace('/')
    }

    return (
        <nav className='p-5 top-0 fixed w-full z-10 bg-white scroll-smooth shadow-xl'>
            <div className="flex flex-wrap mx-[30px] sm:mx-[50px] items-center justify-between">
                <a href="/">
                    <LazyLoadImage
                        src={logo}
                        alt="Logo"
                        className="w-[130px] sm:w-[150px] "
                    />
                </a>
                <div className="hidden lg:flex flex-row font-inter list-none">
                    <li className="mr-10">
                        <a href="/" className={window.location.pathname === '/' ? 'text-[#F78CB2] hover:text-[#dd7fa0] transition font-bold' : 'text-[#5a5c61] hover:text-[#F78CB2] hover:font-medium transition'}><HoverUnderline>Home</HoverUnderline></a>
                    </li>
                    <li className="mr-10">
                        <a href="/graha" className={window.location.pathname === '/graha' ? 'text-[#F78CB2] hover:text-[#dd7fa0] transition font-bold' : 'text-[#5a5c61] hover:text-[#F78CB2] hover:font-medium transition'}><HoverUnderline>Graha</HoverUnderline></a>
                    </li>
                    <li>
                        <a href="/faq" className={window.location.pathname === '/faq' ? 'text-[#F78CB2] hover:text-[#dd7fa0] transition font-bold' : 'text-[#5a5c61] hover:text-[#F78CB2] hover:font-medium transition'}><HoverUnderline>FAQ</HoverUnderline></a>
                    </li>
                </div>
                <div>
                    <ul>
                        {
                            token ?
                                <div className="relative">
                                    <button onClick={() => setIsOpen(!isOpen)} className="p-1 bg-white w-full hover:bg-[#f379a3] border hover:text-white border-[#F78CB2] text-[#F78CB2] rounded-lg px-3 flex flex-row items-center">{nama}<MdOutlineKeyboardArrowDown className="text-[20px] ml-1 mt-1" /></button>
                                    {isOpen && (
                                        <div className="absolute mt-5 w-[200%] right-0 top-full bg-white rounded-b-lg shadow-lg z-10">
                                            <ul className='px-5'>
                                                <div className='lg:hidden flex flex-col'>
                                                    <li className='my-2'>
                                                        <a className="text-[#F78CB2] hover:text-[#eb6d99] flex text-[16px] sm:text-[18px] flex-row items-center" href="/">Home</a>
                                                    </li>
                                                    <li className='my-2'>
                                                        <a className="text-[#F78CB2] hover:text-[#eb6d99]   flex text-[16px] sm:text-[18px] flex-row items-center" href="/graha">Graha</a>
                                                    </li>
                                                    <li className='my-2'>
                                                        <a className="text-[#F78CB2] hover:text-[#eb6d99]   flex text-[16px] sm:text-[18px] flex-row items-center" href="/faq">FAQ</a>
                                                    </li>
                                                </div>
                                                <hr className='my-2 lg:hidden flex' />
                                                <li className='my-2'>
                                                    <a href="/profile" className="w-full text-[#F78CB2] flex text-[16px] sm:text-[18px] hover:bg-gray-100">Profile</a>
                                                </li>
                                                <li className='my-2'>
                                                    <button
                                                        className="w-full text-[#F78CB2] flex text-[16px] sm:text-[18px] hover:rounded-b-lg hover:bg-gray-100"
                                                        onClick={logout}
                                                    >
                                                        <span className="flex flex-row justify-start items-center">Logout <IoLogOutOutline className="ml-2 text-[20px] mr-5 mt-1" /></span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                :
                                <>
                                    <div className="lg:hidden flex relative">
                                        <button onClick={() => setIsOpen(!isOpen)} className="p-1 bg-white  hover:bg-[#f379a3] border hover:text-white border-[#F78CB2] text-[#F78CB2] rounded-lg px-5 sm:px-7 flex flex-row items-center"><icons.RxHamburgerMenu /></button>
                                        {isOpen && (
                                            <div className="absolute mt-5 w-[200%] right-0 top-full bg-white rounded-b-lg shadow-lg z-10">
                                                <ul className='px-5'>
                                                    <li className='my-2'>
                                                        <a className="text-[#F78CB2] hover:text-[#eb6d99] flex text-[16px] sm:text-[18px] flex-row items-center" href="/home">Home</a>
                                                    </li>
                                                    <li className='my-2'>
                                                        <a className="text-[#F78CB2] hover:text-[#eb6d99]   flex text-[16px] sm:text-[18px] flex-row items-center" href="/graha">Graha</a>
                                                    </li>
                                                    <li>
                                                        <a className="text-[#F78CB2] hover:text-[#eb6d99]   flex text-[16px] sm:text-[18px] flex-row items-center" href="/faq">FAQ</a>
                                                    </li>
                                                    <hr className='my-2' />
                                                    <li className='my-2'>
                                                        <a className="text-[#F78CB2] hover:text-[#eb6d99]   flex text-[16px] sm:text-[18px] flex-row items-center" href="/signup">Daftar <icons.MdAppRegistration className='text-[18px] sm:text-[22px] ml-4' /></a>
                                                    </li>
                                                    <li className='my-2'>
                                                        <a className="text-[#F78CB2] hover:text-[#eb6d99]   flex text-[16px] sm:text-[18px] flex-row items-center" href="/login">Masuk <icons.BiLogIn className='text-[18px] sm:text-[22px] ml-3' /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    <div className='lg:flex hidden'>
                                        <li>
                                            <a className="p-2 bg-white border-[#F78CB2] border text-[#F78CB2] hover:bg-[#f379a3] hover:text-white rounded-lg mr-3" href="/signup">Daftar</a>
                                        </li>
                                        <li>
                                            <a className="p-2 bg-[#F78CB2] hover:bg-white hover:text-[#F78CB2] hover:border hover:border-[#F78CB2] text-white rounded-lg mr-3 px-5" href="/login">Masuk</a>
                                        </li>
                                    </div>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;