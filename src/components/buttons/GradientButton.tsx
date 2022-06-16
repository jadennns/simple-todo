import Link from "next/link";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface GradientButtonProps {
  from: string;
  to: string;
  children: ReactNode;
  via?: string;
  className?: string;
  redirect?: string;
  onClick?: () => any;
}

export default function GradientButton({
  from,
  to,
  via,
  className,
  children,
  redirect,
  onClick,
  disabled,
}: GradientButtonProps &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) {
  return redirect ? (
    <Link href={redirect}>
      <button
        className={`${className} bg-gradient-to-r ${from} ${via} ${to}`}
        onClick={onClick ? onClick : () => {}}
        disabled={disabled}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      className={`${className} bg-gradient-to-r ${from} ${via} ${to}`}
      onClick={onClick ? onClick : () => {}}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
