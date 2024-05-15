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
      icon: <MdDashboard size={24} weight="fill" />
    },
    {
      name: 'Transacciones',
      link: '/payment',
      icon: <HandCoins size={24} weight="fill" />
    },
    {
      name: 'Reversos',
      link: '/reverse',
      icon: <Scroll size={24} weight="fill" />
    },
    {
      name: 'Consultas',
      link: '',
      icon: <Handbag size={24} weight="fill" />
    }
  ]
  const darkModeHandler = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
    localStorage.setItem('dark', dark)
  }

  return (
    <div className='fixed pt-6 inset-y-0 flex-wrap items-center block w-[260px] overflow-y-auto antialiased transition-transform duration-500 -translate-x-full dark:shadow-white/5 dark:shadow-xl drop-shadow-xl dark:bg-zinc-900 bg-white my-14 ease-nav-brand -z-1 xl:ml-8 rounded-2xl xl:left-0 xl:translate-x-0 ps z-auto'>
      <aside>
          <div onClick={() => navi('/')} className='grid cursor-pointer mb-32 mt-10 w-full justify-center saturate-150 h-10 '>
          <img src={Logo} alt="" className='w-[200px] h-[45px]' />
        </div>
          <ul className='grid  dark:text-black tracking-wide transition-all duration-300  hover:gap-6 gap-6 justify-center'>
            {navigation.map((nav, index) =>
          <Link key={index} to={nav.link}>
              <li key={index} className={`rounded-full shadow justify-center  p-2 flex w-44  h-10 items-center  gap-3 hover:scale-110 transition-all duration-500  ${tab !== nav.link ? 'dark:hover:bg-zinc-500 hover:bg-red-200 dark:text-white' : 'dark:bg-zinc-600 bg-red-800/80 text-white shadow-xl border border-black/30'}`}>
                {nav.icon}{nav.name}
              </li>
          </Link>
            )}
        </ul>
          <div className='flex justify-center'>
            <button onClick={e => auth.logOut(e)} className='absolute bottom-4 bg-neutral-600 hover:bg-red-950 text-white flex w-max p-2 rounded-xl'>LogOut</button>
            <button onClick={(e) => darkModeHandler(e)} className='absolute bottom-20 bg-neutral-600 hover:bg-red-950 text-white flex w-max p-2 rounded-xl'>
                {

                    dark && <IoSunny />
                }
                {
                    !dark && <IoMoon />
                }
            </button>
          </div>
      </aside>
    </div>
  )
}
