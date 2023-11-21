// App --> Navbar --> NavItem --> Random(Doesn't need theme information) --> Dropdown
// light/dark --> light --> props

import { useState } from "react";
import { Card, Navbar } from "./components";
import { ThemeContext } from "./contexts/theme";

// import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      {/* <Navbar changeTheme={changeTheme} /> */}

      <Card />
    </ThemeContext.Provider>
  );
}

export default App;
