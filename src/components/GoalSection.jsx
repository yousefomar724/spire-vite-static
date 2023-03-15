import valueCircle from '/imgs/valueCircle.png'
import { goalData } from '../data'
import { motion } from 'framer-motion'
import { child, parent } from '../animation'

const GoalsSection = () => {
  return (
    <section className='max-w-6xl mx-auto flex items-center px-4 text-center justify-center flex-col text-darkBlue-900 gap-6 mb-12 md:mt-20 md:mb-28'>
      <motion.div
        variants={parent}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex flex-col md:flex-row items-center md:items-start justify-center md:gap-8
      md:justify-between w-full gap-x-8 gap-y-12'
      >
        {goalData.map((val) => (
          <motion.div
            variants={child}
            className='flex flex-col items-center text-center md:text-right md:items-start gap-4 flex-1'
            key={val.id}
          >
            <div className='flex items-center gap-2'>
              <div
                className='bg-no-repeat w-12 h-12 p-2 bg-cover flex items-center justify-center'
                style={{ backgroundImage: `url(${valueCircle})` }}
              >
                <img
                  src={val.img}
                  className='w-6 object-cover'
                  alt='value icon'
                />
              </div>
              <h3 className='text-lg font-semibold'>{val.title}</h3>
            </div>
            <div className='flex gap-1 flex-col'>
              {val.description.map((desc, i) => (
                <p key={i} className='md:text-right text-justify px-4 md:px-0'>
                  {desc}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default GoalsSection
