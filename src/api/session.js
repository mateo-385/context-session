import { instance as axios } from './axios'

export const loginRequest = async (user) => {
  try {
    const response = await axios.post(`/sign-in`, user)
    return response
  } catch (error) {
    console.error('Error during login request:', error)
    throw error
  }
}

export const logoutRequest = async () => {
  try {
    const response = await axios.post(`/sign-out`)
    return response
  } catch (error) {
    console.error('Error during logaut request:', error)
    throw error
  }
}
