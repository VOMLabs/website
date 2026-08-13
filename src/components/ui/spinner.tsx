import ArrowRotateRight from "@gravity-ui/icons/ArrowRotateRight";

import { cn } from "@/lib/utils";

function Spinner({
  className,
  ...props
}: Omit<React.ComponentProps<"svg">, "strokeWidth">) {
  return (
    <ArrowRotateRight
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}

      role="status"
      strokeWidth={2}
      {...props}
    />
  );
}

export { Spinner };
