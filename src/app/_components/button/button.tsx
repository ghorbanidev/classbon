import classNames from "classnames";
import { ButtonProps, ButtonShape } from "./button.types";
import { Size } from "../types/size.type";
import { Loading } from "../loading";

const sizeClasses: Record<Size, string> = {
    normal: "",
    tiny: "btn-xs",
    small: "btn-sm",
    large: "btn-lg",
}

const shapeClasses: Record<ButtonShape, string> = {
    default: "",
    wide: "btn-wide",
    full: "btn-block",
    square: "btn-square",
}

export const Button: React.FC<ButtonProps> = ({
    variant,
    size = "normal",
    isDisabled = false,
    isOutline = false,
    shape = "default",
    isLoading = false,
    loadingType = "spinner",
    loadingText = "در حال ارسال درخواست...",
    type = "button",
    isLink = false,
    animatedIcon = false,
    children,
    className,
    ...rest
}: ButtonProps) => {

    const classes = classNames(
        "btn",
        className,
        { "btn-outline": isOutline },
        { "btn-link": isLink },
        { "animated-icon": animatedIcon },
        { "pointer-events-none opacity-80": isLoading },
        { [`btn-${variant}`]: variant },
        { [`${sizeClasses[size]}`]: size },
        { [`${shapeClasses[shape]}`]: shape },
    )

    return (
        <button className={classes} type={type} disabled={isDisabled} {...rest}>
            {isLoading && <Loading type={loadingType} />}
            {isLoading ? loadingText : children}
        </button>
    )
}