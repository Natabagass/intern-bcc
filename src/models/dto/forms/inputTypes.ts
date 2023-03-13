import { ChangeEventHandler, FocusEventHandler} from "react"

export interface Props {
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onBlur?: FocusEventHandler<HTMLInputElement>,
    onFocus?: FocusEventHandler<HTMLInputElement>,
    type: 'text' | 'email' | 'number' | 'password' | 'checkbox' | 'date' | 'radio' | 'time',
    name?: string,
    disabled?: boolean,
    id?: string,
    value?:string,
    required?: true,
    className?: string
}