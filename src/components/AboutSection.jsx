import about from '/imgs/about2.jpg'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className='flex gap-14 max-w-6xl mx-auto flex-col items-center md:flex-row text-darkBlue-900 my-10 md:my-20 px-4'>
      {/* Data */}
      <motion.div
        initial={{ x: 50 }}
        whileInView={{ x: 0, transition: { duration: 1, ease: 'easeOut' } }}
        viewport={{ once: true }}
        className='flex-1'
      >
        <div className='max-w-xl mr-auto flex flex-col gap-10'>
          <h3 className='text-2xl md:text-3xl font-semibold'>عن المعهد</h3>
          <p className='leading-7 text-lg pr-2 text-justify'>
            يعمل المعهد وفق استراتيجية معاهد الشركات الاستراتيجية للتدريب
            المبتدئ بالتوظيف على تخصصات الطاقة المتجددة لسد احتياج الشركاء
            الاستراتيجين المشغلين لمشروعات الطاقة المتجددة في المملكة. ويعتمد
            التدريب على مشاركة قطاع الأعمال في العملية التدريبية من خلال تحديد
            المهارات وتطوير المناهج التدريبية وأساليب الجودة و المشاركة في
            اختيار مزود الخدمات التدريبية.
          </p>
          <Link
            to='/about'
            className='flex items-center gap-2 py-2 px-12 text-lg bg-blue-800 transition hover:bg-blue-900 group text-white w-fit rounded-md'
          >
            المزيد
            <BsArrowLeft className='text-xl group-hover:-translate-x-1 transition' />
          </Link>
        </div>
      </motion.div>
      {/* Image */}
      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0, transition: { duration: 1, ease: 'easeOut' } }}
        viewport={{ once: true }}
        className='flex-1 p-1 rounded-lg bg-gradient-to-br overflow-hidden from-darkBlue-900 to-[#27AAE1] w-full'
      >
        <img
          src={about}
          alt='workers'
          className='object-cover object-bottom w-full h-full p-4 md:p-8 rounded-lg overflow-hidden bg-white'
        />
      </motion.div>
    </section>
  )
}

export default AboutSection
