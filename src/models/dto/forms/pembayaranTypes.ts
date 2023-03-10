export interface Ctx {
    harga: number,
    step: number,
    visible: boolean
};

export interface PembayaranContextType {
    step: number,
    harga: number,
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<Ctx["visible"]>>,
    setHarga: React.Dispatch<React.SetStateAction<Ctx["harga"]>>
    setStep: React.Dispatch<React.SetStateAction<Ctx["step"]>>;
};
