import { type ComponentProps } from "react";

import styles from "./Buttons.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  children?: JSX.Element | string;
  className?: string;
  onClick?: () => void;
  variant?: "base" | "danger" | "success" | "disabled";
  props?: any;
}

interface IconButtonProps extends ButtonProps {
  icon: JSX.Element;
}

export const Button = ({
  children,
  onClick,
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.normalButton} ${variant && styles[variant]} ${
        className && className
      }`}
      onClick={() => {
        onClick && onClick();
      }}
      {...props}
    >
      {children}
    </button>
  );
};
export const IconButton = ({
  icon,
  onClick,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={`${styles.iconButton} ${className && className}`}
      onClick={() => {
        onClick && onClick();
      }}
      {...props}
    >
      {icon}
    </button>
  );
};
