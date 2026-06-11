import { createContext, useContext, useEffect, useState } from "react";

// creation d'une variable de contexte
const ThemeContext = createContext(null);

// creation du provider

export default function ThemeContextProvider({ children }) {
 const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // La synchronisation DOM/localStorage vit ici, pas dans le composant
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  
const backgroundJsonEditor = theme === "dark" ? "#17171A" : "#ffffff"
  return (
    <ThemeContext.Provider value={{theme, setTheme, backgroundJsonEditor}}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContexte = () => useContext(ThemeContext);
