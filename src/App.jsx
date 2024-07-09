import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './routes/DashBoard.jsx'
import Home from './routes/Home.jsx'
import { BarSide } from './components/BarSide'
import SideBar from './components/SideBar.jsx'
import Notfound from './routes/NotFound.jsx'
import CompraRetiro from './components/CompraRetiro.jsx'
import PrivateRoutes from './routes/PrivateRoutes.jsx'
import { AnimatePresence } from 'framer-motion'
import RecentActivity from './components/RecentActivity.jsx'
import Pagos from './routes/Pagos.jsx'
import PagosTc from './components/PagoTc.jsx'
import ReversoTc from './components/ReversoTc.jsx'
import Transacciones from './routes/Transacciones.jsx'
import Login from './routes/Login.jsx'
import Reversos from './routes/Reversos.jsx'
import CardReader from './components/CardReader.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import DashBoardBack from './components/DashBoardBack.jsx'
function App (isVisible) {
  return (
    <div className='grid fixed place-content-center right-0 left-72  dark:bg-zinc-900 dark:border dark:border-white/10 bg-white shadow inset-0 my-2 mx-2 rounded-xl  '>
      <AnimatePresence>
        <Router>
          <AuthProvider>
              <BarSide />
            <Routes location={location} key={location.path}>
              <Route path='/login' element={<Login />} />
              <Route element={<PrivateRoutes />}>
                <Route path='/' element={<DashBoard />} />
                <Route path='/payment' element={<Pagos />} />
                <Route path='/buy' element={<CompraRetiro />} />
                <Route path='/reverse' element={<Reversos />} />
                <Route path='/tc_payment' element={<PagosTc />} />
                <Route path='/loan_payment' element={<CardReader />} />
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
