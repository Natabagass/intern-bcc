import React, { useState, createContext } from "react";
import { FormData, FormContextType } from "../models/dto/forms/formTypes";

const initialFormData: FormData = {
    nama: "",
    tanggal: "",
    keperluan: "",
    nomer: "",
    alamat: "",
};

type FormProviderProps = {
    children: React.ReactNode;
};

export const FormContext = createContext<FormContextType>({
    formData: initialFormData,
    setFormData: () => { },
});

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>(initialFormData);

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};
