import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import { BarSide } from './components/BarSide'
import Notfound from './routes/NotFound.jsx'
import CompraRetiro from './routes/CompraRetiro.jsx'
import PrivateRoutes from './routes/PrivateRoutes.jsx'
import { AnimatePresence } from 'framer-motion'
import RecentActivity from './components/RecentActivity.jsx'
import Pagos from './routes/Pagos.jsx'
import PagosTc from './components/PagoTc.jsx'
import ReversoTc from './components/ReversoTc.jsx'
import Transacciones from './routes/Transacciones.jsx'
import Login from './routes/Login.jsx'
import Reversos from './routes/Reversos.jsx'
import AuthProvider from './components/AuthProvider.jsx'
function App (isVisible) {
  return (
    <>
        <AnimatePresence>
      <Router>
        <AuthProvider>

            <BarSide/>
          <RecentActivity />
          <div className='dark:bg-zinc-900 bg-white drop-shadow-xl dark:shadow-white/5 dark:shadow-xl rounded-xl place-content-center xl:p-10 flex-wrap items-center block fixed  inset-x-0 inset-y-0 sm:mx-9 xl:mx-80 my-14 '>
          <Routes location={location} key={location.path}>
          <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home/>} />
          <Route path='/payment' element={<Pagos/>} />
          <Route path='/reverse' element={<Reversos/>} />
          <Route path='/tc_payment' element={<PagosTc/>} />
          <Route path='/tc_reverse' element={<ReversoTc/>} />
          <Route path='/shopping' element={<Transacciones />} />
          <Route path='/pucharse_withdrawal' element={<CompraRetiro/>} />
          <Route path='*' element={<Notfound/>} />
          </Route>
            <Route path='/login' element={<Login/>} />
        </Routes>
          </div>
        </AuthProvider>
      </Router>
        </AnimatePresence>
    </>
  )
}

export default App
