export interface gedungsbyId {
    Nama: string,
    Alamat: string,
    Kecamatan: string,
    Harga: number,
    Kapasitas: string,
    Luas: string,
    Fasilitas: string[],
    Tag: string[],
    Links: [
        {
            ID: number,
            CreatedAt: Date,
            UpdatedAt: Date,
            DeletedAt: null,
            Link: string,
            GedungID: number
        }
    ],
    Aturan: string[]
}