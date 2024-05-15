import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../components/AuthProvider'

const PrivateRoute = () => {
  const auth = useAuth()
  console.log(auth)
  if (!auth.token) {
    return <Navigate to="/login" />
  } else if (auth.token !== 'VMHOWLEY') {
    alert('login incorecto')
  }
  return <Outlet />
}

export default PrivateRoute
