import classNames from "classnames";
import { BadgeProps } from "./badge.types";
import { Size } from "../types/size.type";


const sizeClasses: Record<Size, string> = {
    normal: "badge-md",
    tiny: "badge-xs",
    small: "badge-sm",
    large: "badge-lg",
}


export const Badge: React.FC<BadgeProps> = ({
    variant,
    className,
    children,
    size = "tiny"
}) => {

    const calsses = classNames("badge", className, {
        [`badge-${variant}`]: variant,
        [`${sizeClasses[size]}`]: size

    })

    return (
        <span className={calsses}>
            {children}
        </span>
    )
}