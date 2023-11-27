import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  secondary?: boolean;
  round?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}