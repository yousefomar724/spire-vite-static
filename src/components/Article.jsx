import articleImage from '/imgs/articleImage.jfif'
import { articleData } from '../data'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import { ArticleCard } from '.'

const Article = ({ articlepaginate }) => {
  return (
    <div className='flex flex-col w-full divide-y-2 divide-dashed'>
      {articlepaginate.map((Article) => (
        <ArticleCard
          articleImage={articleImage}
          articleBriefCard={Article.articleBriefCard}
          ArticleTitle={Article.ArticleTitle}
          articleId={Article.id}
          key={Article.id}
        />
      ))}
    </div>
  )
}

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0)

  const endOffset = itemOffset + itemsPerPage
  const currentItems = articleData.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(articleData.length / itemsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % articleData.length
    setItemOffset(newOffset)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Article articlepaginate={currentItems} />
      <ReactPaginate
        className='flex max-w-5xl mx-auto items-center justify-center gap-6'
        breakLabel='...'
        nextLabel='التالي >>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='<< السابق'
        renderOnZeroPageCount={null}
        activeClassName='bg-blue-800 hover:bg-blue-900 text-white w-[35px] h-[35px] flex justify-center items-center rounded-full'
      />
    </>
  )
}
export default PaginatedItems
