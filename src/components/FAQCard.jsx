const FAQCard = ({ Question, answered }) => (
  <details class='group'>
    <summary class='flex cursor-pointer items-center justify-between bg-[#D9D9D9] group-open:bg-blue-800  py-4 px-10'>
      <h2 class='font-medium text-blue-800  group-open:text-white'>
        {' '}
        + {Question}
      </h2>
      <svg
        class='ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180 text-blue-900 group-open:text-white'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M19 9l-7 7-7-7'
        />
      </svg>
    </summary>
    <p class='px-4 py-7 leading-relaxed  bg-white text-black'>{answered}</p>
  </details>
)
export default FAQCard
