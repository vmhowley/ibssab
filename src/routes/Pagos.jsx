import React from 'react'
import { motion } from 'framer-motion'
import SquareButtons from '../components/SquareButtons'
import {
  CreditCard,
  Scroll,
  ShoppingCartSimple
} from '@phosphor-icons/react'

function Pagos (props) {
  return (
    <motion.div
    animate={{ x: 100, scale: 1}}
    initial={{ scale: 0}}
    className='relative right-24'>
     <SquareButtons class1='card01'
                    button1='/tc_payment'
                    button2='/loan_payment'
                    button3='/buy'
                    button4='/withdraw'
                    class2='card02'
                    class3='card03'
                    class4='card04'
                    name1='Pago de Tarjeta'
                    name2='Pago Prestamos'
                    name3='Compras'
                    name4='Retiros'
                    icon1={<CreditCard size={100} />}
                    icon2={<Scroll size={100} />}
                    icon3={<ShoppingCartSimple size={100} />                  }
                    icon4={<Scroll size={100} />}/>
        </motion.div>
  )
}
export default Pagos
