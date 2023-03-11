import { useReducer } from 'react'
import reducer, { initState } from './reducer'
import AppContext from './AppContext'

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState)
  return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>
}

export default AppProvider
