import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../components/AuthProvider'

const PrivateRoute = () => {
  const user = useAuth()
  console.log(user)
  if (!user.token && !user.usr) return <Navigate to="/login" />
  return <Outlet />
}

export default PrivateRoute
