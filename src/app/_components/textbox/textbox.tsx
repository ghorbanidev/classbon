import classNames from "classnames";
import { Size } from "../types/size.type";
import { TextboxProps } from "./textbox.types";
import { forwardRef } from "react";

const sizeClasses: Record<Size, string> = {
    tiny: "textbox-xs",
    small: "textbox-sm",
    normal: "textbox-md",
    large: "textbox-lg",
};

// eslint-disable-next-line react/display-name
export const Textbox: React.FC<TextboxProps> = forwardRef<HTMLInputElement, TextboxProps>(({
    variant = "ghost",
    type = "text",
    className,
    size = "normal",
    ...rest
}, ref) => {
    const classes = classNames(
        "textbox",
        "w-full",
        className,
        { [`textbox-${variant}`]: variant },
        { [`${sizeClasses[size]}`]: size }
    );
    return <input ref={ref} type={type} className={classes} {...rest} />;
});


export default Textbox;