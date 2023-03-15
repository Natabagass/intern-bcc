import { useContext, useEffect, useState } from "react";
import Footer from "../../../components/partials/Footer";
import Nav from "../../../components/partials/Nav";
import { getProfile } from "../../../features/service/profile/getDataProfile";
import icons from "../../../components/icons";
import { Cookies } from 'react-cookie';
import { PembayaranContext } from "../../../context/PembayaranContext";
import Button from "../../../components/button";
import AkunSaya from "../../../features/profile/akunSaya";
import UbahProfile from "../../../features/profile/ubahProfile";
import History from "./History";

const Profile = () => {
    const [profil, setProfil] = useState({ email: '', Nama: '', number: '', password: '' })
    const { visible, setVisible, step, setStep } = useContext(PembayaranContext)
    const cookies = new Cookies();
    const logout = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        cookies.remove('auth', { path: '/' })
        window.location.replace('/')
    }
    const dataProfile = async () => {
        try {
            const result = await getProfile()
            setProfil(result?.data.data)
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
                    <button type="button" onClick={() => setVisible(true)} className="lg:hidden flex p-2 text-[#F78CB2] rounded-lg border border-[#F78CB2]"><icons.RxHamburgerMenu /></button>
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
                                <h1 onClick={() => setStep(1)} className="p-3 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white">Akun Saya</h1>
                                <h3 onClick={() => setStep(3)} className="p-3 my-5 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white">Riwayat Transaksi</h3>
                                <h3 onClick={logout} className='my-5 p-3 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white'>Keluar</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col shadow-lg w-full lg:w-[70%]">
                        <div className="mx-[30px] mt-5">
                            <div className="flex flex-row w-full justify-between">
                                <h1 className="font-bold text-[28px]">{step === 1 ? 'Akun Saya' : 'Ubah Profile' ? step === 3 ? 'Riwayat Transaksi' : 'Akun Saya' : ''}</h1>
                                <Button onClick={() => setStep(2)} className={`${step === 1 ? 'inline bg-[#F78CB2] text-white text-[14px] rounded-xl' : 'hidden text-white'}}`}>Ubah Profil</Button>
                            </div>
                            <hr className="my-3" />

                            {step === 1 ? <AkunSaya /> : <UbahProfile /> ? step === 3 ? <History /> : <AkunSaya /> : ''}
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
                        <h1 onClick={() => setStep(1)} className="p-3 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white">Akun Saya</h1>
                        <h3 onClick={() => setStep(3)} className="p-3 my-5 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white">Riwayat Transaksi</h3>
                        <h3 onClick={logout} className='my-5 p-3 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white'>Keluar</h3>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Profile;