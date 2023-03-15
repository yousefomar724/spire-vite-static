import { Link, useLocation, useParams } from 'react-router-dom'
import { pageTransition } from '../animation'
import { tracksData } from '../data'
import photo from '/imgs/heroSection.png'
import TrainingPhoto from '/imgs/untitled.png'
import img from '/imgs/value2.png'
import img2 from '/imgs/value3.png'
import { motion } from 'framer-motion'

const SingleTrack = () => {
  const data = useParams()
  const { pathname } = useLocation()
  const selcetedTrack = tracksData.find(
    (article) => article.id === +data.trackId
  )

  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <div className='max-w-7xl mx-auto'>
        <img src={photo} alt='hero' className='w-full' />
      </div>
      <div className='px-4'>
        <p className='text-lg font-semibold max-w-3xl m-auto text-center my-10 '>
          يوفر سباير مجموعة شاملة من برامج التدريب لدعم متطلبات التدريب والتطوير
          لدى قطاع الطاقة المتجددة. ويستثمر المعهد بشكل نوعي في أحدث معدات
          التدريب لتلبية متطلبات صناعة الطاقة المتجددة والمستدامة في المملكة
          العربية السعودية.
        </p>

        <h1 className='text-lg font-semibold text-center my-10'>
          المسارات التدريبية المتاحة
        </h1>

        <div className='max-w-6xl mx-auto flex justify-around items-center mb-10 flex-col md:flex-row gap-10 md:gap-0'>
          <Link
            to='/track/1'
            className={`bg-[url('/imgs/Track_img.png')] w-[300px] h-[200px] bg-cover bg-center rounded-2xl bg-no-repeat ${
              pathname === '/track/1' ? 'scale-110 shadow-md' : ''
            }`}
          >
            <div className='bg-blue-400 w-full h-full rounded-2xl flex justify-center items-center text-center'>
              <p className='text-white font-medium text-xl'>مسار الدبلوم</p>
            </div>
          </Link>
          <Link
            to='/track/2'
            className={`bg-[url('/imgs/Track_img2.png')] w-[300px] h-[200px] bg-cover bg-center rounded-2xl ${
              pathname === '/track/2' ? 'scale-110 shadow-md' : ''
            }`}
          >
            <div className='bg-blue-400 w-full h-full rounded-2xl flex justify-center items-center text-center'>
              <p className='text-white font-medium text-xl'>
                مسار التطوير المهني والشهادات الاحترافية
              </p>
            </div>
          </Link>
          <Link
            to='/track/3'
            className={`bg-[url('/imgs/Track_img3.png')] w-[300px] h-[200px] bg-cover bg-center rounded-2xl bg-no-repeat ${
              pathname === '/track/3' ? 'scale-110 shadow-md' : ''
            }`}
          >
            <div className='bg-blue-400 w-full h-full rounded-2xl flex justify-center items-center text-center'>
              <p className='text-white font-medium text-xl'>
                مسار حلول التدريب الموجه
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className='max-w-5xl mx-auto px-4 flex flex-col gap-8 leading-8 py-20 text-center md:text-start'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-medium text-darkBlue-900 border-b-2 py-1 mb-4 border-blue-900 w-fit'>
            {selcetedTrack.title}
          </h2>
          {selcetedTrack.goal ? (
            <div className='flex flex-col gap-2'>
              <div className='flex gap-3 w-fit items-center mx-auto md:m-0'>
                <img
                  src={img}
                  alt=''
                  className='object-contain p-2 w-10 h-10 bg-blue-900 rounded-full'
                />
                <h3 className='text-xl text-darkBlue-900'>الهدف العام</h3>
              </div>
              <p>{selcetedTrack.goal}</p>
            </div>
          ) : null}
        </div>

        {selcetedTrack.trainingPeriod && (
          <div className='flex flex-col gap-2'>
            <div className='flex gap-3 w-fit items-center mx-auto md:m-0'>
              <img src={TrainingPhoto} alt='' className='object-contain' />
              <h3 className='text-xl text-darkBlue-900'>
                مدة {selcetedTrack.title}
              </h3>
            </div>
            <p>{selcetedTrack.trainingPeriod}</p>
          </div>
        )}
        {selcetedTrack.target && (
          <div className='flex flex-col gap-2'>
            <div className='flex gap-3 w-fit items-center mx-auto md:m-0'>
              <img
                src={img2}
                alt=''
                className='object-contain p-2 w-10 h-10 bg-blue-900 rounded-full'
              />
              <h3 className='text-xl text-darkBlue-900'>الفئة المستهدفة</h3>
            </div>
            <p>{selcetedTrack.target}</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default SingleTrack
