import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { galleryData } from '../data'
import { IoMdArrowDropdown } from 'react-icons/io'
import { pageTransition } from '../animation'
import { motion } from 'framer-motion'
import { GalleryCard } from '../components'

const Gallery = () => {
  const [text, setText] = useState('')
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='flex flex-col max-w-5xl mx-auto py-12 px-4'
    >
      <h2 className='w-fit rounded-md py-2 px-20 bg-blue-900 text-white text-lg font-semibold'>
        معرض الصور
      </h2>
      <div className='flex items-center flex-wrap gap-6 my-8'>
        <div className='relative'>
          <select className='flex items-center justify-around py-3 rounded-md pl-4 pr-10 w-64 shadow-lg border outline-none'>
            <option> ترتيب حسب الاحداث </option>
            <option> ترتيب حسب الاقدم </option>
          </select>
          <IoMdArrowDropdown className='absolute top-4 right-3 text-xl text-blue-900' />
        </div>
        <div className='flex items-center relative max-w-[300px] md:w-1/2 md:mx-[150px]'>
          <input
            type='text'
            className='py-3 pl-10 pr-4 md:pl-10 md:pr-10 border w-full outline-none rounded-lg text-sm'
            placeholder='ادخل النص للبحث عن الصور'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className='cursor-auto px-4 py-3 text-white bg-blue-800 hover:bg-blue-900 transition text-lg h-full rounded-lg left-0 absolute'>
            <FiSearch className='text-xl' />
          </button>
        </div>
      </div>
      <div className='flex flex-wrap gap-y-8 gap-x-10 justify-center items-start md:ml-10'>
        {galleryData?.map((one) => (
          <GalleryCard text={one.text} img={one.img} key={one.date} />
        ))}
      </div>
    </motion.div>
  )
}

export default Gallery
