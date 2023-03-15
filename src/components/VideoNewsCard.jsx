import { BsFillPlayCircleFill } from 'react-icons/bs'

const VideoNewsCard = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
      <div className="bg-[url('/imgs/videoNewsImage.jfif')] min-w-[320px]  h-[200px] bg-cover rounded-lg">
        <div className='bg-white/50 w-full h-full flex flex-col justify-center items-center'>
          <BsFillPlayCircleFill className='text-5xl' />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-lg lg:text-xl font-medium'>
          رئيس مجلس إدارة المعهد السعودي التقني للطاقة المتجدة مجد الرفاعي بوجود
          الدعم الصناعي مستقبل الطاقة المتجددة مزهر وستكون المملكة مركز الطاقة
          الأول عالميا
        </p>
      </div>
    </div>
  )
}
export default VideoNewsCard
