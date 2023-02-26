import { MouseEventHandler } from "react";

export interface Props {
    type?: 'submit' | 'button',
    onClick?: MouseEventHandler<HTMLButtonElement>,
    isLoading? : boolean,
    className?: string,
    children?: string
}