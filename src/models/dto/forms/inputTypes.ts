import { ChangeEventHandler } from "react"

export interface Props {
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>,
    type: 'text' | 'email' | 'password' | 'checkbox' | 'date',
    name?: string,
    id?: string,
    value?:string,
    required?: true,
    className?: string
}