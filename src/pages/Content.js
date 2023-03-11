import React, { useContext } from 'react'
import { ThemeContext } from '../components/themeComponent/ThemeContext'

function Content() {
  const themeContext = useContext(ThemeContext)

  return (
    <div className="container">
      <label>{themeContext.theme}</label>
      <button onClick={themeContext.handleChangeTheme}>Change theme</button>
    </div>
  )
}

export default Content
