import { FAQData } from '../data'
import Icon from '/imgs/FAQLogo.png'
import { motion } from 'framer-motion'
import { pageTransition } from '../animation'
import { FAQCard } from '../components'

const FAQ = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='max-w-6xl mx-auto pt-12 pb-10 px-5'
    >
      <div className='flex gap-3 items-center '>
        <img src={Icon} alt='icon' className='max-w-[45px] max-h-[45px]' />
        <h1 className='text-2xl font-normal	text-darkBlue-900 '>
          الأسئلة الشائعة
        </h1>
      </div>
      <div className="max-w-[800px] mx-auto mt-8 mb-20  bg-[url('/src/imgs/logo.png')]  bg-cover	bg-no-repeat ">
        <div className='flex gap-8 flex-col backdrop-grayscale-50 bg-white/30'>
          {FAQData.map((fQA) => (
            <FAQCard
              Question={fQA.Question}
              answered={fQA.answered}
              key={fQA.id}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default FAQ
