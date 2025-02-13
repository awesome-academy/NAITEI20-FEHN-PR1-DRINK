import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-xs font-medium tracking-wider uppercase transition-colors shadow-sm bg-black text-white hover:bg-yellow-500",
  {
    variants: {
      size: {
        default: "h-7 px-4 py-0.5",
        lg: "h-10 px-8 py-4 text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
