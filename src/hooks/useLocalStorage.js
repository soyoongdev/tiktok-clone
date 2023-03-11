import { useContext } from 'react'
import AppContext from '../config/AppContext'

const useLocalStorage = () => {
  const [state, dispatch] = useContext(AppContext)

  return [state, dispatch]
}

export default useLocalStorage
