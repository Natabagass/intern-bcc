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
    const toggleShow = () => {
        setPasswordShown(!passwordShown);
    }
    const [forms, setForms] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    })
    return (
        <>
            <div className="flex justify-center min-h-screen items-center flex-row">
                <div className="mr-[20px]">
                    <LazyLoadImage
                        alt="Logo"
                        className="w-[500px] h-[835px]"
                        src={sideImg}
                    ></LazyLoadImage>
                </div>
                <div className="px-[50px] my-[50px] w-[500px] bg-[#D9D9D9]">
                    <div className="py-[50px]">

                        <h3 className="font-bold font-inter text-[34px]">Sign Up</h3>

                        <div className='flex my-5 font-inter flex-col mt-[30px]'>
                            <Label htmlFor="email" className="font-bold text-[24px]">Your Name</Label>
                            <Input
                                value={forms.name}
                                onChange={e => setForms({ ...forms, name: e.target.value })}
                                type="text"
                                required
                                placeholder="Name"
                                id='name'
                                className='mt-2'
                            />
                        </div>

                        <div className='flex my-5 font-inter flex-col '>
                            <Label htmlFor="email" className="font-bold text-[24px]">Phone Number</Label>
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

                        <div className='flex my-5 font-inter flex-col '>
                            <Label htmlFor="phone" className="font-bold text-[24px]">E-mail</Label>
                            <Input
                                value={forms.phone}
                                onChange={e => setForms({ ...forms, phone: e.target.value })}
                                type="text"
                                required
                                placeholder="Phone Number"
                                id='phone'
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
                                <button onClick={toggleShow} className="cursor-pointer flex items-center">
                                    {!passwordShown ? <FaRegEyeSlash className="absolute right-3 text-[25px] mt-1 pr-1" /> : <AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                                </button>
                            </div>
                        </div>

                        <div className="font-inter">
                            <Button className="p-3 bg-white w-full mt-[50px] text-[14px]" type="submit">Sign Up</Button>
                            <h1 className="w-full flex justify-center my-[20px] text-[#000000]">or</h1>
                            <div className="relative flex items-center flex-row rounded-lg bg-white w-full justify-center">
                                <LazyLoadImage className="" width={30} src={Google} alt="Google Icon"></LazyLoadImage>
                                <Button className="p-3 text-[14px]" type="submit">Continue With Google</Button>
                            </div>
                            <h2 className="text-[12px] mt-3 font-inter flex justify-center">Have An Account? &nbsp; <Link to='/' className="font-bold">Login</Link></h2>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Signup;