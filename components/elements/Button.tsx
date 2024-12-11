"use client";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";
import { ClipLoader } from "react-spinners";

const buttonVariants = {
  primary: "bg-primary  text-white shadow",
  secondary: "bg-secondary hover:opacity-90 text-white shadow",
  tertiary: "bg-secondary hover:bg-primary text-white shadow",
  warning: "bg-yellow-400 hover:bg-yellow-500 next-nevada shadow",
  "warning-outline":
    "bg-white border border-yellow-400 text-primary hover:bg-yellow-500 hover:border-yellow-500",
  danger: "bg-red-500 text-white shadow",
  outline: "border border-primary before:bg-primary shadow",
  ghost:
    "border border-primary next-nevada hover:bg-primary hover:text-white shadow",
  "ghost-secondary":
    "border border-secondary text-secondary hover:bg-secondary hover:text-white shadow",
  white: "bg-white next-nevada border hover:shadow shadow",
  cancel:
    "bg-white next-nevada border hover:shadow shadow hover:bg-red-500 hover:text-white",
  "hyperlink-primary": "bg-transparent next-nevada hover:text-secondary",
  "hyperlink-secondary": "bg-transparent text-secondary hover:next-nevada",
  "hyperlink-warning": "bg-transparent text-yellow-400",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2",
  xs: "px-2 py-1 text-xs gap-1",
};

interface ButtonProps {
  variant?: keyof typeof buttonVariants;
  fullWidth?: boolean;
  className?: string;
  isLoading?: boolean;
  spinnerSize?: number;
  disabled?: boolean;
  href?: string;
  linkProps?: Omit<LinkProps, "href"> & AnchorHTMLAttributes<HTMLAnchorElement>;
  children: React.ReactNode;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  size?: keyof typeof sizes;
}

const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ComponentPropsWithRef<"button">
>(
  (
    {
      variant = "primary",
      fullWidth = false,
      className = "",
      isLoading = false,
      disabled = false,
      spinnerSize = 15,
      linkProps,
      href,
      children,
      endContent,
      size = "md",
      startContent,
      type = "button",
      ...props
    },
    ref
  ) => {
    const classString = `relative transition-colors duration-100 flex justify-center items-center gap-2 ${
      buttonVariants[variant]
    } ${disabled || isLoading ? "cursor-not-allowed opacity-70" : ""} ${
      sizes[size]
    }  ${fullWidth ? "w-full" : ""} ${className}`;

    const buttonContent = (
      <button
        ref={ref}
        type={type}
        className={classString}
        disabled={isLoading || disabled}
        {...props}
      >
        {startContent}
        {children}
        {isLoading ? (
          <ClipLoader size={spinnerSize} color="inherit" />
        ) : (
          endContent
        )}
      </button>
    );

    return href ? (
      <Link
        {...linkProps}
        className={`inline-block ${fullWidth ? "w-full" : ""} ${
          linkProps?.className || ""
        }`}
        href={href}
      >
        {buttonContent}
      </Link>
    ) : (
      buttonContent
    );
  }
);

Button.displayName = "Button";

export default Button;
