import { Props } from "../../models/dto/forms/inputTypes";

const Input = ({
    type,
    placeholder,
    name,
    onChange,
    onFocus,
    onBlur,
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
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                type={type} 
                name={name}
                required={required}
                id={id} 
                className={`p-3 text-[14px] w-full text-black pl-4 outline-none placeholder:text-[14px] ${className}`}
                />
        </div>
    );
}


export default Input;