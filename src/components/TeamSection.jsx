import { baordTeamData } from '../data'
import { Autoplay, Navigation } from 'swiper'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GoChevronRight, GoChevronLeft } from 'react-icons/go'
import 'swiper/css'
import 'swiper/css/navigation'

const TeamSection = () => {
  const swiperPrevRef = useRef(null)
  const swiperNextRef = useRef(null)
  return (
    <div className='max-w-7xl mx-auto flex flex-col gap-3 py-16 px-4'>
      <div className='flex w-full justify-between '>
        <h3 className='border-b-2 px-3 py-1.5 text-darkBlue-900 border-[#27AAE1] font-semibold text-2xl'>
          فريق مجلس الإدارة
        </h3>
        <div className='flex justify-center gap-0 px-2'>
          <span
            ref={swiperNextRef}
            className='cursor-pointer text-[#27AAE1] flex items-center justify-center'
          >
            <GoChevronRight className='text-5xl' />
          </span>
          <span
            ref={swiperPrevRef}
            className='cursor-pointer text-[#27AAE1] flex items-center justify-center'
          >
            <GoChevronLeft className='text-5xl' />
          </span>
        </div>
      </div>
      <div>
        <Swiper
          loop={true}
          dir='rtl'
          navigation={{
            prevEl: swiperPrevRef.current,
            nextEl: swiperNextRef.current,
          }}
          slidesPerView={1}
          grabCursor={true}
          modules={[Navigation, Autoplay]}
          autoplay={true}
          centeredSlides={true}
          spaceBetween={10}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperPrevRef.current
            swiper.params.navigation.nextEl = swiperNextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 20,
              centeredSlides: false,
            },
          }}
        >
          {baordTeamData.map((article) => (
            <SwiperSlide
              key={article.id}
              className='flex items-center justify-center'
            >
              <div
                className='flex items-center justify-center flex-col gap-1 w-64'
                key={article.id}
              >
                <img
                  src={article.img}
                  alt={article.name}
                  className='object-cover object-top w-full h-64'
                />
                <div className='p-2 bg-[#E8F0FE] w-full flex flex-col items-center justify-center gap-2 text-center'>
                  <h5 className='text-lg font-semibold whitespace-nowrap'>
                    {article.name}
                  </h5>
                  <p className='text-gray-700 text-sm'>{article.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TeamSection
