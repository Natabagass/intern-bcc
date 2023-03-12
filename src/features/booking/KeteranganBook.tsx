import { useState } from "react";
import icon from '../../components/icons/Icons';
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Swal from 'sweetalert2'
import Label from "../../components/label/Label";
import { gedung } from '../../models/dummy/gedung'
import { useNavigate, useParams } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import { Cookies } from 'react-cookie';
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { rupiahFormatter } from "../../components/formatter/Rupiah";
import { PembayaranContext } from "../../context/PembayaranContext";
import AxiosInstance from "../api/AxiosInstance";

const Keterangan = () => {
    const axiosInstance = AxiosInstance()
    const { setVisible, setHarga, harga } = useContext(PembayaranContext)
    const cookies = new Cookies();
    const swal = withReactContent(Swal)
    const token = cookies.get('auth')
    const navigate = useNavigate()

    const handleSubmit = async () => {
        await axiosInstance.post(`/booking/${id}`, formData)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const showSignInModal = () => {
        return swal.fire({
            title: 'Apakah kamu mau masuk terlebih dahulu?',
            showCancelButton: true,
            confirmButtonText: 'Masuk',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login');
            } else if (result.isDenied) {
                swal.fire('Kembali ke page', '', 'info');
            }
        });
    }
    const showValidationError = (message: string) => {
        return swal.fire({
            title: message,
            confirmButtonText: 'Kembali'
        });
    }
    const showConfirmationDialog = (message: string) => {
        return swal.fire({
            title: message,
            confirmButtonText: 'Benar',
            showCancelButton: true,
            icon: 'info'
        });
    }
    const [show, setShow] = useState(false)
    const { id } = useParams()
    const myId = parseInt(id!, 10)
    const { formData, setFormData } = useContext(FormContext);

    const buttonFunct = () => {
        if (!token) return showSignInModal();
        setShow(true);
        if (!show) return;
        const isFormDataEmpty = Object.values(formData).every((value) => value === '');
        if (isFormDataEmpty) return showValidationError('Lengkapi dulu data yang diinput');

        showConfirmationDialog('Data yang sudah diinput apakah benar?')
            .then((result) => {
                if (result.isConfirmed) {
                    handleSubmit()
                }
            });
    }
    return (
        <>
            <div className="mt-[20px]">
                {
                    gedung.filter(data => {
                        if (data.id === myId) {
                            return data.id
                        }
                    }).map((sub, index) => {
                        setHarga(sub.harga)
                        return (
                            <>
                                <div key={index} className="flex flex-row justify-between ">
                                    <div className="flex flex-col p-5 font-inter w-full md:w-[70%]">
                                        <div className="flex flex-row justify-between">
                                            <h1 className="font-inter font-bold text-[28px] lg:text-[32px]">{sub.name}</h1>

                                        </div>
                                        <h3 className="text-[14px] lg:text-[18px]">{sub.alamat}</h3>
                                        <h3 className="mt-2 opacity-[70%] text-[13px] lg:text-[16px] flex flex-row items-center"><span className="mr-2"><icon.GrLocation /></span>{sub.kecamatan}</h3>
                                        <div className="flex flex-row items-center mt-5">
                                            {
                                                sub.tag.map((tag, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <ul>
                                                                <li className="mr-3">
                                                                    <h1
                                                                        className={
                                                                            `${tag.tipe === 'konser' ?
                                                                                'lg:p-3 p-2 text-[14px] lg:text-[16px] bg-[#88ADF1] text-white rounded-lg' : `${tag.tipe === 'pernikahan' ?
                                                                                    'lg:p-3 p-2 text-[14px] lg:text-[16px] bg-[#F78CB2] text-white rounded-lg' : 'lg:p-3 p-2 text-[14px] lg:text-[16px] bg-[#F79C8C] text-white rounded-lg'}`}`}
                                                                    >{tag.tipe}</h1>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <hr className="w-full mt-10" />
                                        <div className="mt-[30px]">
                                            <h1 className="font-bold text-[24px] lg:text-[28px] mt-5">Fasilitas</h1>
                                            {
                                                sub.fasilitas.map((fasil, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <ul>
                                                                <li className="flex flex-row items-center mr-5">
                                                                    <span className="font-bold ml-3"><icon.FaCircle className="text-[5px] mr-3" /></span>{fasil.barang}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        <hr className="w-full mt-10" />
                                        <div className="mt-10">
                                            <h1 className="font-bold text-[24px] lg:text-[28px]">Spesifikasi Luas</h1>
                                            <div className="flex flex-row items-center">
                                                <span className="font-bold ml-3"><icon.FaCircle className="text-[5px] mr-3" /></span>
                                                <h3>{sub.Luas}</h3>
                                            </div>
                                        </div>

                                        <hr className="w-full mt-10" />
                                        <div className="mt-10">
                                            <h1 className="font-bold text-[24px] lg:text-[28px] mt-5">Kapasitas</h1>
                                            <div className="flex flex-row items-center">
                                                <span className="font-bold ml-3"><icon.FaCircle className="text-[5px] mr-3" /></span>
                                                <h3 className="font-medium text-[16px]">{sub.kapasitas}</h3>
                                            </div>
                                        </div>

                                        <hr className="w-full mt-10" />
                                        <div className="mt-10">
                                            <h1 className="font-bold text-[24px] lg:text-[28px]">Aturan</h1>
                                            {
                                                sub.aturan.map((aturan, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <ul>
                                                                <li className="flex flex-row items-center mr-5">
                                                                    <span className="font-bold ml-3"><icon.FaCircle className="text-[5px] mr-3" /></span>{aturan.barang}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='w-[30%] ml-5 md:inline hidden'>
                                        <div className="top-24 bg-white shadow-md sticky rounded-xl p-5">
                                            <h1 className="text-[12px] lg:text-[16px] ">Mulai Dari</h1>
                                            <span className="text-[18px] lg:text-[25px] font-bold">{rupiahFormatter(sub.harga)}</span>
                                            <a
                                                href="https://wa.me/6275156144979"
                                                target='_blank'
                                                className="mt-7 p-2 flex justify-center text-[14px] lg:text-[16px] rounded-lg w-full text-[#F78CB2] bg-white border border-[#F78CB2]"
                                            >Tanya Pemilik</a>

                                            <div className={show ? 'my-5' : 'hidden'}>
                                                <Label className="font-medium text-[20px]">Isikan Biodata</Label>
                                                <div className='flex my-5 font-inter flex-col mt-[30px]'>
                                                    <Label htmlFor="nama" className="text-[14]">Nama</Label>
                                                    <Input
                                                        value={formData.nama}
                                                        onChange={(e) => { setFormData({ ...formData, nama: e.target.value }) }}
                                                        type="text"
                                                        required
                                                        placeholder="Masukkan nama anda"
                                                        id='nama'
                                                        className='mt-2 rounded-xl placeholder:text-[12px] lg:placeholder:text-[16px] bg-[#DEE4EB]'
                                                    />
                                                </div>

                                                <div className='flex my-5 font-inter flex-col '>
                                                    <Label htmlFor="tanggal" className="text-[14]">Tanggal</Label>
                                                    <Input
                                                        value={formData.tanggal}
                                                        onChange={(e) => { setFormData({ ...formData, tanggal: e.target.value }) }}
                                                        type="text"
                                                        required
                                                        onFocus={(e) => (e.target.type = "date")}
                                                        onBlur={(e) => (e.target.type = "text")}
                                                        placeholder={`Masukkan tanggal sewa`}
                                                        id='tanggal'
                                                        className='mt-2 rounded-xl placeholder:text-[12px] lg:placeholder:text-[16px] bg-[#DEE4EB]'
                                                    />
                                                </div>

                                                <div className='flex my-5 font-inter flex-col '>
                                                    <Label htmlFor="keperluan" className="text-[14]">Keperluan</Label>
                                                    <Input
                                                        value={formData.keperluan}
                                                        onChange={(e) => { setFormData({ ...formData, keperluan: e.target.value }) }}
                                                        type="text"
                                                        required
                                                        placeholder="Masukkan Keperluan anda"
                                                        id='keperluan'
                                                        className='mt-2 rounded-xl placeholder:text-[12px] lg:placeholder:text-[16px] bg-[#DEE4EB]'
                                                    />
                                                </div>

                                                <div className='flex mt-6 flex-col'>
                                                    <Label htmlFor='nomer' className="text-[14]">No HP</Label>
                                                    <div className="relative flex items-center">
                                                        <Input
                                                            value={formData.nomer}
                                                            onChange={(e) => { setFormData({ ...formData, nomer: e.target.value }) }}
                                                            type='number'
                                                            required
                                                            id='number'
                                                            placeholder="Masukkan nomer HP anda"
                                                            className='mt-2 bg-[#DEE4EB] placeholder:text-[12px] lg:placeholder:text-[16px] rounded-xl pl-2 outline-none'
                                                        />
                                                    </div>
                                                </div>

                                                <div className='flex mt-6 flex-col'>
                                                    <Label htmlFor='alamat' className="text-[14]">Alamat</Label>
                                                    <div className="relative flex items-cent er">
                                                        <Input
                                                            value={formData.alamat}
                                                            onChange={(e) => { setFormData({ ...formData, alamat: e.target.value }) }}
                                                            type='text'
                                                            required
                                                            id='alamat'
                                                            placeholder="Masukkan alamat anda"
                                                            className='mt-2 bg-[#DEE4EB] placeholder:text-[12px] lg:placeholder:text-[16px] rounded-xl pl-2 outline-none'
                                                        />
                                                    </div>
                                                </div>

                                                <div className='flex mt-6 flex-col'>
                                                    <Label htmlFor='fasilitas' className="text-[14]">Fasilitas</Label>
                                                    <div className="relative flex items-cent er">
                                                        <Input
                                                            value={formData.fasilitas}
                                                            onChange={(e) => { setFormData({ ...formData, fasilitas: e.target.value }) }}
                                                            type='text'
                                                            required
                                                            id='fasilitas'
                                                            placeholder="Masukkan fasilitas yang ingin anda sewakan"
                                                            className='mt-2 bg-[#DEE4EB] placeholder:text-[12px] lg:placeholder:text-[16px] rounded-xl pl-2 outline-none'
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <Button
                                                type="submit"
                                                className="mt-3 w-full text-white bg-[#F78CB2] text-[14px] lg:text-[16px] hover:bg-[#f379a3]"
                                                children="Ajukan Sewa"
                                                onClick={() => buttonFunct()}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}


export default Keterangan;