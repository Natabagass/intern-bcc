import logo from '../../assets/image/grent.com.svg'
import icon from '../../components/icons';
import sideImg from '../../assets/image/Daftar image.svg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../components/button";
import Input from "../../components/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from "../../features/api/AxiosInstance";
const axiosInstance = AxiosInstance();

const Signup = () => {
    const navigate = useNavigate()
    const [passwordShown, setPasswordShown] = useState(false);
    const [validation, setValidation] = useState('')
    const [loading, setLoading] = useState(false)
    const [checked, setChecked] = useState(false)
    const [passwordRepeatShown, setPasswordRepeatShown] = useState(false);
    const toggleShow = () => {
        setPasswordShown(!passwordShown);
    }
    const toggleShowRepeat = () => {
        setPasswordRepeatShown(!passwordRepeatShown)
    }

    const handleRegister = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setLoading(true)
        await axiosInstance.post('/register', forms)
            .then(res => {
                setLoading(true)
                setTimeout(() => {
                    window.location.replace('/login')
                }, 1000)
            })
            .catch(err => {
                console.log(err)
                setValidation(err.response.data.message)
                setLoading(false)
            })
    }

    const [forms, setForms] = useState({
        nama: '',
        email: '',
        number: '',
        password: '',
        passconfirm: ''
    })
    return (
        <>
            <div className="flex justify-center text-[#1B1D21] flex-row">
                <div className="mt-11 lg:mt-20">
                    <a
                        href="/"
                        className="p-3 ml-10 absolute rounded-2xl hidden lg:flex text-[12px] shadow-md flex-row items-center text-[#F78CB2] mr-5 bg-white"
                    ><icon.MdArrowBackIos className="mr-2 text-[16px]" />Kembali ke beranda</a>
                    <a
                        href="/"
                        className="py-2 px-2 sm:px-3 -ml-5 sm:-ml-10 md:-ml-20 absolute rounded-2xl flex lg:hidden shadow-md items-center text-[#F78CB2] bg-white"
                    ><icon.MdArrowBackIos className="ml-2 text-center w-full text-[18px] sm:text-[22px]" /></a>
                </div>
                <LazyLoadImage
                    alt="Logo"
                    className="hidden lg:inline w-[65%] h-full"
                    src={sideImg}
                />
                <div className="flex flex-col items-center my-[50px] justify-center w-[70%]">
                    <LazyLoadImage
                        alt="Logo"
                        className="w-[40%] mb-0 sm:mb-14 sm:w-[25%]"
                        src={logo}
                    />
                    <div className="w-full lg:w-[60%] mt-14 sm:mt-8 ">
                        <h3 className="font-bold font-inter text-[32px] xl:text-[48px]">Daftar</h3>

                        <div className='flex my-5 font-inter flex-col mt-[30px]'>
                            <label htmlFor="nama" className="font-bold text-[20px] xl:text-[24px]">Nama</label>
                            <Input
                                value={forms.nama}
                                onChange={e => setForms({ ...forms, nama: e.target.value })}
                                type="text"
                                required
                                placeholder="Masukkan nama anda"
                                id='nama'
                                className='mt-2 xl:placeholder:text-[16px] placeholder:text-[12px] rounded-lg bg-[#F4F7FA]'
                            />
                        </div>

                        <div className='flex my-5 font-inter flex-col '>
                            <label htmlFor="number" className="font-bold text-[20px] xl:text-[24px]">Nomor HP</label>
                            <Input
                                value={forms.number}
                                onChange={e => setForms({ ...forms, number: e.target.value })}
                                type="number"
                                required
                                placeholder="Masukkan nomor HP anda"
                                id='number'
                                className='mt-2 xl:placeholder:text-[16px] placeholder:text-[12px] rounded-lg bg-[#F4F7FA]'
                            />
                        </div>

                        <div className='flex my-5 font-inter flex-col '>
                            <label htmlFor="email" className="font-bold text-[20px] xl:text-[24px]">E-mail</label>
                            <Input
                                value={forms.email}
                                onChange={e => setForms({ ...forms, email: e.target.value })}
                                type="text"
                                required
                                placeholder="Masukkan E-mail anda"
                                id='email'
                                className='mt-2 xl:placeholder:text-[16px] placeholder:text-[12px] rounded-lg bg-[#F4F7FA]'
                            />
                        </div>

                        <div className='flex mt-6 flex-col'>
                            <label htmlFor='password' className="font-bold text-[20px] xl:text-[24px]">Kata Sandi</label>
                            <div className="relative flex items-center">
                                <Input
                                    value={forms.password}
                                    onChange={e => setForms({ ...forms, password: e.target.value })}
                                    type={passwordShown ? "text" : "password"}
                                    required
                                    id='password'
                                    placeholder="Masukkan kata sandi anda"
                                    className='mt-2 xl:placeholder:text-[16px] placeholder:text-[12px] bg-[#F4F7FA] rounded-lg pl-2 outline-none'
                                />
                                <button onClick={toggleShow} className="cursor-pointer flex items-center">
                                    {!passwordShown ? <icon.FaRegEyeSlash className="absolute right-3 text-[25px] mt-1 pr-1" /> : <icon.AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                                </button>
                            </div>
                        </div>

                        <div className='flex mt-6 flex-col'>
                            <label htmlFor='passconfirm' className="font-bold text-[20px] xl:text-[24px]">Ulangi Kata Sandi</label>
                            <div className="relative flex items-cent er">
                                <Input
                                    value={forms.passconfirm}
                                    onChange={e => setForms({ ...forms, passconfirm: e.target.value })}
                                    type={passwordRepeatShown ? "text" : "password"}
                                    required
                                    id='passconfirm'
                                    placeholder="Masukkan kata sandi anda"
                                    className='mt-2 xl:placeholder:text-[16px] placeholder:text-[12px] bg-[#F4F7FA] rounded-lg pl-2 outline-none'
                                />
                                <button onClick={toggleShowRepeat} className="cursor-pointer flex items-center">
                                    {!passwordRepeatShown ? <icon.FaRegEyeSlash className="absolute right-3 text-[25px] mt-1 pr-1" /> : <icon.AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex w-full my-[20px] flex-row">
                            <input
                                type="checkbox"
                                required
                                disabled={checked ? true : false}
                                onClick={() => { setChecked(true) }}
                                id="checklist"
                                className="mr-2"
                            />
                            <h1 className="text-[12px] font-inter">Saya menyetujui semua <span className="font-bold"> Ketentuan, Kebijakan Privasi</span></h1>
                        </div>

                        <div className="font-inter">
                            <Button onClick={handleRegister} isLoading={loading} className="p-2 lg:p-3 bg-[#F78CB2] text-white w-full text-[14px] disabled:opacity-[50%]" disabled={!checked ? true : false} type="submit">Daftar</Button>
                            <span className="my-2 text-red-500 text-[13px] flex justify-center w-full">{validation}</span>
                            <h2 className="text-[12px] mt-5 lg:mt-10 font-inter flex justify-center">Sudah mempunyai akun? &nbsp; <Link to='/login' className="font-bold">Masuk</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;