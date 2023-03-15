import { contactData } from '../data'
import { useForm } from 'react-hook-form'
import useSWRMutation from 'swr/mutation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactSection = () => {
  const sendRequest = async (url, { arg }) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(arg),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err))
  }

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  const { trigger, isMutating } = useSWRMutation(
    'https://spire.edu.sa/CallUs',
    sendRequest
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const result = await trigger(data)
      reset()
      result?.email
        ? toast.success('تم إرسال الرسالة بنجاح, شكراً لتواصلك معنا')
        : toast.error(
            'حدث خطأ! قم بتغيير بعض الأشياء لأعلى وحاول الإرسال مرة أخرى.'
          )
    } catch (e) {
      console.log(e)
      toast.error(
        'حدث خطأ! قم بتغيير بعض الأشياء لأعلى وحاول الإرسال مرة أخرى.'
      )
    }
  }
  return (
    <div className='bg-no-repeat bg-home-pattern'>
      <div className='bg-white/90'>
        <section className='flex flex-col lg:flex-row justify-center gap-0 md:gap-10'>
          <div className='flex-1'>
            <div className='max-w-xl mx-auto px-4 flex flex-col my-16 gap-8'>
              <div className='flex flex-col gap-6'>
                <h3 className='text-2xl md:text-3xl font-bold text-blue-900'>
                  اتصل بنا
                </h3>
                <p className=''>ابق على تواصل معنا لاي استفسارات</p>
              </div>
              <div className='flex items-start justify-between md:justify-start md:gap-x-6 md:gap-y-4 flex-wrap flex-col md:flex-row gap-y-2 w-full'>
                {contactData.map((item) => (
                  <a
                    href={item.url}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2'
                    key={item.id}
                  >
                    <span className='w-7 h-7 p-1.5 rounded-full bg-darkBlue-800 flex items-center justify-center'>
                      <item.icon className='text-white text-sm' />
                    </span>
                    <span className='text-sm text-darkBlue-900'>
                      {item.text}
                    </span>
                  </a>
                ))}
              </div>
              <form
                className='flex flex-col gap-4 w-full'
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className='flex flex-col gap-1'>
                  <label htmlFor='name' className=''>
                    الأسم
                  </label>
                  <input
                    type='text'
                    className={`rounded-md py-1.5 px-6 border outline-none ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                    placeholder='مثال: محمد مصطفى حسن'
                    {...register('name', {
                      required: { value: true, message: 'هذا الحقل مطلوب' },
                    })}
                  />
                  {errors.name && (
                    <small className='text-xs text-red-500'>
                      {errors.name.message}
                    </small>
                  )}
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>البريد الإلكتروني</label>
                  <input
                    type='text'
                    placeholder='Mohamed.33@gmail.com'
                    className={`rounded-md py-1.5 px-6 border outline-none ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    {...register('email', {
                      required: { value: true, message: 'هذا الحقل مطلوب' },
                      pattern: {
                        value: emailRegex,
                        message: 'البريد الاكتروني غير صالح',
                      },
                    })}
                  />
                  {errors.email && (
                    <small className='text-xs text-red-500'>
                      {errors.email.message}
                    </small>
                  )}
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor=''>نص الرسالة</label>
                  <textarea
                    rows='4'
                    type='text'
                    className={`rounded-md py-1.5 px-6 border outline-none resize-none ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    {...register('message', {
                      required: { value: true, message: 'هذا الحقل مطلوب' },
                    })}
                  />
                  {errors.message && (
                    <small className='text-xs text-red-500'>
                      {errors.message.message}
                    </small>
                  )}
                </div>
                <button
                  disabled={isMutating}
                  className='bg-gradient-to-r from-darkBlue-900 to-[#6483FA] w-fit mx-auto py-2 text-lg px-32 rounded-md text-white'
                  type='submit'
                >
                  إرسال
                </button>
              </form>
            </div>
          </div>
          <ToastContainer
            closeButton={true}
            closeOnClick={true}
            position='bottom-center'
            rtl={true}
          />
          <div className='flex-1'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.5604689241677!2d40.18947991444107!3d29.963318829356734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1572bbd60caf4b7f%3A0x34f8dc1d6e89c9ed!2z2KfZhNmF2LnZh9ivINin2YTYtdmG2KfYudmKINin2YTYq9in2YbZiNmKINio2KfZhNis2YjZgQ!5e0!3m2!1sen!2seg!4v1670700652919!5m2!1sen!2seg'
              className='border-none w-full h-[300px] md:h-full'
              allowFullScreen=''
              loading='lazy'
              title='spire address'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactSection
