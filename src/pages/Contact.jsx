import image from '/imgs/HeroPhotoContactsUs.jpeg'
import { IoLocationSharp } from 'react-icons/io5'
import { IoIosMail } from 'react-icons/io'
import { CgPhone } from 'react-icons/cg'
import { useForm } from 'react-hook-form'
import { pageTransition } from '../animation'
import { motion } from 'framer-motion'

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <div className='max-w-7xl mx-auto h-[350px] overflow-hidden'>
        <img src={image} className='h-[500px] w-full' alt='' />
      </div>
      <div className='flex gap-4 max-w-6xl flex-wrap px-4 mx-auto'>
        <div className='flex flex-1 flex-col gap-10 mb-4 mt-16 md:my-16'>
          <p className='underline underline-offset-8 decoration-blue-900 text-blue-900 font-medium decoration-2 text-xl'>
            وسائل الاتصال
          </p>
          <p className='text-blue-900 text-2xl'>
            المعهد السعودي التقني للطاقة المتجددة:
          </p>
          <div className='flex flex-col justify-center items-start gap-4'>
            <a
              href='https://goo.gl/maps/ELHCXJEAFPuesZeP7'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2'
            >
              <div className='bg-blue-900 w-[30px] h-[30px] flex justify-center items-center rounded-full'>
                <IoLocationSharp className='text-lg text-white' />
              </div>
              7908, مخطط القديم,سكاكا 72341
            </a>
            <a
              href='mailto:info@spire.edu.sa'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2'
            >
              <div className='bg-blue-900 w-[30px] h-[30px] flex justify-center items-center rounded-full'>
                <IoIosMail className='text-lg text-white' />
              </div>
              Info@spire.edu.sa
            </a>
            <a
              href='tel:0507648007'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2'
            >
              <div className='bg-blue-900 w-[30px] h-[30px] flex justify-center items-center rounded-full'>
                <CgPhone className='text-lg text-white' />
              </div>
              0507648007
            </a>
          </div>
        </div>
        <div className='flex-1 w-full py-12 lg:px-10'>
          <div className='flex justify-center flex-col gap-8 max-w-2xl mx-auto'>
            <p className='text-2xl text-blue-900 font-medium'>
              ارسل رسالة أو استفسار
            </p>
            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-1'>
                <label>الاسم</label>
                <input
                  {...register('name', {
                    required: { value: true, message: 'هذا الحقل مطلوب' },
                  })}
                  type='name'
                  className={`border rounded outline-none p-2 ${
                    errors?.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors?.name && (
                  <small className='text-red-500 text-xs'>
                    {errors?.name.message}
                  </small>
                )}
              </div>
              <div className='flex flex-col my-5 gap-1'>
                <label>البريد الالكتروني</label>
                <input
                  {...register('email', {
                    required: { value: true, message: 'هذا الحقل مطلوب' },
                  })}
                  type='email'
                  className={`border rounded outline-none p-2 ${
                    errors?.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors?.email && (
                  <small className='text-red-500 text-xs'>
                    {errors?.email.message}
                  </small>
                )}
              </div>
              <div className='flex flex-col my-5 gap-1'>
                <label>نص الرسالة</label>
                <textarea
                  rows={'4'}
                  {...register('message', {
                    required: { value: true, message: 'هذا الحقل مطلوب' },
                  })}
                  className={`border rounded outline-none p-2 ${
                    errors?.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors?.message && (
                  <small className='text-red-500 text-xs'>
                    {errors?.message.message}
                  </small>
                )}
              </div>
              <div className='flex justify-center items-center'>
                <button
                  type='submit'
                  className='cursor-pointer bg-gradient-to-r from-darkBlue-900  to-blue-700 rounded py-3 px-20 text-white'
                >
                  إرسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
