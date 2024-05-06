import React from 'react'
import { motion } from 'framer-motion'
import RecentActivity from '../components/RecentActivity'
import Invoice from '../components/Invoice'
function Home () {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='flex '>
    </motion.div>
  )
}

export default Home
