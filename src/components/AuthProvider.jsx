import React, { useContext, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useIdleTimeout from './useIdleTimeout'
import axios from 'axios'
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(sessionStorage.getItem('usr') || '')
  const [token, setToken] = useState(sessionStorage.getItem('site') || '')
  const navigate = useNavigate()

  const loginAction = async (data) => {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const url = 'http://192.168.1.220:5731/api/v0/authservice'
    const headers = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    try {
      const response = await axios.post(
        url,
        data,
        { timeout: 5000 },
        headers)
      if (response.data.success === true) {
        setToken(response.data.token)
        sessionStorage.setItem('usr', data.username)
        sessionStorage.setItem('site', response.data.token)
        navigate('/')
        return
      }
      throw new Error(response.data.message)
    } catch (err) {
      toast.error(err.message)
      console.log(err)
    }
  }
  const validateToken = async (data) => {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const url = 'http://192.168.1.220:5731/api/v0/authservice/token'
    const headers = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    try {
      const response = await axios.post(
        url,
        data,
        { timeout: 5000 },
        headers)
      if (response.data.success === true) {
        return
      }
      throw new Error(response.data.message)
    } catch (err) {
      toast.error(err.message)
      console.log(err)
      logOut()
    }
  }

  const handleIdle = () => {
    toast.error('Sesión expirada por inactividad')
    logOut()
  }

  const { idleTimer } = useIdleTimeout({ onIdle: handleIdle, idleTime: 1200 })
  const stay = () => {
    idleTimer.reset()
  }

  const logOut = () => {
    setUser(null)
    setToken('')
    sessionStorage.removeItem('site')
    sessionStorage.removeItem('usr')
    navigate('/login')
  }

  return (

    <AuthContext.Provider value={{ token, user, loginAction, logOut, validateToken }}>
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable={false}
pauseOnHover={false}
theme="dark"
transition: Bounce
/>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}
