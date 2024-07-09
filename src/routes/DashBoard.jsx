import React from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../components/AuthProvider'
import OverView from '../components/OverView'
function Home () {
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='flex '>
      <OverView />
         </motion.div>
  )
}

export default Home
