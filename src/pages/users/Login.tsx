import { useState } from "react";
import sideImg from '../../assets/image/login image.svg'
import logo from '../../assets/image/grent.com.svg'
import icon from '../../components/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Input from "../../components/input";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import AxiosInstance from "../../features/api/AxiosInstance";
const axiosInstance = AxiosInstance();
import { Cookies } from 'react-cookie';
import Swal from "sweetalert2";
import emailLogo from '../../assets/image/email periksa.svg'
const cookies = new Cookies();


const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [validation, setValidation] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const toggleShow = () => {
        setPasswordShown(!passwordShown);
    }
    const [forms, setForms] = useState({
        email: '',
        password: '',
    })

    const handleSendEmail = async () => {
        const { value: email } = await Swal.fire({
            title: 'Masukkan Email akun',
            input: 'email',
            inputLabel: 'Email',
            inputPlaceholder: 'Masukkan email anda'
        })

        if (email) {
            try {
                console.log(email)
                const res = await axiosInstance.post('/pass-reset', {
                    email: email
                })
                if (res.statusText === 'OK') {
                    Swal.fire({
                        title: 'Periksa Email Anda',
                        text: 'Kami telah mengirimkan password baru pada email yang sudah terdaftar, silakan diperiksa',
                        imageUrl: `${emailLogo}`,
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Check your email!',
                    })
                }
                console.log(res)
            } catch (err) {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Akun Anda tidak ditemukan',
                    text:"Silahkan masukkan email anda lagi"
                })
            }
        }
    }

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setLoading(true)
        await axiosInstance.post('/login', forms)
            .then(res => {
                const token = res.data.data.token
                cookies.set('auth', token, { path: '/' });
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            })
            .catch(err => {
                console.log(err)
                setValidation(err.response.data.Error)
                setError(err.response.data.message)
                setLoading(false)
            })
    }
    return (
        <>
            <div className="flex justify-between font-inter overflow-hidden text-[#1B1D21] flex-row">
                <div className="mt-11 lg:mt-20">
                    <a
                        href="/"
                        className="p-3 ml-10 absolute rounded-2xl hidden lg:flex text-[12px] shadow-md flex-row items-center text-[#F78CB2] mr-5 bg-white"
                    ><icon.MdArrowBackIos className="mr-2 text-[16px]" />Kembali ke beranda</a>
                    <a
                        href="/"
                        className="py-2 px-2 sm:px-3 ml-5 sm:ml-10 absolute rounded-2xl flex lg:hidden shadow-md items-center text-[#F78CB2] bg-white"
                    ><icon.MdArrowBackIos className="ml-2 text-center w-full text-[18px] sm:text-[22px]" /></a>
                </div>
                <div className="hidden lg:inline lg:w-[50%] h-full lg:h-screen">
                    <LazyLoadImage
                        alt="Logo"
                        className="w-full"
                        src={sideImg}
                    />
                </div>
                <div className="flex flex-col my-[50px] lg:my-0 items-center justify-center w-full lg:w-[50%]">
                    <div>
                        <LazyLoadImage
                            alt="Logo"
                            className="w-full mb-0 sm:mb-14 "
                            src={logo}
                        />
                    </div>
                    <div className="w-[80%] sm:w-[60%] mt-8 lg:mt-0">
                        <h3 className="font-bold font-inter text-[24px] lg:text-[36px]">Masuk</h3>

                        <div className='flex w-full font-inter flex-col mt-[30px]'>
                            <label htmlFor="email" className="font-bold text-[20px] lg:text-[24px]">E-mail</label>
                            <Input
                                value={forms.email}
                                onChange={e => setForms({ ...forms, email: e.target.value })}
                                type="text"
                                name="email"
                                required
                                placeholder="Masukkan E-mail anda"
                                id='email'
                                className='mt-2 rounded-lg lg:placeholder:text-[14px] placeholder:text-[12px] bg-[#F4F7FA]'
                            />
                        </div>

                        <div className='flex w-full mt-6 flex-col'>
                            <label htmlFor='password' className="font-bold text-[20px] lg:text-[24px]">Password</label>
                            <div className="relative flex items-center">
                                <Input
                                    value={forms.password}
                                    onChange={e => setForms({ ...forms, password: e.target.value })}
                                    type={passwordShown ? "text" : "password"}
                                    required
                                    id='password'
                                    placeholder="Masukkan kata sandi anda"
                                    className='mt-2 rounded-lg bg-[#F4F7FA] lg:placeholder:text-[14px] placeholder:text-[12px] pl-2 outline-none'
                                />
                                <button onClick={toggleShow} className="cursor-pointer flex items-center">
                                    {!passwordShown ? <icon.FaRegEyeSlash className="absolute right-3 text-[25px] mt-1 pr-1" /> : <icon.AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                                </button>
                            </div>
                            <span className="mt-5 text-red-500 text-[13px] flex justify-center w-full">{error}</span>
                        </div>

                        <div className="font-inter">
                            <h1><button onClick={handleSendEmail} className="my-3 text-[12px] opacity-[50%] flex justify-end w-full">Lupa kata sandi?</button></h1>
                            <Button onClick={handleLogin} isLoading={loading} className="p-2 lg:p-3 bg-[#F78CB2] text-white w-full text-[14px]" type="submit">Masuk</Button>
                            <span className="mt-5 text-red-500 text-[13px] flex justify-center w-full">{validation}</span>
                        </div>
                        <h2 className="text-[12px] mt-5 lg:mt-10 font-inter flex justify-center">Belum mempunyai akun? &nbsp; <Link to='/signup' className="font-bold">Daftar</Link></h2>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Login;