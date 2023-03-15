import { programsData } from '../data'
import img from '/imgs/heroSection.png'
import ProgramsCardimage from '/imgs/ProgramsImage.jpeg'
import { motion } from 'framer-motion'
import { pageTransition } from '../animation'
import { ProgramsCard } from '../components'

const Programs = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='max-w-7xl mx-auto'
    >
      <img src={img} alt='hero' className='w-full' />
      <div className='text-center font-semibold pt-16 pb-4 md:py-16 px-4 text-xl'>
        <p>
          يقدم المعهد مجموعة من التخصصات في مجال الطاقة المتجددة التي تلبي حاجة
          مشاريع الطاقة في المملكة
        </p>
        <p>
          يمكنك الآن التقدم بطلب للانضمام إلى أحد برامجنا التدريبية ، الرجاء
          اختيار البرنامج المناسب لك:
        </p>
      </div>
      <div className='flex flex-wrap gap-6 justify-center max-w-5xl mx-auto py-10 px-4'>
        {programsData.map((program) => (
          <ProgramsCard
            key={program.id}
            programId={program.id}
            imge={ProgramsCardimage}
            title={program.programsName}
            abouTheProgram={program.programCardDescription}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Programs
