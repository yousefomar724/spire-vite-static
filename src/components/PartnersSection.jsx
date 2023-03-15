import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { partners } from '../data'
import 'swiper/css'
import 'swiper/css/pagination'

const PartnersSection = () => {
  return (
    <div className='bg-blue-900'>
      <section className='max-w-7xl mx-auto flex flex-col items-center justify-around pt-10 pb-4 px-4'>
        <h3 className='font-bold text-xl  md:text-3xl text-white'>
          شركاء النجاح
        </h3>
        {/* Slider */}
        <Swiper
          pagination={true}
          spaceBetween={30}
          centeredSlides={true}
          breakpoints={{
            375: {
              slidesPerView: 2,
              centeredSlides: true,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 2,
              centeredSlides: true,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              centeredSlides: true,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          loop={true}
          grabCursor={true}
          modules={[Pagination, Autoplay]}
          className='w-full h-full mb-4 '
          autoplay={true}
        >
          {partners.map((partner, i) => (
            <SwiperSlide
              key={i}
              className='flex items-center justify-center py-14'
            >
              <a
                href={partner.url}
                target='_blank'
                rel='noreferrer'
                className='h-[150px] bg-white rounded-md w-full flex items-center justify-center p-4'
              >
                <img
                  src={partner.img}
                  alt={`about img ${i + 1}`}
                  className='w-full max-h-[150px] object-contain'
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}

export default PartnersSection
