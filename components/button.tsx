import { cn } from "@/lib/util";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
      disabled={disabled}
        className={cn(
          `w-auto disabled:bg-neutral-500 rounded-full bg-black text-white border-transparent px-5 py-3 font-semibold hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed transition`,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
