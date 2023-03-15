import photo from '/imgs/heroSection.png'
import { HeroPhoto } from '../components'
import { boardData } from '../data'
import { pageTransition } from '../animation'
import { motion } from 'framer-motion'

const Board = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='md:py-10'
    >
      <HeroPhoto photo={photo} title='لجان مجلس الإدارة' />
      <div className='max-w-6xl m-auto py-10 flex flex-col  pb-10 gap-2 px-5'>
        <h1 className='text-2xl text-darkBlue-900 border-b-2 border-darkBlue-900 w-fit my-5 pb-2 px-2 md:pl-2 mx-auto md:mx-0'>
          لجان مجلس الإدارة
        </h1>
        <p>
          التزاماً من العهد السعودي التقني للطاقة المتجددة (سباير) بحوكمة جميع
          أعماله واتباع نهج الشفافية، فقد تم اتخاذ قرار من مجلس الإدارة في
          اجتماعه الثاني بتشكيل عدد من اللجان التي تتسق مع طبيعة المعهد وذلك
          لتعزيز فاعلية المجلس وإشرافه على المهام الأساسية في سباير، ويتم تحديد
          مسئوليات وواجبات كل لجنة وتفويض الصلاحيات الخاصة بها من قبل مجلس
          الإدارة.
        </p>
        <ul className='list-decimal  flex flex-col gap-4 px-5 mt-5'>
          {boardData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default Board
