import type { ComponentProps } from "react";
import { cn } from "../../libs/utils";

type GridContainer = {
  cols: 1 | 2 | 3 | 4 | 6 | 8;
} & ComponentProps<"div">;

const mappedCols = {
  1: "grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
  6: "md:grid-cols-3 lg:grid-cols-6",
  8: "md:grid-cols-4 lg:grid-cols-8",
} as const;

const GridContainer = ({
  cols,
  className,
  children,
  ...props
}: GridContainer) => {
  return (
    <div
      className={cn("grid grid-cols-1", mappedCols[cols], className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default GridContainer;
