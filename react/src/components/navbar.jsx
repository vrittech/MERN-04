import { useContext } from "react";
import { Button } from "./button";
import { NavItem } from "./nav-item";
import { ThemeContext } from "../contexts";
import { Wrapper } from "./wrapper";

export const Navbar = ({ changeTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: theme === "light" ? "blue" : "red",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          gap: "1rem",
        }}
      >
        <NavItem>
          <li>Home</li>
        </NavItem>
        <NavItem>
          <li>About us</li>
        </NavItem>
        <NavItem>
          <li>Contact us</li>
        </NavItem>
      </ul>

      <NavItem
        styles={{
          display: "flex",
          gap: "5px",
        }}
      >
        <Button onClick={changeTheme}>Change Theme</Button>
        <Wrapper />
      </NavItem>
    </nav>
  );
};
