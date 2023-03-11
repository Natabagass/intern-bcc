import { useContext, useEffect, useState } from "react";
import Footer from "../../../components/partials/Footer";
import Nav from "../../../components/partials/Nav";
import { getProfile } from "../../../features/service/profile/getDataProfile";
import icons from "../../../components/icons/Icons";
import { Cookies } from 'react-cookie';
import Label from "../../../components/label/Label";
import { PembayaranContext } from "../../../context/PembayaranContext";
import Button from "../../../components/button/Button";

const Profile = () => {
    const [profil, setProfil] = useState({ Email: '', Nama: '', Number: '', Password: '' })
    const { visible, setVisible } = useContext(PembayaranContext)
    const cookies = new Cookies();
    const logout = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        cookies.remove('auth', { path: '/' })
        window.location.replace('/')
    }
    const dataProfile = async () => {
        try {
            const result = await getProfile()
            console.log(result)
            setProfil(result?.data.data)
            console.log(profil)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        dataProfile()
    }, [])
    return (
        <>
            <Nav />

            <div className="my-[100px] font-inter text-[#1B1D21] mx-[70px]">
                <div className="flex flex-row justify-between">
                    <a href="/profile" className="text-[20px] font-bold">Akun</a>
                    <button type="button" onClick={() => setVisible(true)} className="flex p-2 text-[#F78CB2] rounded-lg border border-[#F78CB2]"><icons.RxHamburgerMenu/></button>
                </div>
                <div className="flex flex-row mt-8">
                    <div className='lg:inline hidden w-[30%]'>
                        <div className="flex flex-col sticky top-24 p-5 mr-10 shadow-md">
                            <div className="flex flex-row items-center">
                                <icons.CgProfile className="mr-3 text-[25px] mt-1" />
                                <h1 className="font-bold text-[28px]">{profil.Nama}</h1>
                            </div>
                            <hr className="my-3" />
                            <div className="flex-col">
                                <h1 className="p-3 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white">Akun Saya</h1>
                                <h3 onClick={logout} className='my-5 p-3 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white'>Keluar</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col shadow-lg w-full lg:w-[70%]">
                        <div className="mx-[30px] mt-5">
                            <h1 className="font-bold text-[28px]">Akun Saya</h1>
                            <hr className="my-3" />

                            <div>
                                <Label htmlFor="nama" className="font-bold">Nama</Label>
                                <h1 id="nama" className="mt-3 pl-5 p-3 rounded-lg bg-[#FEF8FA]">{profil.Nama}</h1>
                            </div>

                            <div className="mt-5">
                                <Label htmlFor="phone" className="font-bold">No. Telepon</Label>
                                <h1 id="phone" className="mt-3 pl-5 p-3 rounded-lg bg-[#FEF8FA]">{profil.Number}</h1>
                            </div>

                            <div className="mt-5">
                                <Label htmlFor="email" className="font-bold mt-5">Email</Label>
                                <h1 id="Email" className=" mt-3 pl-5 p-3 rounded-lg bg-[#FEF8FA]">{profil.Email}</h1>
                            </div>

                            <div className="mt-5 mb-8 flex flex-col">
                                <Label htmlFor="pwd" className="font-bold mt-5">Password</Label>
                                <input id="pwd" value={profil.Password} type="password" disabled className="mt-3 pl-5 p-3 rounded-lg bg-[#FEF8FA]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${!visible ? 'invisible' : 'visible'} fixed bottom-0 z-50 bg-white inline w-full lg:hidden`}>
                <div className="flex flex-col sticky top-24 p-5 shadow-md">
                    <div className="flex flex-row items-center">
                        <icons.CgProfile className="mr-3 text-[25px] mt-1" />
                        <div className="items-center justify-between w-full flex">
                            <h1 className="font-bold text-[28px]">{profil.Nama}</h1>
                            <button onClick={() => setVisible(false)}><icons.RxCrossCircled className="text-[24px] lg:hidden flex mr-5 text-[#F78CB2] mt-1" /></button>
                        </div>
                    </div>
                    <hr className="my-3" />
                    <div className="flex-col">
                        <a href="/profile" className="p-3 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white">Akun Saya</a>
                        <h3 onClick={logout} className='my-5 p-3 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white'>Keluar</h3>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Profile;