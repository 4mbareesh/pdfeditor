import PropTypes from 'prop-types'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

function PDFControls({ currentPage, totalPages, handlePreviousPage, handleNextPage }) {
  return (
    <div className='flex items-center justify-around w-full mb-4'>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className='p-1 transition duration-200 bg-white rounded-full hover:scale-110'
        title='Previous Page'
      >
        <FaArrowAltCircleLeft size={40} />
      </button>
      <h1 className='p-1 px-3 text-center bg-gray-300 rounded-2xl'>
        Page {currentPage} of {totalPages}
      </h1>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className='p-1 transition duration-200 bg-white rounded-full hover:scale-110'
        title='Next Page'
      >
        <FaArrowAltCircleRight size={40} />
      </button>
    </div>
  )
}

PDFControls.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number,
  handlePreviousPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
}

export default PDFControls
