import { createContext, useState, useEffect } from 'react'

import { loginRequest, logoutRequest } from '../api/session'

export const AuthContext = createContext()

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)
  const [session, setSession] = useState(false)

  const login = async (user) => {
    setLoading(true)
    try {
      const res = await loginRequest(user)
      if (!res.statusText == 'OK') {
        throw new Error('Error en la autenticacion')
      }
      setSession(true)

      setUser(res.data.user)
    } catch (error) {
      console.log(error.response.data)
      setErrors([error.response.data.message])
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      await logoutRequest()
      Cookies.remove('authToken')
      setSession(false)
      setUser(null)
    } catch (error) {
      console.log(error)
      setErrors([error.response.data.error])
    } finally {
      setLoading(false)
    }
  }
  return (
    <AuthContext.Provider
      value={{ login, logout, session, user, errors, loading }}
    >
      {children}
    </AuthContext.Provider>
  )
}
