import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { programsData } from '../data'
import { FiCheck } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { pageTransition } from '../animation'

const Registration = () => {
  const [isActive, setActive] = useState(false)
  const [year, setYear] = useState([])

  const nav = useNavigate()

  useEffect(() => {
    for (let index = 2000; index < 2023; index++) {
      setYear((prev) => [...prev, index])
    }
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    setActive(true)
  }

  function closeAlert() {
    setActive(false)
    nav('/', { replace: true })
  }

  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='pt-10'
    >
      <div
        className={
          isActive
            ? 'fixed inset-x-0 top-0 w-full h-full bg-gray-500/50 visible'
            : 'fixed inset-x-0 top-0 w-full h-full bg-slate-500 invisible'
        }
      >
        <div className='rounded-xl border bg-white border-gray-300 p-4 shadow-xl max-w-[300px]  md:max-w-[500px] lg:max-w-[600px] mx-auto fixed inset-x-0 top-40 z-40'>
          <div className='flex gap-4 justify-center items-center'>
            <div className='flex flex-col justify-center items-center p-5'>
              <div className='bg-[#ACD365] w-[35px] h-[35px] lg:w-[85px] lg:h-[85px] mr-2 rounded-full flex justify-center items-center'>
                <FiCheck className='text-5xl text-white' />
              </div>
              <p className='mt-5 text-3xl text-center'>نجاح!</p>
              <p className='mt-5 text-center'>
                تم إرسال طلبك بنجاح، طلب التقدم الخاص بك قيد المراجعة
              </p>
              <button
                onClick={closeAlert}
                className='cursor-pointer bg-gradient-to-b from-[#002B5B]  to-[#26A9E0] rounded p-[10px] w-[200px] text-white mt-7 mb-2'
              >
                تم
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center max-w-[780px] mx-auto my-2'>
        <div className='bg-blue-900 w-[250px] md:w-[350px] lg:w-[400px] h-[56px] text-center'>
          <p className='py-4 text-white text-xl'>نموذج التسجيل</p>
        </div>
      </div>
      <div className='px-4 lg:px-10 flex flex-col gap-4'>
        <h1 className='text-lg md:text-xl lg:text-3xl font-semibold lg:font-medium mt-2'>
          خطوات التسجيل
        </h1>
        <p>يرجى تعبئة البيانات الآتية بشكل صحيح:</p>
        <div className='flex w-full justify-center max-w-4xl mx-auto'>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <div className='mx-auto my-6 lg:px-10 text-center'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-semibold lg:font-medium'>
                معلومات شخصية
              </h1>
            </div>
            <div className='flex flex-col lg:flex-row md:flex-row gap-5'>
              <div className='flex-1 flex flex-col gap-2'>
                <label>الاسم الاول</label>
                <input
                  {...register('firstName', {
                    required: { value: true, message: 'هذا الحقل مطلوب' },
                  })}
                  className={`border rounded outline-none p-2 ${
                    errors?.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors?.firstName && (
                  <small className='text-red-500 text-xs'>
                    {errors?.firstName.message}
                  </small>
                )}
              </div>
              <div className='flex-1 flex flex-col gap-2'>
                <label>الاسم الاخير</label>
                <input
                  {...register('lastName', {
                    required: { value: true, message: 'هذا الحقل مطلوب' },
                  })}
                  className={`border rounded outline-none p-2 ${
                    errors?.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors?.lastName && (
                  <small className='text-red-500 text-xs'>
                    {errors?.lastName.message}
                  </small>
                )}
              </div>
            </div>
            <div className='flex flex-col my-3 gap-2'>
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
            <div className='flex flex-col my-3 gap-2'>
              <label>رقم الهوية الوطنية</label>
              <input
                {...register('nationalId', {
                  required: { value: true, message: 'هذا الحقل مطلوب' },
                })}
                type='nationalId'
                className={`border rounded outline-none p-2 ${
                  errors?.nationalId ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors?.nationalId && (
                <small className='text-red-500 text-xs'>
                  {errors?.nationalId.message}
                </small>
              )}
            </div>
            <div className='flex flex-col my-3 gap-2'>
              <label>رقم الجوال</label>
              <input
                {...register('phone', {
                  required: { value: true, message: 'هذا الحقل مطلوب' },
                })}
                className={`border rounded outline-none p-2 ${
                  errors?.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors?.phone && (
                <small className='text-red-500 text-xs'>
                  {errors?.phone.message}
                </small>
              )}
            </div>
            <div className='flex flex-col my-3 gap-2'>
              <label>تاريخ ميلادك</label>
              <input
                type='date'
                {...register('birthDay', {
                  required: { value: true, message: 'هذا الحقل مطلوب' },
                })}
                className={`border rounded outline-none p-2 ${
                  errors?.birthDay ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors?.birthDay && (
                <small className='text-red-500 text-xs'>
                  {errors?.birthDay.message}
                </small>
              )}
            </div>
            <div className='flex flex-col lg:flex-row md:flex-row gap-5 my-3'>
              <div className='flex-1 flex flex-col gap-2 '>
                <label>المحافظة</label>
                <input
                  {...register('state', {
                    required: { value: true, message: 'هذا الحقل مطلوب' },
                  })}
                  className={`border rounded outline-none p-2 ${
                    errors?.state ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors?.state && (
                  <small className='text-red-500 text-xs'>
                    {errors?.state.message}
                  </small>
                )}
              </div>
              <div className='flex-1 flex flex-col gap-2'>
                <label>المدينة</label>
                <input
                  {...register('City', {
                    required: { value: true, message: 'هذا الحقل مطلوب' },
                  })}
                  className={`border rounded outline-none p-2 ${
                    errors?.City ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors?.City && (
                  <small className='text-red-500 text-xs'>
                    {errors?.City.message}
                  </small>
                )}
              </div>
            </div>
            <div className='flex flex-col my-3 gap-2'>
              <label>العنوان</label>
              <input
                {...register('address', {
                  required: { value: true, message: 'هذا الحقل مطلوب' },
                })}
                className={`border rounded outline-none p-2 ${
                  errors?.address ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors?.address && (
                <small className='text-red-500 text-xs'>
                  {errors?.address.message}
                </small>
              )}
            </div>
            <div className='flex flex-col pl-28 my-3 gap-2'>
              <label>حدد البرنامج التدريبي</label>
              <select
                {...register('program', {
                  required: { value: true, message: 'هذا الحقل مطلوب' },
                })}
                className={`border rounded outline-none p-3 ${
                  errors?.program ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                {programsData.map((program) => (
                  <option key={program.id} value={program.programsName}>
                    {program.programsName}
                  </option>
                ))}
              </select>
              {errors?.program && (
                <small className='text-red-500 text-xs'>
                  {errors?.program.message}
                </small>
              )}
            </div>
            <div className='flex flex-col lg:flex-row md:flex-row gap-5 my-3'>
              <label className='mx-5'>النوع</label>
              <div className=' flex gap-2 '>
                <input type='radio' {...register('gender')} value='male' />
                <label>ذكر</label>
              </div>
              <div className='flex  gap-2'>
                <input type='radio' {...register('gender')} value='female' />
                <label>انثي</label>
              </div>
            </div>
            <div className='max-w-7xl mx-auto my-10 px-5 lg:px-10 text-center'>
              <h1 className='text-lg md:text-xl lg:text-3xl font-semibold  lg:font-medium max-w-[1000px]'>
                معلومات الدراسة{' '}
              </h1>
            </div>
            <div className='flex flex-col my-3 gap-2'>
              <label>آخر مؤهل علمي لديك</label>
              <input
                {...register('scientificQualification', {
                  required: { value: true, message: 'هذا الحقل مطلوب' },
                })}
                type='scientificQualification'
                className={`border rounded outline-none p-2 ${
                  errors?.scientificQualification
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
              {errors?.scientificQualification && (
                <small className='text-red-500 text-xs'>
                  {errors?.scientificQualification.message}
                </small>
              )}
            </div>
            <div className='flex flex-col my-3 gap-2'>
              <label>المدرسة الثانوية</label>
              <input
                {...register('highSchool', {
                  required: { value: true, message: 'هذا الحقل مطلوب' },
                })}
                type='highSchool'
                className={`border rounded outline-none p-2 ${
                  errors?.highSchool ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors?.highSchool && (
                <small className='text-red-500 text-xs'>
                  {errors?.highSchool.message}
                </small>
              )}
            </div>
            <div className='flex flex-col my-3 gap-2'>
              <label>معدل المدرسة الثانوية</label>
              <input
                {...register('highSchoolRate', {
                  required: { value: true, message: 'هذا الحقل مطلوب' },
                })}
                type='highSchoolRate'
                className={`border rounded outline-none p-2 ${
                  errors?.highSchoolRate ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors?.highSchoolRate && (
                <small className='text-red-500 text-xs'>
                  {errors?.highSchoolRate.message}
                </small>
              )}
            </div>
            <div className='flex flex-col my-3 gap-2'>
              <label>علامة القدرات</label>
              <input
                {...register('abilityTestResults', {
                  required: { value: true, message: 'هذا الحقل مطلوب' },
                })}
                type='abilityTestResults'
                className={`border rounded outline-none p-2 ${
                  errors?.abilityTestResults
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
              {errors?.abilityTestResults && (
                <small className='text-red-500 text-xs'>
                  {errors?.abilityTestResults.message}
                </small>
              )}
            </div>
            <div className='flex flex-col max-w-[300px] gap-2'>
              <label>سنة التخرج</label>
              <select
                {...register('graduationYear', {
                  required: { value: true, message: 'هذا الحقل مطلوب' },
                })}
                className={`border rounded outline-none p-3 ${
                  errors?.graduationYear ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                {year.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              {errors?.graduationYear && (
                <small className='text-red-500 text-xs'>
                  {errors?.graduationYear.message}
                </small>
              )}
            </div>
            <div className='flex flex-col lg:flex-row md:flex-row gap-2 my-3'>
              <label className='mx-3'>
                هل حصلت على أي شهادة بعد الثانوية العامة؟
              </label>
              <div className=' flex gap-2 '>
                <input
                  type='radio'
                  {...register('certificateOfSecondaryEducation')}
                  value='yes'
                />
                <label>نعم</label>
              </div>
              <div className='flex gap-2'>
                <input
                  type='radio'
                  {...register('certificateOfSecondaryEducation')}
                  value='no'
                />
                <label>لا</label>
              </div>
            </div>
            <div className='flex justify-center items-center my-16'>
              <input
                type='submit'
                value='تقديم'
                className='cursor-pointer bg-darkBlue-900 rounded p-[10px] w-[250px] text-white'
              />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Registration
