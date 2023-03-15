import { pageTransition } from '../animation'
import { VideoNews } from '../components'
import { motion } from 'framer-motion'

const Videos = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='py-12'
    >
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='w-fit rounded-md py-2 px-20 bg-blue-900 text-white text-lg font-semibold'>
          مقاطع الفيديو
        </h2>
      </div>
      <VideoNews />
    </motion.div>
  )
}

export default Videos
