import { useState } from "react";
import Input from "../../input/Input";
import Label from "../../label/Label";

const Biodata = () => {
    const [forms, setForms] = useState({
        nama: '',
        tanggal: '',
        keperluan: '',
        nomer: '',
        alamat: ''
    })
    return (
        <div>
            <Label className="font-medium text-[20px]">Biodata</Label>
            <div className='flex my-5 font-inter flex-col mt-[30px]'>
                <Label htmlFor="nama" className="text-[14]">Nama</Label>
                <Input
                    value={forms.nama}
                    onChange={e => setForms({ ...forms, nama: e.target.value })}
                    type="text"
                    required
                    placeholder="Masukkan nama anda"
                    id='nama'
                    className='mt-2 rounded-xl bg-[#DEE4EB]'
                />
            </div>

            <div className='flex my-5 font-inter flex-col '>
                <Label htmlFor="tanggal" className="text-[14]">Tanggal</Label>
                <Input
                    value={forms.tanggal}
                    type="text"
                    required
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    placeholder={`Masukkan tanggal sewa`}
                    id='tanggal'
                    className='mt-2 rounded-xl bg-[#DEE4EB]'
                />
            </div>

            <div className='flex my-5 font-inter flex-col '>
                <Label htmlFor="keperluan" className="text-[14]">Keperluan</Label>
                <Input
                    value={forms.keperluan}
                    type="text"
                    required
                    placeholder="Masukkan Keperluan anda"
                    id='keperluan'
                    className='mt-2 rounded-xl bg-[#DEE4EB]'
                />
            </div>

            <div className='flex mt-6 flex-col'>
                <Label htmlFor='nomer' className="text-[14]">No HP</Label>
                <div className="relative flex items-center">
                    <Input
                        value={forms.nomer}
                        type='number'
                        required
                        id='number'
                        placeholder="Masukkan nomer HP anda"
                        className='mt-2 bg-[#DEE4EB]  rounded-xl pl-2 outline-none'
                    />
                </div>
            </div>

            <div className='flex mt-6 flex-col'>
                <Label htmlFor='alamat' className="text-[14]">Alamat</Label>
                <div className="relative flex items-cent er">
                    <Input
                        value={forms.alamat}
                        type='text'
                        required
                        id='alamat'
                        placeholder="Masukkan alamat anda"
                        className='mt-2 bg-[#DEE4EB] rounded-xl pl-2 outline-none'
                    />
                </div>
            </div>
        </div>
    );
}

export default Biodata;