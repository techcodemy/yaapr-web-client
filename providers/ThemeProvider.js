import React, { createContext,useContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({children,activeTheme}) => {
    const [theme,setTheme] = useState(activeTheme);


    const colorTheme = theme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
    },[theme,colorTheme])

    const setActiveTheme = () => setTheme(colorTheme)

    return (
        <ThemeContext.Provider value={{theme,colorTheme,setActiveTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {

    const {
        theme,
        colorTheme,
        setActiveTheme
    } = useContext(ThemeContext)

    return {
        theme,
        colorTheme,
        setActiveTheme
    }
}
  

export default ThemeProvider
