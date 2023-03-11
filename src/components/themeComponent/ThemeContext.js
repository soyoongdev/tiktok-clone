import { createContext, useState } from 'react'

const ThemeContext = createContext()

// 1. Provider
const ThemeProvider = ({ content }) => {
  const [theme, setTheme] = useState('Light')

  const handleChangeTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }

  const objectProvider = {
    theme,
    handleChangeTheme
  }

  return <ThemeContext.Provider value={objectProvider}>{content}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
