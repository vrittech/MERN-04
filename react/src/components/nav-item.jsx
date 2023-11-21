import { useContext } from "react";
import { ThemeContext } from "../contexts";

export const NavItem = ({ styles, children }) => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ color: theme === "light" ? "white" : "black", ...styles }}>
      {children}
    </div>
  );
};
