import { Link } from 'react-router-dom'
import ceo from '/imgs/ceo.png'
import { motion } from 'framer-motion'

const CEOSection = () => {
  return (
    <section className='lg:relative static max-w-6xl mx-auto flex flex-col lg:flex-row px-4 items-center lg:justify-end justify-center gap-10 lg:py-16 py-12'>
      {/* Image */}
      <div className='lg:absolute relative flex-1 lg:flex-auto lg:right-10'>
        <motion.div
          initial={{ x: 40, y: -40 }}
          whileInView={{
            x: 0,
            y: 0,
            transition: { duration: 1, ease: 'easeOut' },
          }}
          viewport={{ once: true }}
          className='absolute w-32 h-32 lg:w-56 lg:h-56 rounded-xl -top-4 -right-4 lg:-top-8 lg:-right-8 bg-gradient-to-br from-[#27AAE1] to-[#273D90]'
        ></motion.div>
        <img
          src={ceo}
          alt='ceo'
          className='lg:w-[350px] md:w-[300px] w-[250px] rounded-xl z-10 relative'
        />
        <motion.div
          initial={{ x: -40, y: 40 }}
          whileInView={{
            x: 0,
            y: 0,
            transition: { duration: 1, ease: 'easeOut' },
          }}
          viewport={{ once: true }}
          className='absolute w-32 h-32 lg:w-56 lg:h-56 rounded-xl lg:-bottom-8 -bottom-4 -left-4 lg:-left-8 bg-gradient-to-br from-[#27AAE1] to-[#273D90]'
        ></motion.div>
      </div>
      {/* Content */}
      <div className='flex items-center lg:max-w-[800px] w-auto flex-col justify-end gap-4 bg-blue-900 lg:py-20 lg:pr-56 xl:pr-28 md:p-10 px-4 py-8  rounded-lg'>
        <h3 className='text-2xl text-center lg:text-3xl text-white font-semibold'>
          كلمة رئيس مجلس الإدارة
        </h3>
        <p className='leading-7 text-gray-200 mt-4 text-justify'>
          يسعدني بالإنابة عن شركاء النجاح أن أرحب بكم في الموقع الرسمي للمعهد
          السعودي التقني للطاقة المتجددة (سباير). وأود بداية أن أتقدم بالشكر
          الجزيل لصاحب السمو الملكي الأمير عبد العزيز بن سلمان بن عبد العزيز؛
          وزير الطاقة، على موافقته لانضمام شركاء النجاح كأعضاء في مجلس الإدارة،
          وإلى صاحب السمو الملكي الأمير فيصل بن نواف بن عبد العزيز؛ أمير منطقة
          الجوف، رئيس مجلس إدارة جمعية الجوف للطاقة المتجددة على دعمه واهتمامه
          بتأسيس المعهد في منطقة الجوف، كما أتوجه بالشكر لمعالي محافظ المؤسسة
          العامة للتدريب التقني والمهني الدكتور أحمد بن فهد الفهيد؛ على متابعته
          ودعمه لمراحل الترخيص وتهيئة البنية التحتية..{' '}
          <Link to='/ceo' className='text-white font-semibold self-end inline'>
            قراءة المزيد
          </Link>
        </p>
      </div>
    </section>
  )
}

export default CEOSection
