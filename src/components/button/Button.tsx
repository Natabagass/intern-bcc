import { Props } from "../../models/dto/forms/buttonTypes";
import Loader from "../loader/Loader";

const Button = ({
    type,
    id,
    children,
    onClick,
    className,
    disabled,
    isLoading,
}: Props) => {
    return ( 
        <button
            type={type}
            id={id}
            disabled={disabled}
            onClick={onClick}
            className={`rounded-lg flex items-center justify-center p-2 transition duration-100 ${className}`}
        >{isLoading ? <Loader/> : children}</button>
    );
}

export default Button;