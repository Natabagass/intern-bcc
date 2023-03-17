import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import AxiosInstance from "../api/AxiosInstance";
import icons from "../../components/icons";
import Swal from "sweetalert2";
import { Cookies } from 'react-cookie';


const UbahPwd = () => {
    const cookies = new Cookies();
    const [loading, setLoading] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShownOld, setPasswordShownOld] = useState(false);
    const [confirmPwd, setConfirmPwd] = useState(false);
    const toggleShow = () => {
        setPasswordShown(!passwordShown);
    }
    const toggleShowOld = () => {
        setPasswordShownOld(!passwordShownOld);
    }
    const toggleShowConfirm = () => {
        setConfirmPwd(!confirmPwd);
    }
    const [forms, setForms] = useState({
        old_pass: '',
        new_pass: '',
        confirm: ''
    })
    const axiosInstance = AxiosInstance()

    const handleSubmit = async () => {
        try {
            await axiosInstance.put('change-pass', forms)
            Swal.fire({
                icon: 'success',
                title: 'Silahkan Login ulang',
            }).then((result) => {
                if (result.isConfirmed) {
                    cookies.remove('auth', { path: '/' })
                    window.location.replace('/login')
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className="font-inter text-[#1B1D21]">
                <label htmlFor="passwordLama" className="font-bold">Password Lama</label>
                <div className="relative flex items-center">
                    <Input
                        onChange={e => setForms({ ...forms, old_pass: e.target.value })}
                        type={passwordShownOld ? "text" : "password"}
                        required
                        id='password'
                        placeholder="Masukkan kata sandi lama anda"
                        className='mt-2 rounded-lg bg-[#FEF8FA] lg:placeholder:text-[14px] placeholder:text-[12px] pl-2 outline-none'
                    />
                    <button onClick={toggleShowOld} className="cursor-pointer flex items-center">
                        {!passwordShownOld ? <icons.FaRegEyeSlash className="absolute right-3 text-[20px] sm:text-[25px] mt-1 pr-1" /> : <icons.AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                    </button>
                </div>
            </div>

            <div className="mt-5">
                <label htmlFor="passwordBaru" className="font-bold">Password Baru</label>
                <div className="relative flex items-center">
                    <Input
                        onChange={e => setForms({ ...forms, new_pass: e.target.value })}
                        type={passwordShown ? "text" : "password"}
                        required
                        id='password'
                        placeholder="Masukkan kata sandi baru anda"
                        className='mt-2 rounded-lg bg-[#FEF8FA] sm:placeholder:text-[14px] placeholder:text-[12px] pl-2 outline-none'
                    />
                    <button onClick={toggleShow} className="cursor-pointer flex items-center">
                        {!passwordShown ? <icons.FaRegEyeSlash className="absolute right-3 text-[20px] sm:text-[25px] mt-1 pr-1" /> : <icons.AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                    </button>
                </div>
            </div>

            <div className="mt-5">
                <label htmlFor="confirmPass" className="font-bold mt-5">Konfirmasi Password</label>
                <div className="relative flex items-center">
                    <Input
                        onChange={e => setForms({ ...forms, confirm: e.target.value })}
                        type={confirmPwd ? "text" : "password"}
                        required
                        id='password'
                        placeholder="Masukkan kata ulang sandi baru anda"
                        className='mt-2 rounded-lg bg-[#FEF8FA] sm:placeholder:text-[14px] placeholder:text-[12px] pl-2 outline-none'
                    />
                    <button onClick={toggleShowConfirm} className="cursor-pointer flex items-center">
                        {!confirmPwd ? <icons.FaRegEyeSlash className="absolute right-3 text-[20px] sm:text-[25px] mt-1 pr-1" /> : <icons.AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                    </button>
                </div>
            </div>

            <div className="w-full justify-end flex-row flex my-5">
                <Button isLoading={loading} type="submit" onClick={() => handleSubmit()} className="p-2 text-[14px] px-4 hover:bg-white hover:border hover:border-[#F78CB2] hover:text-[#F78CB2] bg-[#F78CB2] text-white">Submit</Button>
            </div>
        </>
    );
}

export default UbahPwd;