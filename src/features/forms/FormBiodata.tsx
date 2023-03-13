import { useState, useContext, useEffect } from "react";
import Input from "../../components/input";
import { FormContext } from "../../context/FormContext";
import { useParams } from "react-router-dom";
import { gedung } from "../../models/dummy/gedung";
import { rupiahFormatter } from "../../components/formatter/Rupiah";

const Biodata = () => {
    const [harga, setHarga] = useState(0)
    const { id } = useParams()
    const myId = parseInt(id!, 10)
    useEffect(() => {
        gedung.filter(data => {
            if (data.id === myId) {
                setHarga(data.harga)
            }
        })
    }, [])
    const { formData, setFormData } = useContext(FormContext);
    return (
        <div>
            <div>
                <h1>Mulai Dari</h1>
                <span className="text-[20px] lg:text-[25px] font-bold">{rupiahFormatter(harga)}</span>
                <hr className="w-full my-5" />
            </div>
            <label className="font-medium text-[18px] lg:text-[20px]">Biodata</label>
            <div className='flex mb-5 font-inter flex-col mt-[15px]'>
                <label htmlFor="nama" className="text-[14]">Nama</label>
                <Input
                    type="text"
                    disabled
                    required
                    placeholder={formData.nama}
                    id='nama'
                    className='mt-2 rounded-xl bg-[#F4F7FA]'
                />
            </div>

            <div className='flex my-5 font-inter flex-col '>
                <label htmlFor="tanggal" className="text-[14]">Tanggal</label>
                <Input
                    type="text"
                    required
                    disabled
                    placeholder={formData.tanggal}
                    id='tanggal'
                    className='mt-2 rounded-xl bg-[#F4F7FA]'
                />
            </div>

            <div className='flex my-5 font-inter flex-col '>
                <label htmlFor="keperluan" className="text-[14]">Keperluan</label>
                <Input
                    type="text"
                    required
                    disabled
                    placeholder={formData.keperluan}
                    id='keperluan'
                    className='mt-2 rounded-xl bg-[#F4F7FA]'
                />
            </div>

            <div className='flex mt-6 flex-col'>
                <label htmlFor='nomer' className="text-[14]">No HP</label>
                <div className="relative flex items-center">
                    <Input
                        type='number'
                        required
                        id='number'
                        disabled
                        placeholder={formData.nomer}
                        className='mt-2 bg-[#F4F7FA]  rounded-xl pl-2 outline-none'
                    />
                </div>
            </div>

            <div className='flex mt-6 flex-col'>
                <label htmlFor='alamat' className="text-[14]">Alamat</label>
                <div className="relative flex items-cent er">
                    <Input
                        type='text'
                        disabled
                        required
                        id='alamat'
                        placeholder={formData.alamat}
                        className='mt-2 bg-[#F4F7FA] rounded-xl pl-2 outline-none'
                    />
                </div>
            </div>
        </div>
    );
}

export default Biodata;