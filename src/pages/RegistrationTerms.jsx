import { RegistrationFeaturesData, RegistrationTermsData } from '../data'
import { motion } from 'framer-motion'
import { pageTransition } from '../animation'

const RegistrationTerms = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='max-w-5xl mx-auto py-10 pt-14 px-5'
    >
      <>
        <div className='mb-14'>
          <h2 className='text-lg md:text-xl lg:text-2xl font-medium mb-6'>
            وضع المعهد السعودى التقني للطاقة المتجددة عدة شروط والتي يجب
            نوافراها في المقبلين على التسجيل وهذه الشروط تتمثل في :
          </h2>
          <ul className='my-4 list-decimal px-2 flex flex-col gap-1.5'>
            {RegistrationTermsData.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='mb-12'>
          <h1 className='text-lg md:text-xl lg:text-2xl font-medium max-w-[1000px] mb-6'>
            مميزات التسجيل في المعهد السعودى التقني للطاقة المتجددة :
          </h1>
          <ul className='my-4 list-decimal px-2 flex flex-col gap-1.5'>
            {RegistrationFeaturesData.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </>
    </motion.div>
  )
}

export default RegistrationTerms
