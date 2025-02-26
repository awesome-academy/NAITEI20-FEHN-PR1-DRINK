import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-xs font-medium tracking-wider uppercase transition-colors shadow-sm bg-black text-white hover:bg-yellow-500",
  {
    variants: {
      size: {
        default: "h-7 px-4 py-0.5",
        lg: "h-10 px-10 py-5 text-sm",
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
              "h-7 border-none bg-black px-4 text-white transition-colors group-hover:bg-yellow-500",
              buttonVariants({ variant, size, className }),
            )}
            ref={ref}
            {...props}
          />
          <span className="absolute top-1/2 right-[-8px] h-0 w-0 -translate-y-1/2 border-t-15 border-b-15 border-l-8 border-t-transparent border-b-transparent border-l-black transition-colors group-hover:border-l-yellow-500"></span>
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
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
