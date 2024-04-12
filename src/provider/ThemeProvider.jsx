import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("currentTheme");
        return storedTheme || "light"; // Si no hay tema almacenado, se establece el tema predeterminado como "light"
    });
    
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }
    
    useEffect(() => {
        document.body.className = theme; // Establece la clase del cuerpo basada en el tema
        localStorage.setItem("currentTheme", theme); // Guarda el tema seleccionado en el localStorage
    }, [theme]);
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider