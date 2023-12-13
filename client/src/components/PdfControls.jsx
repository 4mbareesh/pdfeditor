import PropTypes from 'prop-types'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

function PDFControls({ currentPage, totalPages, handlePreviousPage, handleNextPage }) {
  return (
    <div className='flex mb-4 w-full justify-around items-center'>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className='rounded-full p-1 bg-white hover:scale-110 transition duration-200'
        title='Previous Page'
      >
        <FaArrowAltCircleLeft size={40} />
      </button>
      <h1 className='text-center bg-gray-300 p-1 px-3 rounded-2xl'>
        Page {currentPage} of {totalPages}
      </h1>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className='rounded-full p-1 bg-white hover:scale-110 transition duration-200'
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
