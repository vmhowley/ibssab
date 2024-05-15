import React from 'react'
import { motion } from 'framer-motion'
import SquareButtons from '../components/SquareButtons'
import {
  CreditCard,
  Scroll
} from '@phosphor-icons/react'

function Pagos (props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='flex justify-center items-center h-full'>
     <SquareButtons class1='card01'
                    button1='/tc_payment'
                    class2='card02'
                    class3='card03'
                    class4='card04'
                    name1='Pago de Tarjeta'
                    name2='Pago Prestamos'
                    name3='Compras'
                    name4='Retiros'
                    icon1={<CreditCard size={50} />}
                    icon2={<Scroll size={50} />}
                    icon3={<CreditCard size={50} />}
                    icon4={<Scroll size={50} />}/>
        </motion.div>
  )
}
export default Pagos
