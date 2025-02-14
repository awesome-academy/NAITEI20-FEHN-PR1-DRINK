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
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    if (shape === "arrow") {
      return (
        <div className="group relative flex items-center">
          <button
            className={cn(
              "h-7 px-4 bg-black text-white border-none transition-colors group-hover:bg-yellow-500",
              buttonVariants({ variant, size, className })
            )}
            ref={ref}
            {...props}
          />
          <span className="w-0 h-0 border-l-8 border-l-black border-t-15 border-t-transparent border-b-15 border-b-transparent transition-colors group-hover:border-l-yellow-500 absolute right-[-8px] top-1/2 -translate-y-1/2"></span>
        </div>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
