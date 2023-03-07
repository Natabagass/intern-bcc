import { ChangeEventHandler, MouseEventHandler } from "react";

export interface Props {
    id?: string,
    type?: 'submit' | 'button',
    onClick?: MouseEventHandler<HTMLButtonElement>,
    isLoading? : boolean,
    className?: string,
    children?: string,
    disabled?: boolean,
}