import { gedungsbyId } from "../data/gedungbyId";

const dataId : gedungsbyId = {
    Nama: '',
    Alamat: '',
    Kecamatan: '',
    Harga: 0,
    Kapasitas: '',
    Luas: '',
    Fasilitas: [],
    Tag: [],
    Links: [
        {
            ID: 0,
            CreatedAt: new Date(),
            UpdatedAt: new Date(),
            DeletedAt: null,
            Link: '',
            GedungID: 0
        }
    ],
    Aturan: []
}

export {dataId}