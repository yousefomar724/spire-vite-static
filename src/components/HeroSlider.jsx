import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import { useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { heroSliderData } from '../data'
import 'swiper/css'

const HeroSlider = () => {
  const swiperPrevRef = useRef(null)
  const swiperNextRef = useRef(null)
  return (
    <Swiper
      navigation={{
        prevEl: swiperPrevRef.current,
        nextEl: swiperNextRef.current,
      }}
      loop={true}
      modules={[Navigation, Autoplay]}
      autoplay={true}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperPrevRef.current
        swiper.params.navigation.nextEl = swiperNextRef.current
        swiper.navigation.init()
        swiper.navigation.update()
      }}
    >
      {heroSliderData.map((slide) => (
        <SwiperSlide className='' key={slide.id}>
          <img
            loading='eager'
            src={slide.img}
            alt={`slide ${slide.id}`}
            className='w-full h-auto object-cover'
          />
        </SwiperSlide>
      ))}
      <span
        ref={swiperPrevRef}
        className='absolute left-4 -translate-y-1/2 top-1/2 z-20 w-10 h-10 p-2 rounded-full bg-white group transition cursor-pointer text-darkBlue-900 hidden md:flex items-center justify-center'
      >
        <IoIosArrowBack className='text-3xl group-hover:-translate-x-1 transition' />
      </span>
      <span
        ref={swiperNextRef}
        className='absolute right-4 -translate-y-1/2 top-1/2 z-20 w-10 h-10 p-2 rounded-full bg-white group transition cursor-pointer text-darkBlue-900 hidden md:flex items-center justify-center'
      >
        <IoIosArrowForward className='text-3xl group-hover:translate-x-1 transition' />
      </span>
    </Swiper>
  )
}

export default HeroSlider
