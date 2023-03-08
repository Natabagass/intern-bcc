import React, { useState, createContext } from "react";
import { Ctx, PembayaranContextType } from "../models/dto/forms/pembayaranTypes";

const initial: Ctx = {
    harga: 0,
    step: 1
};

type PembayaranProviderProps = {
    children: React.ReactNode;
};

export const PembayaranContext = createContext<PembayaranContextType>({
    step: initial.step,
    harga: initial.harga,
    setStep: () => { },
    setHarga: () => { },
});

export const PembayaranProvider: React.FC<PembayaranProviderProps> = ({ children }) => {
    const [step, setStep] = useState<Ctx["step"]>(initial.step);
    const [harga, setHarga] = useState<Ctx["harga"]>(initial.harga)

    return (
        <PembayaranContext.Provider value={{ setStep, harga, setHarga, step }}>
            {children}
        </PembayaranContext.Provider>
    );
};