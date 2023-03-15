export interface Ctx {
    harga: number,
    step: number,
    visible: boolean,
    totalBiaya: number,
    status: string
};

export interface PembayaranContextType {
    step: number,
    status: string,
    harga: number,
    visible: boolean,
    totalBiaya: number,
    setStatus: React.Dispatch<React.SetStateAction<Ctx["status"]>>,
    setTotalBiaya: React.Dispatch<React.SetStateAction<Ctx["totalBiaya"]>>,
    setVisible: React.Dispatch<React.SetStateAction<Ctx["visible"]>>,
    setHarga: React.Dispatch<React.SetStateAction<Ctx["harga"]>>
    setStep: React.Dispatch<React.SetStateAction<Ctx["step"]>>;
};
