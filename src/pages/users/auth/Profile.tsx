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
import Input from "../../../components/input";
import AxiosInstance from "../../../features/api/AxiosInstance";
import Swal from "sweetalert2";
import { EditContext } from "../../../context/ProfileContext";
import UbahPwd from "../../../features/profile/ubahPassword";

const Profile = () => {
    const axiosInstance = AxiosInstance()
    const [passwordShown, setPasswordShown] = useState(false);
    const toggleShow = () => {
        setPasswordShown(!passwordShown);
    }
    const [loading, setLoading] = useState(false)
    const [profil, setProfil] = useState({ email: '', Nama: '', number: '', password: '' })
    const [pwd, setPwd] = useState('')
    const { step, setStep, setVisible, visible } = useContext(PembayaranContext)
    const { visibleProfile } = useContext(EditContext)
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

    const handleDelete = async () => {
        setLoading(true)
        try {
            await axiosInstance.delete('/delete-account', {
                data: {
                    password: pwd
                }
            })
            Swal.fire({
                icon: 'success',
                title: 'Delete Account Berhasil',
            }).then((result) => {
                if (result.isConfirmed) {
                    cookies.remove('auth', { path: '/' })
                    window.location.replace('/')
                }
            })
        } catch (err) {
            setLoading(false)
            console.log(err)
        }
    }

    useEffect(() => {
        dataProfile()
    }, [])
    return (
        <>
            <Nav />
            <div className="my-[100px] font-inter text-[#1B1D21] mx-[30px] md:mx-[70px]">
                <div className="flex flex-row justify-between">
                    <a href="/profile" className="text-[14px] sm:text-[20px] font-bold">Akun</a>
                    <button type="button" onClick={() => setVisible(true)} className="lg:hidden flex p-2 text-[#F78CB2] rounded-lg border border-[#F78CB2]"><icons.RxHamburgerMenu /></button>
                </div>
                <div className="flex flex-row mt-8">
                    <div className='lg:inline hidden w-[30%]'>
                        <div className="flex flex-col sticky top-24 p-5 mr-10 shadow-md">
                            <div className="flex flex-row items-center">
                                <icons.CgProfile className="mr-3 text-[25px] mt-1" />
                                <h1 className="font-bold text-[20px] sm:text-[28px]">{profil.Nama}</h1>
                            </div>
                            <hr className="my-3" />
                            <div className="flex-col">
                                <h1 onClick={() => setStep(1)} className="p-3 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white">Akun Saya</h1>
                                <h3 onClick={() => setStep(3)} className="p-3 my-5 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white">Riwayat Transaksi</h3>
                                <h3 onClick={logout} className='my-5 p-3 hover:bg-[#F78CB2] hover:rounded-xl opacity-[50%] hover:opacity-100 text-black hover:text-white'>Keluar</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  w-full lg:w-[70%]">
                        <div className="flex flex-col shadow-lg">
                            <div className="mx-[30px] mt-5">
                                <div className="flex flex-row w-full justify-between">
                                    <h1 className="font-bold text-[20px] sm:text-[28px]">{step === 1 ? 'Akun Saya' : step === 2 ? 'Ubah Profile' : step === 3 ? 'Riwayat Transaksi' : step === 4 ? 'Ubah Password' : 'Akun Saya'}</h1>
                                    <div className="flex flex-row items-center">
                                        <button onClick={() => setStep(1)} className={`${step === 2 ? 'flex items-center text-[10px] sm:text-[14px] mr-3 sm:mr-5 cursor-pointer text-[#F78CB2] border border-[#F78CB2] hover:bg-[#F78CB2] hover:text-white p-2 rounded-lg' : 'hidden'}`}><icons.MdKeyboardArrowLeft className="text-[20px] mr-2" />Kembali</button>
                                        <button onClick={() => setStep(2)} className={`${step === 4 ? 'flex items-center text-[10px] sm:text-[14px] mr-5 cursor-pointer text-[#F78CB2] border border-[#F78CB2] hover:bg-[#F78CB2] hover:text-white p-2 rounded-lg' : 'hidden'}`}><icons.MdKeyboardArrowLeft className="text-[20px] mr-2" />Kembali</button>
                                        <button onClick={() => setStep(4)} className={`${step === 2 ? 'flex bg-[#F78CB2] hover:bg-white text-[10px] hover:border hover:text-[#F78CB2] hover:border-[#F78CB2] sm:text-[14px] p-2 rounded-lg text-white' : 'hidden'}`}>Ubah Kata Sandi</button>
                                    </div>
                                    <Button onClick={() => {setStep(2)}} className={`${step === 1 ? 'inline bg-[#F78CB2] text-white text-[14px] hover:bg-white hover:border hover:border-[#F78CB2] hover:text-[#F78CB2] rounded-xl' : 'hidden text-white'}}`}>Ubah Profil</Button>
                                </div>
                                <hr className="my-3" />
                                {step === 1 ? <AkunSaya /> : step === 2 ? <UbahProfile /> : step === 3 ? <History /> : step === 4 ? <UbahPwd/> : <AkunSaya/>}
                            </div>
                        </div>
                        <div className={`${step === 2 && visibleProfile ? 'flex flex-col p-[30px] shadow-lg mt-8' : 'hidden'}`}>
                            <h1 className="font-bold text-[20px] sm:text-[24px]">Delete Account</h1>
                            <div className="mt-5">
                                <label htmlFor="pass" className="text-[14px] sm:text-[16px] font-bold">Password Confirmation</label>
                                <div className="relative flex flex-col items-center">
                                    <Input
                                        type={passwordShown ? "text" : "password"}
                                        id="pass"
                                        placeholder="Masukkan password anda"
                                        onChange={(e) => setPwd(e.target.value)}
                                        className="mt-3 pl-5 p-3 placeholder:text-[12px] sm:placeholder:text-[14px] rounded-lg bg-[#FEF8FA]" />
                                    <button onClick={toggleShow} className="cursor-pointer flex items-center">
                                        {!passwordShown ? <icons.FaRegEyeSlash className="absolute right-3 -mt-10 text-[25px] pr-1" /> : <icons.AiOutlineEye className="absolute right-3 text-[25px] -mt-10 pr-1" />}
                                    </button>
                                </div>
                                <div className="w-full mt-3  justify-end flex">
                                    <Button onClick={handleDelete} className=" text-white text-[12px]  sm:text-[14px] bg-red-400">Delete</Button>
                                </div>
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
                            <h1 className="font-bold text-[20px] sm:text-[28px]">{profil.Nama}</h1>
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