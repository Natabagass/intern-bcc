import { useContext, useState } from "react";
import { Cookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Button from "../../components/button";
import { rupiahFormatter } from "../../components/formatter/Rupiah";
import Input from "../../components/input";
import { FormContext } from "../../context/FormContext";
import { PembayaranContext } from "../../context/PembayaranContext";
import icons from "../../components/icons";

const BookMobile = () => {
    const { setVisible, setHarga, harga } = useContext(PembayaranContext)
    const cookies = new Cookies();
    const swal = withReactContent(Swal)
    const token = cookies.get('auth')
    const navigate = useNavigate()

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
                    window.location.replace(`/graha/pembayaran/${id}`)
                }
            });
    }
    return (
        <>
            <div className="fixed inline overflow-auto h-full z-10 shadow-lg md:hidden bottom-0 w-full bg-white border border-[#F78CB2] rounded-xl p-5">
                <div className="flex flex-row justify-between">
                    <h1 className="text-[12px] lg:text-[16px] ">Mulai Dari</h1>
                    <button type="button" onClick={() => setVisible(false)} className="lg:hidden flex p-2 text-[#F78CB2] rounded-lg text-[20px]"><icons.RxCrossCircled /></button>
                </div>
                <span className="text-[18px] lg:text-[25px] font-bold">{rupiahFormatter(harga)}</span>
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
        </>
    );
}

export default BookMobile;