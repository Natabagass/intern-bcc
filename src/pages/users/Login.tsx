import { useState } from "react";
import sideImg from '../../assets/login image.svg'
import logo from '../../assets/grent.com.svg'
import icon from '../../components/icons/Icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import AxiosInstance from "../../features/api/AxiosInstance";
const axiosInstance = AxiosInstance();
import { Cookies } from 'react-cookie';
const cookies = new Cookies();


const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [validation, setValidation] = useState('')
    const [loading, setLoading] = useState(false)
    const toggleShow = () => {
        setPasswordShown(!passwordShown);
    }
    const [forms, setForms] = useState({
        email: '',
        password: '',
    })

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
                setValidation(err.response.data.Error)
                setLoading(false)
            })
    }
    return (
        <>
            <div className="flex justify-between font-inter text-[#1B1D21] flex-row">
                <div className="mt-20">
                    <a
                        href="/"
                        className="p-3 ml-10 absolute rounded-2xl flex text-[12px] shadow-md flex-row items-center text-[#F78CB2] mr-5 bg-white"
                    ><icon.MdArrowBackIos className="mr-2 text-[16px]" />Kembali ke beranda</a>
                </div>
                <LazyLoadImage
                    alt="Logo"
                    className="w-[50%] h-screen"
                    src={sideImg}
                />
                <div className="flex flex-col items-center justify-around w-full">
                    <LazyLoadImage
                        alt="Logo"
                        className="w-[25%]"
                        src={logo}
                    />
                    <div className="w-[400px] -mt-[100px]">
                        <h3 className="font-bold font-inter text-[48px]">Masuk</h3>

                        <div className='flex w-full font-inter flex-col mt-[30px]'>
                            <Label htmlFor="email" className="font-bold text-[24px]">E-mail</Label>
                            <Input
                                value={forms.email}
                                onChange={e => setForms({ ...forms, email: e.target.value })}
                                type="text"
                                name="email"
                                required
                                placeholder="Masukkan E-mail anda"
                                id='email'
                                className='mt-2 rounded-lg bg-[#F4F7FA]'
                            />
                        </div>

                        <div className='flex w-full mt-6 flex-col'>
                            <Label htmlFor='password' className="font-bold text-[24px]">Password</Label>
                            <div className="relative flex items-center">
                                <Input
                                    value={forms.password}
                                    onChange={e => setForms({ ...forms, password: e.target.value })}
                                    type={passwordShown ? "text" : "password"}
                                    required
                                    id='password'
                                    placeholder="Masukkan kata sandi anda"
                                    className='mt-2 rounded-lg bg-[#F4F7FA] pl-2 outline-none'
                                />
                                <button onClick={toggleShow} className="cursor-pointer flex items-center">
                                    {!passwordShown ? <icon.FaRegEyeSlash className="absolute right-3 text-[25px] mt-1 pr-1" /> : <icon.AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                                </button>
                            </div>
                        </div>

                        <div className="font-inter">
                            <h1><a href="" className="my-3 text-[12px] opacity-[50%] flex justify-end w-full">Lupa kata sandi?</a></h1>
                            <Button onClick={handleLogin} isLoading={loading} className="p-3 bg-[#F78CB2] text-white w-full text-[14px]" type="submit">Masuk</Button>
                            <span className="my-2 text-red-500 text-[13px] flex justify-center w-full">{validation}</span>
                        </div>
                        <h2 className="text-[12px] mt-10 font-inter flex justify-center">Belum mempunyai akun? &nbsp; <Link to='/signup' className="font-bold">Daftar</Link></h2>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Login;