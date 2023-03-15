import { HeroPhoto } from '../components'
import photo from '/imgs/heroSection.png'
import { TeamMembersData } from '../data'
import { motion } from 'framer-motion'
import { pageTransition } from '../animation'

const Team = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='py-10'
    >
      <HeroPhoto photo={photo} title={'فريق مجلس الإدارة'} />
      <div className='max-w-6xl md:mx-auto my-14 px-4 text-center md:text-right'>
        <h1 className='text-2xl text-darkBlue-900 border-b-2 border-darkBlue-900 w-fit my-5 pb-2 px-6 md:pl-6 md:pr-3 mx-auto md:mx-0'>
          فريق مجلس الإدارة{' '}
        </h1>
        <p>
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
      </div>

      <div className='flex flex-wrap-reverse items-center justify-center gap-20 my-10 max-w-5xl mx-auto'>
        {TeamMembersData.map((item) => (
          <div
            className='w-[220px] justify-center flex items-center flex-col gap-3'
            key={item.id}
          >
            <img src={item.img} alt='' />
            <h1 className=''>{item.name}</h1>
            <p className=''>{item.jobTitle}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Team
