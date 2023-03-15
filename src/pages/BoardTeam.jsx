import { pageTransition } from '../animation'
import { HeroPhoto } from '../components'
import { baordTeamData } from '../data'
import hero from '/imgs/heroSection.png'
import { motion } from 'framer-motion'

const BoardTeam = () => {
  return (
    <motion.main
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='md:py-10'
    >
      <HeroPhoto photo={hero} title='فريق مجلس الإدارة ' />
      <section className='max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 px-4 py-12 lg:py-20'>
        <h3 className='text-2xl lg:text-3xl text-center font-semibold text-darkBlue-900 py-2 border-b-2 border-[#27AAE1]'>
          فريق مجلس الإدارة
        </h3>
        <p className='text-center'>
          تم تشكيل مجلس الإدارة من ممثلين عن الشركات المشغّلة لمشاريع الطاقة
          المتجددة في المملكة بموجب موافقة صاحب السمو الملكي وزير الطاقة بالخطاب
          رقم 4078/43.2.1 وتاريخ 29/8/1443هـ ويعمل المعهد وفق استراتيجية معاهد
          الشراكات الاستراتيجية للتدريب المبتدئ بالتوظيف على تخصصات الطاقة
          المتجددة لسد احتياج الشركاء الاستراتيجيين المشغلة لمشروعات الطاقة
          المتجددة في المملكة. تطوير المعارف والمهارات الفنية للقوى العاملة
          السعودية بغرض توطين الوظائف الإدارية والفنية في مجالات الطاقة المتجددة
          وتقنياتها وخدماتها اللوجستية، وتلبية احتياجات القطاع الخاص المشغّل
          لمشاريع الطاقة المتجددة في المملكة من القوى العاملة.
        </p>
        <div className='flex items-center justify-center gap-x-12 md:gap-y-16 mt-6 gap-y-10 flex-wrap'>
          {baordTeamData.map((member) => (
            <div
              className='flex items-center justify-center flex-col gap-1 w-56'
              key={member.id}
            >
              <img
                src={member.img}
                alt={member.name}
                className='object-cover object-center w-full h-56'
              />
              <div className='p-2 bg-[#E8F0FE] w-full flex flex-col items-center justify-center gap-2 text-center'>
                <h5 className='text-lg font-semibold'>{member.name}</h5>
                <p className='text-gray-700 text-sm'>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  )
}

export default BoardTeam
