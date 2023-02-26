import { Props } from "../../models/dto/forms/buttonTypes";

const Button = ({
    type,
    children,
    onClick,
    className,
    isLoading
}: Props) => {
    return ( 
        <button
            type={type}
            onClick={onClick}
            className={`rounded-lg flex items-center justify-center p-2 transition duration-100 ${className}`}
        >{isLoading ? 'Loading' : `${children}`}</button>
    );
}

export default Button;