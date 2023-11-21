// App --> Navbar --> NavItem --> Random(Doesn't need theme information) --> Dropdown
// light/dark --> light --> props

import { useState } from "react";
import { Navbar } from "./components";
import { ThemeContext } from "./contexts/theme";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Navbar changeTheme={changeTheme} />
    </ThemeContext.Provider>
  );
}

export default App;
