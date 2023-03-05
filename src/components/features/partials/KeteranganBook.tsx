import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import Button from "../../button/Button";
import Input from "../../input/Input";
import Swal from 'sweetalert2'
import Label from "../../label/Label";
import { gedung } from '../../../models/dummy/gedung'
import { GrLocation } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";



const Keterangan = () => {
    const notLoggedin = withReactContent(Swal)
    const [show, setShow] = useState(false)
    const token = localStorage.getItem('auth')
    const navigate = useNavigate()
    const {id} = useParams()
    const myId = parseInt(id!, 10)
    const [forms, setForms] = useState({
        nama: '',
        tanggal: '',
        keperluan: '',
        nomer: '',
        alamat: ''
    })
    return (
        <>
            <div className="mt-[20px]">
                {
                    gedung.filter(data => {
                        if (data.id === myId) {
                            return data.id
                        }
                    }).map((sub) => {
                        return (
                            <>
                                <div className="flex flex-row justify-between ">
                                    <div className="flex flex-col p-5 font-inter w-[75%]">
                                        <h1 className="font-inter font-bold text-[32px]">{sub.name}</h1>
                                        <h3 className="text-[18px]">{sub.alamat}</h3>
                                        <h3 className="mt-2 opacity-[70%] flex flex-row items-center"><span className="mr-2"><GrLocation /></span>{sub.kecamatan}</h3>
                                        <div className="flex flex-row items-center mt-5">
                                            {
                                                sub.tag.map((tag) => {
                                                    return (
                                                        <div>
                                                            <ul>
                                                                <li className="mr-3">
                                                                    <h1
                                                                        className={
                                                                            `${tag.tipe === 'konser' ?
                                                                                'p-3 bg-[#88ADF1] text-white rounded-lg' : `${tag.tipe === 'pernikahan' ?
                                                                                    'p-3 bg-[#F78CB2] text-white rounded-lg' : 'p-3 bg-[#F79C8C] text-white rounded-lg'}`}`}
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
                                            <h1 className="font-bold text-[32px] mt-5">Fasilitas</h1>
                                            {
                                                sub.fasilitas.map((fasil) => {
                                                    return (
                                                        <div>
                                                            <ul>
                                                                <li className="flex flex-row items-center mr-5">
                                                                    <span className="font-bold ml-3"><FaCircle className="text-[5px] mr-3" /></span>{fasil.barang}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        <hr className="w-full mt-10" />
                                        <div className="mt-10">
                                            <h1 className="font-bold text-[20px]">Spesifikasi Luas</h1>
                                            <div className="flex flex-row items-center">
                                                <span className="font-bold ml-3"><FaCircle className="text-[5px] mr-3" /></span>
                                                <h3>{sub.Luas}</h3>
                                            </div>
                                        </div>

                                        <hr className="w-full mt-10" />
                                        <div className="mt-10">
                                            <h1 className="font-bold text-[20px] mt-5">Kapasitas</h1>
                                            <div className="flex flex-row items-center">
                                                <span className="font-bold ml-3"><FaCircle className="text-[5px] mr-3" /></span>
                                                <h3 className="font-medium text-[16px]">{sub.kapasitas}</h3>
                                            </div>
                                        </div>

                                        <hr className="w-full mt-10" />
                                        <div className="mt-10">
                                            <h1 className="font-bold text-[20px]">Aturan</h1>
                                            {
                                                sub.aturan.map((aturan) => {
                                                    return (
                                                        <div>
                                                            <ul>
                                                                <li className="flex flex-row items-center mr-5">
                                                                    <span className="font-bold ml-3"><FaCircle className="text-[5px] mr-3" /></span>{aturan.barang}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='w-[25%] ml-5'>
                                        <div className="top-24 bg-white shadow-md sticky rounded-xl p-5">
                                            <h1 className="text-[16px] ">Mulai Dari</h1>
                                            <h3 className="font-bold text-[25px]">{sub.harga}</h3>

                                            <a
                                                href="https://wa.me/6275156144979"
                                                target='_blank'
                                                className="mt-7 p-2 flex justify-center rounded-lg w-full text-[#F78CB2] bg-white border border-[#F78CB2]"
                                            >Tanya Pemilik</a>

                                            <div className={show ? 'my-5' : 'hidden'}>
                                                <Label className="font-medium text-[20px]">Isikan Biodata</Label>
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
                                                        onChange={e => setForms({ ...forms, tanggal: e.target.value })}
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
                                                        onChange={e => setForms({ ...forms, keperluan: e.target.value })}
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
                                                            onChange={e => setForms({ ...forms, nomer: e.target.value })}
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
                                                            onChange={e => setForms({ ...forms, alamat: e.target.value })}
                                                            type='text'
                                                            required
                                                            id='alamat'
                                                            placeholder="Masukkan alamat anda"
                                                            className='mt-2 bg-[#DEE4EB] rounded-xl pl-2 outline-none'
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <Button
                                                type="submit"
                                                className="mt-3 w-full text-white bg-[#F78CB2] hover:bg-[#f379a3]"
                                                children="Ajukan Sewa"
                                                onClick={() => {
                                                    if (show) {
                                                        navigate('/')
                                                    } else {
                                                        if (token) {
                                                            setShow(true)
                                                        } else {
                                                            notLoggedin.fire({
                                                                title: 'Apakah kamu mau masuk terlebih dahulu?',
                                                                showCancelButton: true,
                                                                confirmButtonText: 'Masuk',
                                                            }).then((result) => {
                                                                if (result.isConfirmed) {
                                                                    navigate('/login')
                                                                } else if (result.isDenied) {
                                                                    Swal.fire('Kembali ke page', '', 'info')
                                                                }
                                                            })
                                                        }
                                                    }
                                                }}
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