export interface Ctx {
    harga: number,
    step: number,
    visible: boolean,
    totalBiaya: number
};

export interface PembayaranContextType {
    step: number,
    harga: number,
    visible: boolean,
    totalBiaya: number,
    setTotalBiaya: React.Dispatch<React.SetStateAction<Ctx["totalBiaya"]>>,
    setVisible: React.Dispatch<React.SetStateAction<Ctx["visible"]>>,
    setHarga: React.Dispatch<React.SetStateAction<Ctx["harga"]>>
    setStep: React.Dispatch<React.SetStateAction<Ctx["step"]>>;
};
