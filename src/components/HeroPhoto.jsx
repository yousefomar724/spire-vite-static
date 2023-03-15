import image from '/imgs/heroShap.png'

const HeroPhoto = ({ photo, title }) => {
  return (
    <div className='max-w-7xl mx-auto relative'>
      <img src={photo} alt='hero' className='w-full' />
      <img
        src={image}
        alt='hero section'
        className='h-full absolute top-0 w-[200px]  md:w-[400px] lg:w-[600px] xl:w-[700px]'
      />
      <h1 className='absolute top-[60px] right-4 md:top-[100px]  md:right-[30]  lg:top-[150px] xl:top-[200px] lg:right-[100px] text-[10px] md:text-2xl  text-white font-semibold whitespace-pre'>
        {title}
      </h1>
    </div>
  )
}

export default HeroPhoto
