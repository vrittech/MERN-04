import { useContext } from "react";
import { ThemeContext } from "../contexts";

export const Button = ({ onClick, children }) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={{
        color: theme === "light" ? "blue" : "red",
        background: theme === "light" ? "white" : "black",
      }}
    >
      {children}
    </button>
  );
};
