import { Props } from "../../models/dto/forms/labelTypes";

const Label = ({
    htmlFor,
    children,
    className
}: Props) => {
    return (
        <>
            <label htmlFor={htmlFor} className={className}>{children}</label>
        </>
    );
}

export default Label;