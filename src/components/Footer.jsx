import { Link } from 'react-router-dom'
import { IoLocationSharp } from 'react-icons/io5'
import { IoIosMail } from 'react-icons/io'
import { CgPhone } from 'react-icons/cg'
import { footerLinksData, socialMedialinksData } from '../data'
import logo from '/imgs/logo.png'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { child2, parent2 } from '../animation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    reset()
    toast.success('تم الاشتراك في النشرة البريدية بنجاح')
  }
  return (
    <footer className='bg-gradient-to-r from-blue-800 to-darkBlue-900'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:item-start pt-3'>
        <div className='flex flex-col justify-center gap-5 items-center px-5'>
          <img src={logo} alt='logo' className='max-w-[100px] mx-auto' />
          <h3 className='text-base  md:text-xl font-semibold text-white'>
            المعهد السعودي التقني للطاقة المتجددة
          </h3>
          <form
            className='w-full flex flex-col justify-center items-center lg:items-start gap-2'
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className='text-gray-200'>
              انضم إلى نشرتنا الإخبارية ليصلك كل جديد
            </label>
            <div className='w-[300px] lg:w-full flex flex-col gap-1'>
              <label htmlFor='email' className='relative w-[300px] lg:w-full'>
                <input
                  type='email'
                  dir='ltr'
                  {...register('email', {
                    required: { value: true, message: 'هذا الحقل مطلوب' },
                  })}
                  className={`w-full p-[7px] text-darkblue-900 rounded-lg outline-none bg-transparent2 border ${
                    errors.email ? 'border-red-500' : 'border-white'
                  }`}
                />
                <button
                  type='submit'
                  className='text-white font-semibold py-2 px-4 bg-[#27AAE1] overflow-hidden rounded-r-lg absolute text-base right-0 inset-y-0'
                >
                  اشترك
                </button>
              </label>
              {errors.email ? (
                <small className='text-red-500 text-xs text-left w-full'>
                  {errors.email.message}
                </small>
              ) : null}
            </div>
          </form>
        </div>
        <ToastContainer
          closeButton={true}
          closeOnClick={true}
          position='bottom-center'
          rtl={true}
        />
        <ul className=' flex flex-col items-center justify-center lg:items-start gap-4 my-6'>
          <li>
            <h3 className='text-xl font-medium text-white'>أبرز الصفحات</h3>
          </li>
          <motion.div
            variants={parent2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col gap-2'
          >
            {footerLinksData.footerLinksOne.map((link) => (
              <motion.li
                variants={child2}
                key={link.id}
                className='text-center md:text-right'
              >
                <Link
                  to={link.route}
                  key={link.id}
                  className='text-gray-300 text-sm hover:text-white transition'
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.div>
        </ul>
        <ul className=' flex flex-col items-center justify-center lg:items-start gap-4 my-6'>
          <li>
            <h3 className='text-xl font-medium text-white'>روابط مهمة</h3>
          </li>
          <motion.div
            variants={parent2}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col gap-2'
          >
            {footerLinksData.footerLinksTwo.map((link) => (
              <motion.li
                variants={child2}
                key={link.id}
                className='text-center md:text-right'
              >
                <Link
                  to={link.route}
                  className='text-gray-300 text-sm hover:text-white transition'
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.div>
        </ul>
        <div className='flex flex-col items-center  justify-center lg:items-start gap-4 px-5  pt-5 pb-3'>
          <p className='text-white text-lg'>للتواصل معنا </p>
          <div className='flex flex-col items-center md:items-start gap-2'>
            <a
              href='tel:0507648007'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 text-sm text-gray-300 hover:text-white transition'
            >
              <div className='bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full'>
                <CgPhone className='text-lg text-blue-900' />
              </div>
              0507648007
            </a>
            <a
              href='mailto:Info@spire.edu.sa'
              target='_blank'
              rel='noreferrer'
              className='flex items-center text-gray-300 text-sm gap-2 hover:text-white transition'
            >
              <div className='bg-white text-blue-900 transition w-[25px] h-[25px] flex justify-center items-center rounded-full'>
                <IoIosMail className='text-lg' />
              </div>
              Info@spire.edu.sa
            </a>
            <a
              href='https://goo.gl/maps/saMHPhC8Lt9Xkb6T6'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 text-sm text-gray-300 hover:text-white transition'
            >
              <div className='bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full'>
                <IoLocationSharp className='text-lg text-blue-900' />
              </div>
              7908, مخطط القديم,سكاكا 72341
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col text-sm items-center gap-5 lg:flex-row justify-around border-t-2 border-[#D9D9D91C] text-center p-4 text-white'>
        <p>
          &#169; حقوق الطبع محفوظة لدى المعهد السعودي التقني للطاقة المتجددة{' '}
          {new Date().getFullYear()}
        </p>
        <div className='flex justify-around items-center gap-2 md:gap-3 max-w-[275px] lg:max-w-[375px]'>
          {socialMedialinksData.map((link) => (
            <a
              href={link.url}
              className='flex items-center justify-center gap-2 text-gray-300 hover:text-white transition'
              key={link.id}
              target='_blank'
              rel='noreferrer'
            >
              <span className='text-xs'>{link.title}</span>
              <link.icon className='w-5 h-5' />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
