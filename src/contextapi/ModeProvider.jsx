import React, { useState } from 'react'
import themeMode from './themeMode'
const ModeProvider = ({children}) => {
    const[theme,setTheme]=useState("light")
    const lightMode=()=>{
        setTheme('dark')
    }
    const darkMode=()=>{
        setTheme('light')
    }
  return (
    <themeMode.Provider value={{theme,setTheme,lightMode,darkMode}}>
        {children}
    </themeMode.Provider>
  )
}

export default ModeProvider