import { useState } from "react";
import axios from "axios";
import {FaRegEyeSlash} from 'react-icons/fa'
import Google from '../../assets/icons8-google.svg'
import sideImg from '../../assets/card.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import Button from "../../components/button/Button";

const Login = () => {
    const [forms, setForms] = useState({
        email: '',
        password: '',
    })

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await axios.post('https://reqres.in/api/login', forms)
            .then(res => {
                console.log(res)
                localStorage.setItem('auth', res.data.token);
                window.location.reload();
            })
            .catch(err => {
                // setValidation(err.response.data)
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
                <div className="px-[50px] py-[50px] w-[500px] bg-[#D9D9D9]">
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
                                type="password"
                                required
                                id='password'
                                placeholder="Password"
                                className='mt-2 rounded-lg text-black pl-2 outline-none'
                            />
                            <FaRegEyeSlash className="absolute right-3 text-[25px] mt-1 pr-1"/>
                        </div>
                    </div>

                    <div className="font-inter">
                        <Button onClick={handleLogin} className="p-3 bg-white w-full mt-[50px] text-[14px]" type="submit">Login</Button>
                        <h1 className="w-full flex justify-center my-[20px] text-[#000000]">or</h1>
                        <div className="relative flex items-center flex-row rounded-lg bg-white w-full justify-center">
                            <LazyLoadImage className="" width={30} src={Google} alt="Google Icon"></LazyLoadImage>
                            <Button className="p-3 text-[14px]" type="submit">Continue With Google</Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}


export default Login;