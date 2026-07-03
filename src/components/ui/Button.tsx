import React from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  as?: "button" | "a";
  href?: string;
  target?: string;
  children: React.ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-500 border border-transparent shadow-lg shadow-violet-900/30",
  outline:
    "border border-violet-500/50 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400",
  ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  target,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500";

  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (as === "a" && href) {
    return (
      <a href={href} target={target} className={allStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={allStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
