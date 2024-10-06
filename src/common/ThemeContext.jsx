import React, {createContext, useContext, useEffect, useState, } from "react";

const ThemeContext = createContext();

export const useTheme = ()=> useContext(ThemeContext);

export const ThemeProvider = ({children})=> {   
    const [theme, setTheme] = useState(
        ()=> localStorage.getItem('theme') || 'light');
    
    useEffect(()=> {
        document.body.setAttribute('data-them', theme);
        localStorage.setItem('theme', theme);
    },[theme]);

    const toggleTheme = ()=> {
        
        setTheme((prevThem)=>(prevThem === 'light' ? 'dark':'light'))
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

};
    