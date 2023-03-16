export interface Ctx {
    visibleProfile: boolean,
};

export interface EditContextType {
    visibleProfile: boolean,
    setVisibleProfile: React.Dispatch<React.SetStateAction<Ctx["visibleProfile"]>>,
};
