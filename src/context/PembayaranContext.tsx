import React, { useState, createContext } from "react";
import { Ctx, PembayaranContextType } from "../models/dto/forms/pembayaranTypes";

const initial: Ctx = {
    harga: 0,
    step: 1,
    visible: false
};

type PembayaranProviderProps = {
    children: React.ReactNode;
};

export const PembayaranContext = createContext<PembayaranContextType>({
    step: initial.step,
    visible: initial.visible,
    harga: initial.harga,
    setStep: () => { },
    setHarga: () => { },
    setVisible: () => { }
});

export const PembayaranProvider: React.FC<PembayaranProviderProps> = ({ children }) => {
    const [step, setStep] = useState<Ctx["step"]>(initial.step);
    const [harga, setHarga] = useState<Ctx["harga"]>(initial.harga)
    const [visible, setVisible] = useState<Ctx["visible"]>(initial.visible)

    return (
        <PembayaranContext.Provider value={{ setStep, harga, visible, setVisible, setHarga, step }}>
            {children}
        </PembayaranContext.Provider>
    );
};
