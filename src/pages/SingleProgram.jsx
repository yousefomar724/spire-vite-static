import { useParams } from 'react-router-dom'
import { programsData } from '../data'
import { HeroSlider } from '../components'
import { motion } from 'framer-motion'
import { pageTransition } from '../animation'

const SingleProgram = () => {
  const { programId } = useParams()
  const singleProgram = programsData.find((p) => p.id === +programId)

  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <HeroSlider />
      <div className='max-w-5xl mx-auto px-4 flex flex-col gap-6 py-8'>
        <h1 className='text-center text-2xl font-semibold'>
          تخصص الطاقة المتجددة
        </h1>
        <div className='leading-8 flex flex-col gap-4'>
          <p>{singleProgram.programPageDescription}</p>
        </div>
        <h2 className='text-xl font-semibold'>مميزات هذا البرنامج</h2>
        <ul className='list-decimal'>
          {singleProgram.programAdvantages.map((item, i) => (
            <li className='font-normal leading-8' key={i}>
              {item}
            </li>
          ))}
        </ul>
        <div className='flex justify-center items-center mx-auto'></div>
      </div>
    </motion.div>
  )
}

export default SingleProgram
