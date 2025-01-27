import { cn } from "@/lib/utils";
import React from "react";

export const GridSize = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const;

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof GridSize;
}

type GridProps = React.HTMLAttributes<HTMLDivElement>;

type GridComponent = React.ForwardRefExoticComponent<
  GridProps & React.RefAttributes<HTMLDivElement>
> & {
  Item: React.ForwardRefExoticComponent<
    GridItemProps & React.RefAttributes<HTMLDivElement>
  >;
};

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "grid grid-cols-12 gap-4 max-w-7xl mx-auto h-full w-full",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
) as GridComponent;

Grid.displayName = "Grid";

Grid.Item = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, size = "md", ...props }, ref) => {
    return (
      <div
        className={cn(
          {
            "col-span-4": size === "sm",
            "col-span-8": size === "md",
            "col-span-12": size === "lg" || size === "xl",
            "col-start-8": size === "sm",
            "col-start-3": size === "md",
            "col-start-2": size === "lg",
            "col-start-1": size === "xl",
          },
          "h-full w-full",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Grid.Item.displayName = "Grid.Item";

export default Grid;
