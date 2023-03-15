import { pageTransition } from '../animation'
import { motion } from 'framer-motion'
import { Article } from '../components'

const News = () => {
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
          أخر الأخبار
        </h2>
      </div>
      <Article itemsPerPage={4} />
    </motion.div>
  )
}

export default News
