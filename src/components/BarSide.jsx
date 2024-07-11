import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Logo from '../assets/images/logo1.png'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { useAuth } from '../components/AuthProvider'
import { MdDashboard } from "react-icons/md";

import { Handbag, Scroll, SquaresFour, HandCoins } from '@phosphor-icons/react'

export const BarSide = () => {
  const mode = localStorage.getItem('dark')
  const [dark, setDark] = React.useState(mode)
  const navi = useNavigate()
  const tab = location.pathname
  const auth = useAuth()
  const navigation = [
    {
      name: 'Dashboard',
      link: '/',
      icon: <MdDashboard size={22} weight="fill" />
    },
    {
      name: 'Transacciones',
      link: '/payment',
      icon: <HandCoins size={22} weight="fill" />
    },
    {
      name: 'Reversos',
      link: '/reverse',
      icon: <Scroll size={22} weight="fill" />
    },
    {
      name: 'Consultas',
      link: '',
      icon: <Handbag size={22} weight="fill" />
    }
  ]
  const darkModeHandler = () => {
    const mode = localStorage.getItem('dark')
    if (mode != 'true') {
      localStorage.setItem('dark', true)
    } else {
      localStorage.removeItem('dark')
    }
    setDark(!dark)
    document.body.classList.toggle('dark')  
  }

  return (
    <div className='fixed inset-y-0 flex-wrap items-center block  w-[290px] overflow-y-auto antialiased transition-transform duration-500 -translate-x-full dark:shadow-white/5  my-3 ease-nav-brand -z-1  xl:left-0 xl:translate-x-0 ps z-auto'>
      <aside className='  '>
          <div onClick={() => navi('/')} className='grid cursor-pointer  saturate-150  '>
          <img src={Logo} alt="" className='w-40 h-9' />
          <hr className="inset-0 dark:border-zinc-500  mt-5" />
        </div>
          <ul className='grid  text-sm transition-all mt-5 duration-300  gap-2 justify-start w-full'>
            {navigation.map((nav, index) =>
            <div key={index} className='w-[2px] rounded-lg dark:text-white' >
              <li className='relative'>
              <span className={`${tab !== nav.link ? '' : 'absolute inset-y-2 left-0.5 w-0.5 rounded-full bg-red-600 dark:bg-white'}`} ></span>
                <Link key={index} to={nav.link} className={`relative rounded p-2 ml-5  flex w-64 items-center  transition-all duration-500 hover:bg-red-200 dark:hover:bg-zinc-800`}>
                <h1 className='flex gap-3 truncate font-semibold'>
                  <p className={`${tab !== nav.link ? ' ' : '  text-red-600 dark:text-white'}`}>
                 {nav.icon}
                  </p>
                 {nav.name}
                 </h1>
          </Link>
              </li>
            </div>
            )}
        </ul>
          <div className='flex justify-center'>
            <button onClick={darkModeHandler} className={`absolute bottom-20 bg-neutral-600 hover:bg-red-950 text-white flex w-max p-2 rounded-xl ${dark ? 'hover:bg-yellow-400/70' : 'hover:bg-blue-950'}`}>
                {
                  dark && <IoSunny color='yellow'/>
                  }
                {
                  !dark && <IoMoon color='black'/>
                  }
            </button>
                <button 
                onClick={(e) => auth.logOut(e)} 
                className='absolute bottom-4 bg-neutral-600 hover:bg-red-950 text-white flex w-max p-2 rounded-xl'
                >
                  LogOut
                </button>
          </div>
      </aside>
    </div>
  )
}
