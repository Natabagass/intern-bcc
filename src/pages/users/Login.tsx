import { useState } from "react";
import axios from "axios";
import { FaRegEyeSlash } from 'react-icons/fa'
import { AiOutlineEye } from 'react-icons/ai'
import Google from '../../assets/icons8-google.svg'
import sideImg from '../../assets/card.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import Button from "../../components/button/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate()
    const [validation, setValidation] = useState('')
    const [loading, setLoading] = useState(false)
    const toggleShow = () => {
        setPasswordShown(!passwordShown);
    }
    const token = localStorage.getItem('auth')
    const [forms, setForms] = useState({
        email: '',
        password: '',
    })

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setLoading(true)
        await axios.post('https://reqres.in/api/login', forms)
            .then(res => {
                localStorage.setItem('auth', res.data.token);    
                navigate('/')
            })
            .catch(err => {
                setValidation(err.response.data.error)
                setLoading(false)
            })
    }
    return (
        <>
            <div className="flex justify-center min-h-screen items-center flex-row">
                <div className="mr-[20px]">
                    <LazyLoadImage
                        alt="Logo"
                        className="w-[500px]"
                        src={sideImg}
                    ></LazyLoadImage>
                </div>
                <div className="h-[610px] w-[500px] bg-[#D9D9D9]">
                    <div className="px-[50px] py-[50px]">
                        <h3 className="font-bold font-inter text-[34px]">Log in</h3>

                        <div className='flex my-5 font-inter flex-col mt-[50px]'>
                            <Label htmlFor="email" className="font-bold text-[24px]">E-mail</Label>
                            <Input
                                value={forms.email}
                                onChange={e => setForms({ ...forms, email: e.target.value })}
                                type="text"
                                required
                                placeholder="E-mail"
                                id='email'
                                className='mt-2'
                            />
                        </div>

                        <div className='flex mt-6 flex-col'>
                            <Label htmlFor='password' className="font-bold text-[24px]">Password</Label>
                            <div className="relative flex items-center">
                                <Input
                                    value={forms.password}
                                    onChange={e => setForms({ ...forms, password: e.target.value })}
                                    type={passwordShown ? "text" : "password"}
                                    required
                                    id='password'
                                    placeholder="Password"
                                    className='mt-2 rounded-lg text-black pl-2 outline-none'
                                />
                                <button onClick={toggleShow} className="cursor-pointer flex items-center">
                                    {!passwordShown ? <FaRegEyeSlash className="absolute right-3 text-[25px] mt-1 pr-1" /> : <AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                                </button>
                            </div>
                        </div>

                        <div className="font-inter">
                            <Button onClick={handleLogin} isLoading={loading} className="p-3 bg-white w-full mt-[50px] text-[14px]" type="submit">Login</Button>
                            <span className="my-2 text-red-500 text-[14px] flex justify-center w-full">{validation}</span>
                            <h1 className="w-full flex justify-center my-[10px] text-[12px] text-[#000000]">or</h1>
                            <div className="relative flex items-center flex-row rounded-lg bg-white w-full justify-center">
                                <LazyLoadImage className="" width={30} src={Google} alt="Google Icon"></LazyLoadImage>
                                <Button className="p-3 text-[14px]" type="submit">Continue With Google</Button>
                            </div>
                        </div>
                        <h2 className="text-[12px] mt-3 font-inter flex justify-center">Doesn't Have Account? &nbsp; <Link to='/signup' className="font-bold">Signup</Link></h2>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Login;