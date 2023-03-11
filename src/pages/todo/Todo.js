import React, { useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import { setThemeAction } from './action'

function Todo() {
  // Hahaha
  const [state, dispatch] = useLocalStorage()
  const [themeState, setThemeState] = useState(true)
  const handleChangeTheme = () => {
    setThemeState(!themeState)
    dispatch(setThemeAction(themeState))
  }

  return <label onClick={handleChangeTheme}>{state.theme}</label>
}

export default Todo
