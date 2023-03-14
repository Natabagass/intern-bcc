import { useContext, useEffect, useState } from "react"
import Button from "../../components/button"
import { PembayaranContext } from "../../context/PembayaranContext"
import { getProfile } from "../service/profile/getDataProfile"

const UbahProfile = () => {
    const [profil, setProfil] = useState({ email: '', Nama: '', number: '', password: '' })
    const { visible, setVisible, step, setStep } = useContext(PembayaranContext)
    const dataProfile = async () => {
        try {
            const result = await getProfile()
            setProfil(result?.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        dataProfile()
    }, [])
    return (
        <>
            <div>
                <label htmlFor="nama" className="font-bold">Nama</label>
                <h1 id="nama" className="mt-3 pl-5 p-3 rounded-lg bg-[#FEF8FA]">{profil.Nama}</h1>
            </div>

            <div className="mt-5">
                <label htmlFor="phone" className="font-bold">No. Telepon</label>
                <h1 id="phone" className="mt-3 pl-5 p-3 rounded-lg bg-[#FEF8FA]">{profil.number}</h1>
            </div>

            <div className="mt-5">
                <label htmlFor="email" className="font-bold mt-5">Email</label>
                <h1 id="Email" className=" mt-3 pl-5 p-3 rounded-lg bg-[#FEF8FA]">{profil.email}</h1>
            </div>

            <div className="mt-5 mb-8 flex flex-col">
                <label htmlFor="pwd" className="font-bold mt-5">Password</label>
                <input id="pwd" value={profil.password} type="password" disabled className="mt-3 pl-5 p-3 rounded-lg bg-[#FEF8FA]" />
            </div>

            <div className="w-full justify-end flex-row flex my-5">
                <Button onClick={() => setStep(1)} className="p-2 bg-blue-400 text-white mr-5">Kembali</Button>
                <Button className="p-2 bg-red-400 text-white">Delete Account</Button>
            </div>
        </>
    );
}

export default UbahProfile;