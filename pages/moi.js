import React from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'

function moi({ imageDetails }) {

    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  return (
    <div>
      <motion.div       
      initial='initial'
      animate='animate'
      exit='exit' 
      className='flex justify-center items-center'>
            <motion.div className='overflow-hidden'
            initial={{
                y: '20%',
                width: imageDetails.width, 
                height: imageDetails.height 
            }}
            animate={{
              y: '80%',
              width: '100%',
              transition: {delay: 0.2, ...transition},
            }}
            >               
                
            <motion.img initial={{ scale: 1 }} className='cursor-pointer object-cover w-[100%] h-[40%] sm:h-[80%]' src="https://external-preview.redd.it/JyVV5DgtU49IwsN5ibdL_OFTthSjdvBbxpRNAgc_Z-E.jpg?width=640&crop=smart&auto=webp&s=ed0b0759f34da31e42af48a7a136c819279306d3" alt="" />

            </motion.div>
      </motion.div>
    </div>
  )
}

export default moi