import { pageTransition } from '../animation'
import { HeroPhoto } from '../components'
import { partners } from '../data'
import photo from '/imgs/heroSection.png'
import { motion } from 'framer-motion'

const Partners = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='md:py-10'
    >
      <HeroPhoto photo={photo} title='شركاء النجاح' />
      <div className='max-w-6xl md:mx-auto py-14 px-4 text-center'>
        <div className='flex flex-col items-center gap-6'>
          <h1 className='text-2xl text-darkBlue-900 border-b-2 border-darkBlue-900 w-fit py-2 mx-auto'>
            شركاء النجاح
          </h1>
          <p className='max-w-3xl mx-auto'>
            يعتمد هذا النوع من التدريب على مشاركة قطاع الأعمال في أعمال التدريب
            من خلال تحديد المهارات المطلوبة وتطوير المناهج وأساليب الجودة
            والمشاركة في اختيار مزود الخدمة، وتتولى المؤسسة العامة للتدريب
            التقني توفير المباني، بينما يسهم صندوق الموارد البشرية في تغطية جزء
            من تكلفة التدريب.
          </p>
        </div>
      </div>
      <div className='py-10 flex flex-wrap justify-center items-center max-w-5xl m-auto gap-10 px-6 '>
        {partners.map((item, i) => (
          <a
            key={i}
            href={item.url}
            className='h-[150px] w-[200px] flex items-center justify-center'
          >
            <img
              key={i}
              src={item.img}
              alt='partner'
              className='max-h-[150px] object-contain'
            />
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default Partners
