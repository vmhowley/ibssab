import React, { useState } from 'react'
import { useAuth } from '../components/AuthProvider'
import { motion } from 'framer-motion'

function OverView() {
  const auth = useAuth()
  const items = [
        {
        title:"Total revenue",
        amount:"2.6M",
        percent:"+4.5%",
        class:"bg-lime-400/15 w-max text-sm p-1 rounded text-lime-300 font-medium",
        subtitle:"from last week"
      },
        {
        title:"Average order value",
        amount:"455",
        percent:"-4.5%",
        class:"bg-pink-400/15 w-max text-sm p-1 rounded text-pink-700 font-medium",
        subtitle:"from last week"
      },
        {
        title:"Tickets sold",
        amount:"5,888",
        percent:"+4.5%",
        class:"bg-lime-400/15 w-max text-sm p-1 rounded text-lime-300 font-medium",
        subtitle:"from last week"
      },
        {
        title:"Pageviews",
        amount:"823,067",
        percent:"+21.2%",
        class:"bg-lime-400/15 w-max text-sm p-1 rounded text-lime-300 font-medium",
        subtitle:"from last week"
      },
    
    ]

      return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='flex '>
          <div className='inset-0 mx-60 left-44 my-14 fixed text-white '>
            <div className='font-bold text-xl'>
            <h1>Bienvenido, {auth.user}</h1>
            </div>
            <div className='grid  mt-14 mb-5'>
            <h1 className='font-semibold'>Overview</h1>
            </div>
              <div className='grid grid-cols-4 gap-8 w-full '>
            {items.map((item) =>
              <div className='grid gap-4'>
              <hr className='border-gray-500' />
              <p className='font-bold text-sm trac'>{item.title}</p>
              <h1 className='font-bold text-2xl'>{item.amount}</h1>
              <div className='flex items-center gap-1'>
                <p className={item.class}>{item.percent}</p>
                <h1 className='text-xs text-zinc-300'>{item.subtitle}</h1>
              </div>
              </div>
            )}
            </div>
          </div>
        </motion.div>
      )
    }

export default OverView