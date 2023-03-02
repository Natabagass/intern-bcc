import { FaRegEyeSlash } from "react-icons/fa";
import Google from '../../assets/icons8-google.svg'
import sideImg from '../../assets/card.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const Signup = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordRepeatShown, setPasswordRepeatShown] = useState(false);
    const toggleShow = () => {
        setPasswordShown(!passwordShown);
    }
    const toggleShowRepeat = () => {
        setPasswordRepeatShown(!passwordRepeatShown)
    }
    const [forms, setForms] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        passwordRepeat: ''
    })
    return (
        <>
            <div className="flex justify-center min-h-screen items-center flex-row">
                <div className="mr-[20px]">
                    <LazyLoadImage
                        alt="Logo"
                        className="w-[500px] h-[850px]"
                        src={sideImg}
                    ></LazyLoadImage>
                </div>
                <div className="h-[850px] my-[70px] w-[500px] bg-[#D9D9D9]">
                    <div className=" px-[50px] py-[50px]">
                        <h3 className="font-bold font-inter text-[34px]">Daftar</h3>

                        <div className='flex my-5 font-inter flex-col mt-[30px]'>
                            <Label htmlFor="name" className="font-bold text-[24px]">Nama</Label>
                            <Input
                                value={forms.name}
                                onChange={e => setForms({ ...forms, name: e.target.value })}
                                type="text"
                                required
                                placeholder="Masukkan nama anda"
                                id='name'
                                className='mt-2'
                            />
                        </div>

                        <div className='flex my-5 font-inter flex-col '>
                            <Label htmlFor="phone" className="font-bold text-[24px]">Nomor HP</Label>
                            <Input
                                value={forms.phone}
                                onChange={e => setForms({ ...forms, phone: e.target.value })}
                                type="text"
                                required
                                placeholder="Masukkan nomor HP anda"
                                id='phone'
                                className='mt-2'
                            />
                        </div>

                        <div className='flex my-5 font-inter flex-col '>
                            <Label htmlFor="email" className="font-bold text-[24px]">E-mail</Label>
                            <Input
                                value={forms.email}
                                onChange={e => setForms({ ...forms, email: e.target.value })}
                                type="text"
                                required
                                placeholder="Masukkan E-mail anda"
                                id='email'
                                className='mt-2'
                            />
                        </div>

                        <div className='flex mt-6 flex-col'>
                            <Label htmlFor='password' className="font-bold text-[24px]">Kata Sandi</Label>
                            <div className="relative flex items-center">
                                <Input
                                    value={forms.password}
                                    onChange={e => setForms({ ...forms, password: e.target.value })}
                                    type={passwordShown ? "text" : "password"}
                                    required
                                    id='password'
                                    placeholder="Masukkan kata sandi anda"
                                    className='mt-2 rounded-lg text-black pl-2 outline-none'
                                />
                                <button onClick={toggleShow} className="cursor-pointer flex items-center">
                                    {!passwordShown ? <FaRegEyeSlash className="absolute right-3 text-[25px] mt-1 pr-1" /> : <AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                                </button>
                            </div>
                        </div>

                        <div className='flex mt-6 flex-col'>
                            <Label htmlFor='passwordRepeat' className="font-bold text-[24px]">Ulangi Kata Sandi</Label>
                            <div className="relative flex items-center">
                                <Input
                                    value={forms.passwordRepeat}
                                    onChange={e => setForms({ ...forms, passwordRepeat: e.target.value })}
                                    type={passwordRepeatShown ? "text" : "password"}
                                    required
                                    id='passwordRepeat'
                                    placeholder="Masukkan kata sandi anda"
                                    className='mt-2 rounded-lg text-black pl-2 outline-none'
                                />
                                <button onClick={toggleShowRepeat} className="cursor-pointer flex items-center">
                                    {!passwordRepeatShown ? <FaRegEyeSlash className="absolute right-3 text-[25px] mt-1 pr-1" /> : <AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex w-full my-[20px] flex-row">
                            <input
                                type="checkbox"
                                required
                                id="checklist"
                                className="mr-2"
                            />
                            <h1 className="text-[12px] font-inter">Saya menyetujui semua <span className="font-bold"> Ketentuan, Kebijakan Privasi</span></h1>
                        </div>

                        <div className="font-inter">
                            <Button className="p-3 bg-white w-full text-[14px]" type="submit">Sign Up</Button>
                            <h2 className="text-[12px] mt-3 font-inter flex justify-center">Sudah mempunyai akun? &nbsp; <Link to='/login' className="font-bold">Masuk</Link></h2>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Signup;