import { valueImages } from '../data'
import { motion } from 'framer-motion'
import { child, parent } from '../animation'

const ValuesSection = () => {
  return (
    <section className='bg-blue-900 px-4 py-12 lg:py-20'>
      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row bg-blue-900 gap-8'>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeOut' },
          }}
          viewport={{ once: true }}
          className='flex-1'
        >
          <div className='flex flex-col gap-6 max-w-md text-white'>
            <h4 className='py-2 px-4 text-xl w-fit lg:text-2xl font-semibold border-b-2 border-[#27AAE1]'>
              قيمنا
            </h4>
            <p className='leading-7 text-justify'>
              يستهدف سباير الشباب الطموح للعمل في قطاع الطاقة المتجددة والمساهمة
              في جعل المملكة العربية السعودية مصدرا رياديا ومستداما لتزويد
              العالم بالطاقة النظيفة. وبالرغم من تنوع أساليب التدريب ووجود
              المنافسة في هذا المجال إلا أن سباير سيكون متمسكا بالقيم التي وضعت
              لتحقيق رؤية ورسالة المعهد.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={parent}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='flex-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-16'
        >
          {valueImages.map((val) => (
            <motion.div
              variants={child}
              className='flex flex-col items-center justify-center gap-3 w-40'
              key={val.title}
            >
              <img
                src={val.img}
                alt={val.title}
                className='w-12 h-12 object-cover'
              />
              <p className='text-white'>{val.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ValuesSection
