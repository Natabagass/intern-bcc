export interface Ctx {
    harga: number,
    step: number,
};

export interface PembayaranContextType {
    step: number,
    harga: number,
    setHarga: React.Dispatch<React.SetStateAction<Ctx["harga"]>>
    setStep: React.Dispatch<React.SetStateAction<Ctx["step"]>>;
};
