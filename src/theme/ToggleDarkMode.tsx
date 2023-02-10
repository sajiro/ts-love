import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ToggleDarkMode = () => {
  const { dark, toggleDark } = useContext(ThemeContext);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDark?.();
  };
  return (
    <>
      <h1>{dark ? "🌙" : "🌞"}</h1>
      <button onClick={handleOnClick}>Toggle dark mode</button>
    </>
  );
};
