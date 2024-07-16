import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './routes/DashBoard.jsx'
import Home from './routes/Home.jsx'
import { BarSide } from './components/BarSide'
import Notfound from './routes/NotFound.jsx'
import Compras from './components/Compras.jsx'
import PrivateRoutes from './routes/PrivateRoutes.jsx'
import { AnimatePresence } from 'framer-motion'
import RecentActivity from './components/RecentActivity.jsx'
import Pagos from './routes/Pagos.jsx'
import PagosTc from './components/PagoTc.jsx'
import ReversoTc from './components/ReversoTc.jsx'
import Transacciones from './routes/Transacciones.jsx'
import Login from './routes/Login.jsx'
import Reversos from './routes/Reversos.jsx'
import PagoPrestamo from './components/PagoPrestamo.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import Copy from './assets/images/logo.png'

function App (isVisible) {
  return (
    <div className='grid fixed place-content-center right-0 left-72  dark:bg-zinc-900 dark:border dark:border-white/10 bg-white shadow inset-0 my-2 mx-2 rounded-xl  '>
      <AnimatePresence>
        <Router>
          <AuthProvider>
              <BarSide />
              <div className='fixed right-5 p-5  pb-0 bottom-5 border rounded-lg gap-2 grid opacity-80  animate-shake'>
            {/* CopyRights */}
            <img src={Copy} alt="" className='w-44' />
            <p className='flex text-xs justify-end items-end content-end'>CopyRight 2024 - 2050</p>
          </div>
            <Routes location={location} key={location.path}>
              <Route path='/login' element={<Login />} />
              <Route element={<PrivateRoutes />}>
                <Route path='/' element={<DashBoard />} />
                <Route path='/payment' element={<Pagos />} />
                <Route path='/buy' element={<Compras />} />
                <Route path='/reverse' element={<Reversos />} />
                <Route path='/tc_payment' element={<PagosTc />} />
                <Route path='/loan_payment' element={<PagoPrestamo />} />
                <Route path='/tc_reverse' element={<ReversoTc />} />
                <Route path='/shopping' element={<Transacciones />} />
                <Route path='*' element={<Notfound />} />
              </Route>
              <Route path='/home' element={<Home />} />
            </Routes>
          </AuthProvider>
        </Router>
      </AnimatePresence>
    </div>
  )
  }

export default App
