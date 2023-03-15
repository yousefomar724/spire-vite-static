import { AiOutlineClose } from 'react-icons/ai'

const PhotoModal = ({ children, setModalOn }) => {
  const handleClose = (e) => {
    if (e.target.id === 'container') setModalOn(false)
  }
  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black z-50 backdrop-blur-sm bg-opacity-25 !m-0'
      id='container'
      onClick={handleClose}
    >
      <div className='w-[95%] scrollbar max-h-[600px] rounded-lg md:w-[500px] mx-auto flex flex-col'>
        <div className='flex justify-between items-center border-b border-gray-300 pb-2'>
          <button>
            <AiOutlineClose
              className='text-3xl text-white'
              onClick={() => setModalOn(false)}
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default PhotoModal
