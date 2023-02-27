import { Props } from "../../models/dto/forms/buttonTypes";
import Loader from "../loader/Loader";

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
        >{isLoading ? <Loader/> : children}</button>
    );
}

export default Button;