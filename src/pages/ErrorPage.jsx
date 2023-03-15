import { pageTransition } from '../animation'
import imgError from '/imgs/errorImage.jpg'
import { motion } from 'framer-motion'

const ErrorPage = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='  flex justify-center items-center'
    >
      <img
        src={imgError}
        alt='error img'
        className='min-w-[350px] max-w-[750px]'
      />
    </motion.div>
  )
}

export default ErrorPage
