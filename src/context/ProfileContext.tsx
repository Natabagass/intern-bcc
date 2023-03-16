import React, { useState, createContext } from "react";
import { Ctx, EditContextType } from "../models/dto/forms/editTypes";

const initial: Ctx = {
    visibleProfile: false,
};

type EditProviderProps = {
    children: React.ReactNode;
};

export const EditContext = createContext<EditContextType>({
    visibleProfile: initial.visibleProfile,
    setVisibleProfile: () => { }
});

export const EditProvider: React.FC<EditProviderProps> = ({ children }) => {
    const [visibleProfile, setVisibleProfile] = useState<Ctx["visibleProfile"]>(initial.visibleProfile)

    return (
        <EditContext.Provider value={{visibleProfile, setVisibleProfile}}>
            {children}
        </EditContext.Provider>
    );
};
