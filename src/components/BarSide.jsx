import React from 'react'
import {
  Handbag,
  Scroll,
  SquaresFour,
  HandCoins
} from '@phosphor-icons/react'
import Logo from '../assets/images/logo1.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../components/AuthProvider'

export const BarSide = () => {
  const tab = location.pathname
  const auth = useAuth()
  console.log(tab)
  return (
    <div className='fixed pt-6 inset-y-0 flex-wrap items-center block w-[240px] overflow-y-auto antialiased transition-transform duration-500 -translate-x-full  shadow-sm dark:bg-neutral-800 my-14 ease-nav-brand -z-1 xl:ml-8 rounded-2xl xl:left-0 xl:translate-x-0 ps z-auto'>
      <aside>
          <div className='grid pb-32 pt-10 w-full justify-center hover:animate-pulse'>
          <img src={Logo} alt="" className='w-[200px] h-[45px]' />
          <div className='dark:text-white pt-2 flex items-center justify-center'>
            <h1 className='text-xl w-10'>
              Bienvenidos &nbsp;
              </h1>
              <p className='text-xs font-extralight'>
                 {auth.user}
                </p>
            </div>
        </div>
          <ul className='grid text-white tracking-wide transition-all duration-300  hover:gap-6 gap-6 justify-center'>
            <Link to={'/'}>
            <li className={`rounded-full  p-2 flex w-48  h-12 items-center  gap-1 hover:scale-110 transition-all duration-500  ${tab !== '/' ? 'hover:bg-[#993333]/50' : 'bg-[#993333]/50'}`}>
              <SquaresFour size={32} weight="fill" />Dashboard
            </li>
            </Link>
            <Link to={'/payment'}>
            <li className={`rounded-full  p-2 flex w-48  h-12 items-center  gap-1 hover:scale-110 transition-all duration-500  ${tab !== '/payment' && tab !== '/tc_payment' ? 'hover:bg-[#993333]/50' : 'bg-[#993333]/50'}`}>
              <Handbag size={32} weight="fill" />Transacciones
            </li>
            </Link>
            <Link to={'/reverse'}>
            <li className={`rounded-full  p-2 flex w-48  h-12 items-center  gap-1 hover:scale-110 transition-all duration-500  ${tab !== '/reverse' && tab !== '/tc_reverse' ? 'hover:bg-[#993333]/50' : 'bg-[#993333]/50'}`}>
              <Scroll size={32} weight="fill" />Reversos
            </li>
            </Link>
            <Link to={'/'}>
            <li className={`rounded-full  p-2 flex w-48  h-12 items-center  gap-1 hover:scale-110 transition-all duration-500  ${tab !== '/consu' ? 'hover:bg-[#993333]/50' : 'bg-[#993333]/50'}`}>
              <Scroll size={32} weight="fill" />Consulta de balance
            </li>
            </Link>
          </ul>
          <div className='flex justify-center'>
            <button onClick={e => auth.logOut(e)} className='absolute bottom-4 bg-neutral-600 hover:bg-red-950 text-white flex w-max p-2 rounded-xl'>LogOut</button>
          </div>
      </aside>
    </div>
  )
}
