import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Santiago" });
  const [theme, setTheme] = useState("light");
  const [stats, setStats] = useState([]);

  return (
    <AppContext.Provider value={{ user, theme, stats, setStats }}>
      {children}
    </AppContext.Provider>
  );
};
