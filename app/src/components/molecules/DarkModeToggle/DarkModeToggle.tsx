import React from "react";
import type { ChangeEvent } from "react";
import useDarkMode from "@fisch0920/use-dark-mode";

import { InputToggle } from "../../atoms/InputToggle";

export type Theme = "dark" | "light";

// export type DarkModeToggleProps = {};

export const DarkModeToggle = () => {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
  });

  return (
    <InputToggle
      id="DarkMode"
      name="dark-mode"
      checked={darkMode.value}
      onChange={darkMode.toggle}
    >
      <span>{darkMode.value ? "☾" : "☀"}</span>
    </InputToggle>
  );
};
