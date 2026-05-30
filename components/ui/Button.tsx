import { type ReactNode, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type AsLink = BaseProps & { href: string; target?: string; rel?: string };
type AsButton = BaseProps &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type" | "disabled">;

type ButtonProps = AsLink | AsButton;

const variantClasses: Record<Variant, string> = {
  primary: "bg-renity-primary text-white hover:opacity-90",
  secondary: "bg-renity-secondary text-renity-text hover:opacity-90",
  outline:
    "border-2 border-renity-primary text-renity-primary hover:bg-renity-primary hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-renity-primary";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props) {
    return (
      <a className={classes} href={props.href} target={props.target} rel={props.rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={props.onClick} type={props.type} disabled={props.disabled}>
      {children}
    </button>
  );
}
