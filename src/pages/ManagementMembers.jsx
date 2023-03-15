import { pageTransition } from '../animation'
import { HeroPhoto } from '../components'
import { ManagementData } from '../data'
import photo from '/imgs/heroSection.png'
import { motion } from 'framer-motion'

const ManagementMembers = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='md:py-10 pb-16 md:pb-8'
    >
      <HeroPhoto photo={photo} title='أعضاء الإدارة التنفيذية' />
      <div className='max-w-6xl m-auto py-10 flex flex-col gap-4 px-5'>
        <h1 className='text-2xl text-darkBlue-900 mx-auto md:mx-0 border-b-2 my-5 w-fit pb-2 border-darkBlue-900'>
          أعضاء الإدارة التنفيذية
        </h1>
      </div>
      <div className='flex flex-wrap items-center px-4 justify-center gap-12 md:gap-20 max-w-5xl mx-auto'>
        {ManagementData.map((item) => (
          <div
            className='md:w-[220px] w-[150px] justify-center flex items-center flex-col'
            key={item.id}
          >
            <img src={item.img} alt='' className='w-full' />
            <div className='py-2 rounded-lg  text-xl text-center bg-darkBlue-900 text-white -skew-x-[30deg] -translate-x-4 -translate-y-1 items-center gap-2 w-full'>
              <p className='skew-x-[30deg] flex flex-col gap-2'>
                <span>{item.name}</span>
                <span className='text-sm font-normal'>{item.jobTitle}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default ManagementMembers
