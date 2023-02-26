import { Props } from "../../models/dto/forms/inputTypes";

const Input = ({
    type,
    placeholder,
    name,
    onChange,
    id,
    value,
    required,
    className
}: Props) => {
    return ( 
        <div className="flex items-center w-full">
            <input 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={type} 
                name={name}
                required={required}
                id={id} 
                className={`rounded-md p-3 text-[14px] w-full text-black pl-4 outline-none placeholder:text-[14px] ${className}`}
                />
        </div>
    );
}


export default Input;