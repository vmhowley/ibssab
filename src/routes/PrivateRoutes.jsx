import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../components/AuthProvider'

const PrivateRoute = () => {
  const auth = useAuth()
  if (!auth.token) {
    return <Navigate to="/login" />
  } else {
    auth.validateToken(auth)
  }
  return <Outlet />
}

export default PrivateRoute
