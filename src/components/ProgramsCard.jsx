import { Link } from 'react-router-dom'

const ProgramsCard = ({ imge, title, programId }) => (
  <Link
    to={`/program/${programId}`}
    className='border shadow-lg w-[300px] bg-white'
  >
    <div className='h-[150px]  overflow-hidden'>
      <img src={imge} alt='captain imge' className='w-full' />
    </div>
    <div className='flex flex-col justify-center text-center gap-5 p-4'>
      <h3 className='font-semibold text-lg'>{title}</h3>
    </div>
  </Link>
)
export default ProgramsCard
