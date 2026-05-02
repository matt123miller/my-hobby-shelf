import type { ChangeEvent } from "react";
import type { ClassValue } from "clsx";
import clsx from "clsx";

/**
 * Better one found here
 * https://smolcss.dev/
 * but that's small, can it be made bigger with fontsize?
 */

export type InputToggleProps = React.PropsWithChildren & {
  toggleClasses?: ClassValue;
  labelClasses?: ClassValue;
  id: string;
  name: string;
  onChange: (active: boolean) => unknown;
  checked?: boolean;
};

export const InputToggle = ({
  name,
  id,
  checked = false,
  onChange,
  children,
  toggleClasses,
  labelClasses,
}: InputToggleProps) => {
  const inputStyles = clsx(
    toggleClasses,
    "input-toggle bg-gray-300 checked:bg-purple-500"
  );
  const labelStyles = clsx(labelClasses, "flex items-center gap-2");

  return (
    <label htmlFor={id} className={labelStyles}>
      <input
        className={inputStyles}
        type="checkbox"
        checked={checked}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
        name={name}
        id={id}
      />
      {children}
    </label>
  );
};
