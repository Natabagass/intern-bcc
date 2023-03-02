import { useState } from "react";
import styled from "styled-components";

const HoverUnderline = styled.span`
    position: relative;
    display: inline-block;
    &:hover::after {
        content: "";
        display: block;
        height: 1.5px;
        width: 100%;
        background-color: #F78CB2;
        position: absolute;
        bottom: 0;
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
    const token = localStorage.getItem('auth')
    const logout = () => {
        localStorage.removeItem('auth');
        window.location.replace('/')
    }

    return (
        <nav className='p-3 top-0 fixed w-full z-10 bg-white scroll-smooth shadow-xl'>
            <div className="flex flex-wrap mx-[50px] items-center justify-between">
                <a href="/">
                    <h1 className="text-[32px] font-bold font-inter">grent.com</h1>
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
                                <li>
                                    <button onClick={logout} className="p-2 bg-[#F78CB2] hover:bg-[#f379a3] text-white rounded-lg mr-3 px-5">Logout</button>
                                </li>
                                :
                                <>
                                    <li>
                                        <a className="p-2 bg-[#F78CB2] hover:bg-[#f379a3] text-white rounded-lg mr-3 px-5" href="/login">Login</a>
                                    </li>
                                    {/* <li>
                                        <a className="p-2 bg-slate-500 rounded-lg mr-3 text-white" href="/Signup">Signup</a>
                                    </li> */}
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;