import { Link } from 'react-router-dom'

const OtherArticlesCard = ({ articleTitle, articleImage, articleId }) => {
  return (
    <Link to={`/article/${articleId}`} className='flex flex-col gap-3 p-2'>
      <img src={articleImage} alt='' srcset='' className='' />
      <h3 className=' md:font-semibold md:text-sm lg:text-base'>
        {articleTitle}
      </h3>
    </Link>
  )
}
export default OtherArticlesCard
