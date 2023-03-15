import { useEffect, useState } from "react";
import icon from '../../components/icons';
import Button from "../../components/button";
import Input from "../../components/input";
import Swal from 'sweetalert2'
import { gedung } from '../../models/dummy/gedung'
import { useNavigate, useParams } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import { Cookies } from 'react-cookie';
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { rupiahFormatter } from "../../components/formatterRupiah";
import { PembayaranContext } from "../../context/PembayaranContext";
import AxiosInstance from "../api/AxiosInstance";
import { gedungsbyId } from "../../models/dto/data/gedungbyId";
import { dataId } from "../../models/defaultValue/byIdValue";

const Keterangan = () => {
    const axiosInstance = AxiosInstance()
    const [show, setShow] = useState(false)
    const { id } = useParams()
    const myId = parseInt(id!, 10)
    const { formData, setFormData } = useContext(FormContext);
    const [validation, setValidation] = useState('')
    const cookies = new Cookies();
    const swal = withReactContent(Swal)
    const [dataGedung, setDataGedung] = useState<gedungsbyId>(dataId)
    const token = cookies.get('auth')
    const navigate = useNavigate()

    const getGedungbyId = async () => {
        try {
            const res = await axiosInstance.get(`/gedungs/${myId}`)
            setDataGedung(res?.data.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getGedungbyId()
    }, [])

    const handleSubmit = async () => {
        await axiosInstance.post(`/booking/${myId}`, formData)
            .then(res => {
                console.log(res)
                window.location.replace(`/graha/pembayaran/${myId}`)
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
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col p-5 font-inter w-full md:w-[70%]">
                        <div className="flex flex-row justify-between">
                            <h1 className="font-inter font-bold text-[28px] lg:text-[32px]">{dataGedung.Nama}</h1>
                        </div>
                        <h3 className="text-[14px] lg:text-[18px]">{dataGedung.Alamat}</h3>
                        <h3 className="mt-2 opacity-[70%] text-[13px] lg:text-[16px] flex flex-row items-center"><span className="mr-2"><icon.GrLocation /></span>{dataGedung.Kecamatan}</h3>
                        <div className="flex flex-row items-center mt-5">
                            <div>
                                <ul>
                                    <li className="flex flex-row"
                                    >
                                        {dataGedung.Tag.map(data => {
                                            return <h3 className={`${data === 'Gathering' ? 'lg:p-3 p-2 text-[14px] lg:text-[16px] bg-[#88ADF1] text-white rounded-lg' 
                                            : data === 'Wisuda' ? 'lg:p-3 p-2 text-[14px] lg:text-[16px] bg-[#F78CB2] text-white rounded-lg' 
                                            : data === 'Seminar' ? 'lg:p-3 p-2 text-[14px] lg:text-[16px] bg-[#F79C8C] text-white rounded-lg'
                                            : data === 'Konser' ? 'lg:p-3 p-2 text-[14px] lg:text-[16px] bg-[#baf78c] text-white rounded-lg'
                                            : data === 'Pameran' ? 'lg:p-3 p-2 text-[14px] lg:text-[16px] bg-[#8cf5f7] text-white rounded-lg'
                                            : data === 'Pernikahan' ? 'lg:p-3 p-2 text-[14px] lg:text-[16px] bg-[#c98cf7] text-white rounded-lg': ''} mr-3`}>{data}</h3>
                                        })}
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <hr className="w-full mt-10" />
                        <div className="mt-[30px]">
                            <h1 className="font-bold text-[24px] lg:text-[28px] mt-5">Fasilitas</h1>
                            <div>
                                <ul>
                                    <li className="flex flex-col ml-3">
                                        {dataGedung.Fasilitas.map(data => {
                                            return <h3 className="flex flex-row items-center font-medium text-[16px]"><icon.FaCircle className="text-[5px] mr-3" />{data}</h3>
                                        })}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr className="w-full mt-10" />
                        <div className="mt-10">
                            <h1 className="font-bold text-[24px] lg:text-[28px]">Spesifikasi Luas</h1>
                            <div className="flex flex-row items-center">
                                <span className="font-bold ml-3"><icon.FaCircle className="text-[5px] mr-3" /></span>
                                <h3>{dataGedung.Luas}</h3>
                            </div>
                        </div>

                        <hr className="w-full mt-10" />
                        <div className="mt-10">
                            <h1 className="font-bold text-[24px] lg:text-[28px] mt-5">Kapasitas</h1>
                            <div className="flex flex-row items-center">
                                <span className="font-bold ml-3"><icon.FaCircle className="text-[5px] mr-3" /></span>
                                <h3 className="font-medium text-[16px]">{dataGedung.Kapasitas}</h3>
                            </div>
                        </div>

                        <hr className="w-full mt-10" />
                        <div className="mt-10">
                            <h1 className="font-bold text-[24px] lg:text-[28px]">Aturan</h1>

                            <div>
                                <ul>
                                    <li className="flex flex-col ml-3">
                                        {dataGedung.Aturan.map(data => {
                                            return <h3 className="flex flex-row items-center font-medium text-[16px]"><icon.FaCircle className="text-[5px] mr-3" />{data}</h3>
                                        })}
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='w-[30%] ml-5 md:inline hidden'>
                        <div className="top-24 bg-white shadow-md sticky rounded-xl p-5">
                            <h1 className="text-[12px] lg:text-[16px] ">Mulai Dari</h1>
                            <span className="text-[18px] lg:text-[25px] font-bold">{rupiahFormatter(dataGedung.Harga)}</span>
                            <a
                                href="https://wa.me/6275156144979"
                                target='_blank'
                                className="mt-7 p-2 flex justify-center text-[14px] lg:text-[16px] rounded-lg w-full text-[#F78CB2] bg-white border border-[#F78CB2]"
                            >Tanya Pemilik</a>

                            <div className={show ? 'my-5' : 'hidden'}>
                                <label className="font-medium text-[20px]">Isikan Biodata</label>
                                <div className='flex my-5 font-inter flex-col mt-[30px]'>
                                    <label htmlFor="nama" className="text-[14]">Nama</label>
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
                                    <label htmlFor="tanggal" className="text-[14]">Tanggal</label>
                                    <Input
                                        value={formData.tanggal}
                                        onChange={(e) => { setFormData({ ...formData, tanggal: e.target.value }) }}
                                        type="date"
                                        required
                                        placeholder={`Masukkan tanggal sewa`}
                                        id='tanggal'
                                        className='mt-2 rounded-xl placeholder:text-[12px] lg:placeholder:text-[16px] bg-[#DEE4EB]'
                                    />
                                </div>

                                <div className='flex my-5 font-inter flex-col '>
                                    <label htmlFor="keperluan" className="text-[14]">Keperluan</label>
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
                                    <label htmlFor='nomer' className="text-[14]">No HP</label>
                                    <div className="relative flex items-center">
                                        <Input
                                            value={formData.nomor}
                                            onChange={(e) => { setFormData({ ...formData, nomor: e.target.value }) }}
                                            type='number'
                                            required
                                            id='number'
                                            placeholder="Masukkan nomer HP anda"
                                            className='mt-2 bg-[#DEE4EB] placeholder:text-[12px] lg:placeholder:text-[16px] rounded-xl pl-2 outline-none'
                                        />
                                    </div>
                                </div>

                                <div className='flex mt-6 flex-col'>
                                    <label htmlFor='alamat' className="text-[14]">Alamat</label>
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
                                    <label htmlFor='fasilitas' className="text-[14]">Fasilitas</label>
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
            </div>
        </>
    );
}


export default Keterangan;