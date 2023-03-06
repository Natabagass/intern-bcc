import axios from "axios";
import logo from '../../../assets/grent.com.png'
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AxiosInstance from "../../../components/features/api/AxiosInstance";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
const axiosInstance = AxiosInstance()
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import {IoLogOutOutline} from 'react-icons/io5'

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
    const token = Cookies.get('auth')
    const [isOpen, setIsOpen] = useState(false);
    const [nama, setNama] = useState('')
    const getdata = async () => {
        await axiosInstance.get('/validate')
            .then(res => {
                setNama(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getdata()
    }, [token])

    const logout = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await axiosInstance.get('/logout')
            .then(res => {
                console.log(res)
                Cookies.remove('auth')
                window.location.replace('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <nav className='p-5 top-0 fixed w-full z-10 bg-white scroll-smooth shadow-xl'>
            <div className="flex flex-wrap mx-[50px] items-center justify-between">
                <a href="/">
                    <LazyLoadImage
                        src={logo}
                        alt="Logo"
                        className="w-[150px]"
                    />
                </a>
                <div className="flex flex-row font-inter list-none">
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
                    <ul className="flex flex-row">
                        {
                            token ?
                                <div className="relative">
                                    <button onClick={() => setIsOpen(!isOpen)} className="p-1 bg-white w-full hover:bg-[#f379a3] border hover:text-white border-[#F78CB2] text-[#F78CB2] rounded-lg px-3 flex flex-row items-center">{nama}<MdOutlineKeyboardArrowDown className="text-[20px] ml-1 mt-1" /></button>
                                    {isOpen && (
                                        <div className="absolute mt-5 right-0 top-full w-full bg-white rounded-b-lg shadow-lg z-10">
                                            <ul>
                                                <li>
                                                    <a href="" className="block w-full text-[#F78CB2] p-2 hover:bg-gray-100">Profile</a>
                                                </li>
                                                <li>
                                                    <button
                                                        className="block w-full text-[#F78CB2] p-2 hover:rounded-b-lg hover:bg-gray-100"
                                                        onClick={logout}
                                                    >
                                                        <span className="flex flex-row justify-start items-center">Logout <IoLogOutOutline className="ml-2 mr-5 mt-1"/></span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                :
                                <>
                                    <li>
                                        <a className="p-2 bg-white border-[#F78CB2] border text-[#F78CB2] hover:bg-[#f379a3] hover:text-white rounded-lg mr-3" href="/signup">Daftar</a>
                                    </li>
                                    <li>
                                        <a className="p-2 bg-[#F78CB2] hover:bg-white hover:text-[#F78CB2] hover:border hover:border-[#F78CB2] text-white rounded-lg mr-3 px-5" href="/login">masuk</a>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;