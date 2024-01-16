import * as React from "react";
import cn from "classnames";
import { useIntl } from "react-intl";

interface RangeProps {
  className?: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  defaultValue?: string;
}

export const Range = ({
  className,
  handleChange,
  defaultValue,
}: RangeProps) => {
  const { formatMessage: f } = useIntl();
  return (
    <div className="tooltip tooltip-left w-full" data-tip={defaultValue}>
      <input
        aria-hidden="true"
        className={cn("range range-accent", className)}
        defaultValue={defaultValue}
        max="72"
        min="1"
        name="harga"
        onChange={handleChange}
        placeholder="harga"
        type="range"
      />
      <div className="flex items-center justify-between text-sc-dark text-xl font-semibold">
        <span>1 {f({ id: "jam" })}</span>
        <span>72 {f({ id: "jam" })}</span>
      </div>
    </div>
  );
};
