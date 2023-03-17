import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import Button from "../../components/button"
import Input from "../../components/input"
import { PembayaranContext } from "../../context/PembayaranContext"
import { EditContext } from "../../context/ProfileContext"
import AxiosInstance from "../api/AxiosInstance"
import { getProfile } from "../service/profile/getDataProfile"

const UbahProfile = () => {
    const axiosInstance = AxiosInstance()
    const [profil, setProfil] = useState({ email: '', Nama: '', number: '' })
    const [loading, setLoading] = useState(false)
    const [forms, setForms] = useState({
        nama: '',
        email: '',
        number: ''
    })
    
    const { setStep } = useContext(PembayaranContext)
    const { setVisibleProfile } = useContext(EditContext)
    const dataProfile = async () => {
        try {
            const result = await getProfile()
            setProfil(result?.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async () => {
        setLoading(true)
        try {
            await axiosInstance.put('/profile/update', forms)
            setStep(1)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        dataProfile()
    }, [])
    return (
        <>
            <div className="font-inter text-[#1B1D21]">
                <label htmlFor="nama" className="font-bold">Nama</label>
                <Input
                    type="text"
                    id="nama"
                    placeholder={profil.Nama}
                    onChange={(e) => setForms({ ...forms, nama: e.target.value })}
                    className="mt-3 pl-5 p-3  placeholder:text-[12px] sm:placeholder:text-[14px] placeholder:text-black rounded-lg bg-[#FEF8FA]" />
            </div>

            <div className="mt-5">
                <label htmlFor="phone" className="font-bold">No. Telepon</label>
                <Input
                    type="number"
                    placeholder={profil.number}
                    id="phone"
                    onChange={(e) => setForms({ ...forms, number: e.target.value })}
                    className="mt-3 pl-5 p-3 placeholder:text-[12px] sm:placeholder:text-[14px] placeholder:text-black rounded-lg bg-[#FEF8FA]" />
            </div>

            <div className="mt-5">
                <label htmlFor="email" className="font-bold mt-5">Email</label>
                <Input
                    type="text"
                    placeholder={profil.email}
                    id="email"
                    onChange={(e) => setForms({ ...forms, email: e.target.value })}
                    className="mt-3 pl-5 p-3 placeholder:text-[12px] sm:placeholder:text-[14px] placeholder:text-black rounded-lg bg-[#FEF8FA]" />
            </div>

            <div className="w-full justify-end flex-row flex my-5">
                <Button onClick={() => setVisibleProfile(true)} className="p-2 mr-1 sm:mr-4 text-[12px] sm:text-[14px] px-4 text-[#F78CB2] hover:border hover:border-[#F78CB2]">Hapus Akun</Button>
                <Button isLoading={loading} type="submit" onClick={() => handleSubmit()} className="p-2 text-[12px] sm:text-[14px] px-2 sm:px-4 hover:bg-white hover:border hover:text-[#F78CB2] hover:border-[#F78CB2] bg-[#F78CB2] text-white">Simpan perubahan</Button>
            </div>
        </>
    );
}

export default UbahProfile;