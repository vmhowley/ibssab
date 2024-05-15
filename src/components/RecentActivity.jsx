import React from 'react'
import { ChartLineDown, ChartLineUp } from '@phosphor-icons/react'
function RecentActivity () {
  return (
    <div className='fixed pt-8 inset-y-0 flex-wrap items-center p-1 block overflow-y-auto antialiased transition-transform duration-200 translate-x-full right-0  drop-shadow-xl ease-nav-brand -z-1 xl:mr-8 rounded-2xl dark:bg-zinc-900 dark:shadow-white/5 dark:shadow-xl bg-white dark:text-white my-14 xl:translate-x-0 ps w-[270px] '>
      <aside className='grid'>
        <div className='grid place-content-center p-1 pt-8 pb-10'>
          <h1 className='font-bold text-xl'>Actividad Reciente</h1>
          <p className=' text-xs text-end'>21 de Febrero, 2024</p>
        </div>
        <div className='fixed inset-y-28 inset-x-0 '>
          <ul className='grid gap-3'>
            <li>
                <div className='grid p-1'>
                    <div className='flex rounded-xl  justify-around items-center p-1'>
                    <ChartLineDown color='red' className='bg-white/80 p-1 size-12 rounded-md' />
                    <div>
                    <h1 className='text-sm tracking-wide font-bold col-auto'>Juan Andres Gaviria</h1>
                    <h1 className='text-sm tracking-wide font-bold col-auto'>Retiro</h1>
                    </div>
                    <p className='text-xs  tracking-tighter'>9:17 am</p>
                    </div>
                </div>
            </li>
            <li>
                <div className='grid p-1  bg-transparent rounded-xl'>
                    <div className='flex rounded-xl  justify-around items-center p-1'>
                    <ChartLineUp className='bg-white/80 p-1 size-12 rounded-md text-[#43c143]' />
                    <div>
                    <h1 className='text-sm tracking-wide font-bold col-auto'>Juan Andres Gaviria</h1>
                    <h1 className='text-sm tracking-wide font-bold col-auto'>Compra</h1>
                    </div>
                    <p className='text-xs  tracking-tighter'>7:37 am</p>
                    </div>
                </div>
            </li>
            <li>
                <div className='grid p-1  bg-transparent rounded-xl'>
                    <div className='flex rounded-xl  justify-around items-center p-1'>
                    <ChartLineDown color='red' className='bg-white/80 p-1 size-12 rounded-md' />
                    <div>
                    <h1 className='text-sm tracking-wide font-bold col-auto'>Juan Andres Gaviria</h1>
                    <h1 className='text-sm tracking-wide font-bold col-auto'>Retiro</h1>
                    </div>
                    <p className='text-xs  tracking-tighter'>7:17 am</p>
                    </div>
                </div>
            </li>
            <li>
                <div className='grid p-1  bg-transparent rounded-xl'>
                    <div className='flex rounded-xl  justify-around items-center p-1'>
                    <ChartLineUp className='bg-white/80 p-1 size-12 rounded-md text-[#43c143]' />
                    <div>
                    <h1 className='text-sm tracking-wide font-bold col-auto'>Juan Andres Gaviria</h1>
                    <h1 className='text-sm tracking-wide font-bold col-auto'>Compra</h1>
                    </div>
                    <p className='text-xs  tracking-tighter'>12:18 pm</p>
                    </div>
                </div>
            </li>
            <li>
                <div className='grid p-1  bg-transparent rounded-xl'>
                    <div className='flex rounded-xl  justify-around items-center p-1'>
                    <ChartLineUp className='bg-white/80 p-1 size-12 rounded-md text-[#43c143]' />
                    <div>
                    <h1 className='text-sm tracking-wide font-bold col-auto'>Juan Andres Gaviria</h1>
                    <h1 className='text-sm tracking-wide font-bold col-auto'>Compra</h1>
                    </div>
                    <p className='text-xs  tracking-tighter'>9:17 am</p>
                    </div>
                </div>
            </li>
            <li>
                <div className='grid p-1  bg-transparent rounded-xl'>
                    <div className='flex rounded-xl  justify-around items-center p-1'>
                    <ChartLineDown color='red' className='bg-white/80 p-1  size-12 rounded-md' />
                    <div>
                    <h1 className='text-sm tracking-wide font-bold col-auto'>Juan Andres Gaviria</h1>
                    <h1 className='text-sm tracking-wide font-bold col-auto'>Retiro</h1>
                    </div>
                    <p className='text-xs  tracking-tighter'>9:17 am</p>
                    </div>
                </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default RecentActivity
