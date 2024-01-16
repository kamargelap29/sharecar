/* eslint-disable react/prop-types */
import * as React from "react";
import cn from "classnames";

export type ContainerProps = React.ComponentProps<"div">;

export const containerStyles = "max-w-7xl box-content px-[32px]";

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div className={cn(containerStyles, className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";
