import { useState } from "react";


const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const token = localStorage.getItem('auth')
    const logout = () => {
        localStorage.removeItem('auth');
        window.location.replace('/')
    }

    return (
        <nav className='p-7 bg-slate-400'>
            <div className="flex flex-wrap mx-[100px] justify-between">
                <a href="/">
                    <h1>Ini Nama Web</h1>
                </a>
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