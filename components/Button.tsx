"use client";
import React from "react";
import cn from "./commons";
import Image from "next/image";

/* ------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------*/
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    iconUrl?: string;
    variant?: "primary" | "secondary" | "outline" | "ghost" | "toggle";
    size?: "xs" | "sm" | "md" | "lg";
    fullWidth?: boolean;
    /** shows a little spinner and disables the control  */
    loading?: boolean;
}

const sizeMap = {
    xs: "px-2 py-1 text-sm",
    sm: "px-4 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
} satisfies Record<NonNullable<ButtonProps["size"]>, string>;

const variantMap = {
    primary:
        "bg-primary text-white border-transparent hover:bg-primary/90 disabled:bg-primary/50",
    secondary:
        "bg-success text-white border-transparent hover:bg-success/90 disabled:bg-success/50",
    outline:
        "bg-transparent text-text border-outline hover:bg-outline/10 disabled:opacity-60",
    ghost:
        "bg-transparent text-text hover:bg-text/5 disabled:opacity-60",
    toggle:
        "bg-primary-container text-black border-transparent hover:bg-primary/90 disabled:bg-primary/50",
} satisfies Record<NonNullable<ButtonProps["variant"]>, string>;

export const Button: React.FC<ButtonProps> = ({
                                                  label,
                                                  iconUrl,
                                                  size = "md",
                                                  variant = "primary",
                                                  fullWidth,
                                                  loading,
                                                  disabled,
                                                  className,
                                                  children,
                                                  ...rest
                                              }) => {
    const isDisabled = disabled || loading;

    return (
        <button
            {...rest}
            disabled={isDisabled}
            className={cn(
                "hovarable inline-flex items-center justify-center gap-2 rounded-full font-bold leading-none transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                sizeMap[size],
                variantMap[variant],
                fullWidth && "w-full",
                isDisabled && "cursor-not-allowed",
                className
            )}
        >
            {/* left icon --------------------------------------------------- */}
            {iconUrl && !loading && (
                <Image src={iconUrl} alt="icon" width={20} height={20}/>
            )}

            {/* spinner ----------------------------------------------------- */}
            {loading && (
                <span
                    className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent rounded-full"
                    role="status"
                    aria-label="loading"
                />
            )}

            {/* label / children ------------------------------------------- */}
            {label ?? children}
        </button>
    );
};
