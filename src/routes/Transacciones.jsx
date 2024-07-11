import React from 'react'
import { motion } from 'framer-motion'
import SquareButtons from '../components/SquareButtons'
import { Handbag, HandCoins } from '@phosphor-icons/react'

function Pagos () {
  return (
    <motion.div
    initial={{ x: "100%" }}
  animate={{ x: "calc(100vw - 50%)" }}
      className='flex justify-center items-center h-full'
    >
      <SquareButtons
        class3='card03'
        class4='card04'
        name3='Compras'
        
        icon3={<Handbag size={50} />}
      />
    </motion.div>
  )
}
export default Pagos
