export interface FormData {
    nama: string;
    tanggal: string;
    keperluan: string;
    nomer: string;
    alamat: string;
};

export interface FormContextType {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};
