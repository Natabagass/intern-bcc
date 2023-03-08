export interface Ctx {
    harga: number,
    step: number,
};

export interface PembayaranContextType {
    step: Ctx,
    harga: Ctx,
    setHarga: React.Dispatch<React.SetStateAction<Ctx>>
    setStep: React.Dispatch<React.SetStateAction<Ctx>>;
};
