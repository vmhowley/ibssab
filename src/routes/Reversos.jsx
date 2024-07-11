import React from 'react'
import SquareButtons from '../components/SquareButtons'
import { motion } from 'framer-motion'
import {
    CreditCard,
    Scroll,
    SquaresFour,
    HandCoins
  } from '@phosphor-icons/react'

function Reversos () {
  return (
    <motion.div
    animate={{ x: 100, scale: 1 }}
    initial={{ scale: 0}}
    className='relative right-24'>
    <SquareButtons class1='card01' button1='/tc_reverse' class2='card02' class3='card03' name1='Reversar Pago Tc' name2='Reversar Compra' name3='Reversar Retiro' icon1={<CreditCard size={50} />} icon2={<Scroll size={50} />} icon3={<CreditCard size={50} />} />
    </motion.div>
  )
}

export default Reversos
