import { articleData } from '../data'
import img from '/imgs/articleImage.jfif'
import { GoCalendar } from 'react-icons/go'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageTransition } from '../animation'
import { OtherArticlesCard } from '../components'

const Article = () => {
  const { articleId } = useParams()
  const singleArticle = articleData.find((article) => article.id === +articleId)
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='max-w-6xl mx-auto my-10 pt-20 px-5'
    >
      <h1 className=' max-w-5xl  mx-auto text-center leading-loose tracking-wide text-2xl font-semibold text-blue-900'>
        {singleArticle.ArticleTitle}
      </h1>
      <div className='max-w-5xl mx-auto my-10'>
        <img src={img} alt='' srcset='' />
      </div>
      <div className='max-w-5xl mx-auto my-10 px-5 flex flex-col md:flex-row justify-between'>
        <div className=''>
          <div className='flex items-center gap-2'>
            <GoCalendar />
            <p>الثلاثاء 17 يوليو 2022</p>
          </div>
          <div className='leading-loose'>
            <p className='my-10'>{singleArticle.articleTopic1}</p>
            <p className='my-10'>{singleArticle.articleTopic2}</p>
          </div>
        </div>
        <div className='px-2'>
          <h2 className='text-lg font-medium'>مقالات آخرى</h2>
          <div className='flex flex-col gap-3'>
            {articleData.slice(0, 3).map((item) => (
              <OtherArticlesCard
                key={item.id}
                articleImage={img}
                articleTitle={item.ArticleTitle}
                articleId={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Article
