import { useState } from "react";


const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const token = localStorage.getItem('auth')
    const logout = () => {
        localStorage.removeItem('auth');
        window.location.replace('/')
    }

    return (
        <nav className='p-5 bg-slate-400'>
            <div className="flex flex-wrap mx-[50px] items-center justify-between">
                <a href="/">
                    <h1 className="text-[32px] text-white">Grent <span className="text-black">.</span></h1>
                </a>
                <div className="flex flex-row list-none">
                    <li className="mr-5">
                        <a href="/" className={window.location.pathname === '/' ? 'text-white' : 'text-black'}>Home</a>
                    </li>
                    <li className="mr-5">
                        <a href="/graha" className={window.location.pathname === '/graha' ? 'text-white' : 'text-black'}>Graha</a>
                    </li>
                    <li>
                        <a href="/faq" className={window.location.pathname === '/faq' ? 'text-white' : 'text-black'}>FAQ</a>
                    </li>
                </div>
                <div>
                    <ul className="flex flex-row">
                        {
                            token ?
                                <li>
                                    <button onClick={logout} className="p-2 bg-white rounded-lg mr-3 text-slate-500">Logout</button>
                                </li>
                                :
                                <>
                                    <li>
                                        <a className="p-2 bg-white rounded-lg mr-3 text-slate-500" href="/login">Login</a>
                                    </li>
                                    <li>
                                        <a className="p-2 bg-slate-500 rounded-lg mr-3 text-white" href="/Signup">Signup</a>
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