import { useContext } from 'react'
import { AuthContext, SessionProvider } from '../context/SessionProvider'

export const useSession = () => {
  return useContext(AuthContext)
}
