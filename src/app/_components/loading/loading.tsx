import classNames from "classnames";
import { LoadingProps } from "./loading.types";
import { Size } from "../types/size.type";


const sizeClasses: Record<Size, string> = {
    normal: "loading-md",
    tiny: "loading-xs",
    small: "loading-sm",
    large: "loading-lg",
}


export const Loading: React.FC<LoadingProps> = ({
    type = "spinner",
    variant,
    size = "normal",
    className
}: LoadingProps) => {

    const classes = classNames(
        "loading",
        className,
        { [`loading-${type}`]: type },
        { [`${sizeClasses[size]}`]: size },
        { [`loading-${variant}`]: variant },
    )

    return (
        <span className={classes}></span>
    )
}