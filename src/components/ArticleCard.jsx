import { GoCalendar } from 'react-icons/go'
import { Link } from 'react-router-dom'

const ArticleCard = ({
  articleBriefCard,
  ArticleTitle,
  articleImage,
  articleId,
}) => {
  return (
    <div className='py-12'>
      <div className='max-w-5xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-10'>
        <img
          src={articleImage}
          alt='article'
          className='rounded-md max-w-[320px]'
        />
        <div className='flex flex-col gap-4'>
          <div className='flex items-center text-sm gap-2'>
            <GoCalendar />
            <p>الثلاثاء 17 يوليو 2022</p>
          </div>
          <Link
            to={`/article/${articleId}`}
            className='text-lg lg:text-xl font-medium text-blue-900'
          >
            {ArticleTitle}
          </Link>
          <p className='leading-relaxed text-sm'>
            {articleBriefCard}
            <Link
              to={`/article/${articleId}`}
              className='font-medium text-blue-900'
            >
              ...قراءة المزيد
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
export default ArticleCard
