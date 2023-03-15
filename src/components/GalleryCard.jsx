import { useState } from 'react'
import { PhotoModal } from '../components'

const GalleryCard = ({ text, img }) => {
  const [modalOn, setModalOn] = useState(false)

  return (
    <div className='w-72 flex flex-col items-center justify-center'>
      <img
        onClick={() => setModalOn(true)}
        src={img}
        alt='img'
        className='w-full'
      />
      <p className='text-center p-2'>{text}</p>
      {modalOn && (
        <PhotoModal setModalOn={setModalOn}>
          <img src={img} alt='' />
        </PhotoModal>
      )}
    </div>
  )
}

export default GalleryCard
