import PropTypes from 'prop-types'
import { FaCheckCircle } from 'react-icons/fa'
import { FaCircleXmark } from 'react-icons/fa6'
import { BiReset } from 'react-icons/bi'

function PageSelection({ currentPage, selectedPages, handlePageSelect, setSelectedPages }) {
  return (
    <div className='w-full'>
      <h1 className='text-center'>
        {!selectedPages.length ? 'No pages selected' : `Pages selected ${selectedPages.join(', ')}`}
      </h1>
      <div className='flex justify-around py-8 '>
        <button
          className={`p-1 rounded-full transition duration-300 hover:scale-110 ${
            selectedPages.includes(currentPage) ? 'bg-green-500' : 'bg-red-500'
          }`}
          onClick={() => handlePageSelect(currentPage)}
          title={`${
            selectedPages.includes(currentPage) ? 'Selected current Page' : 'Removed current page'
          }`}
        >
          {selectedPages.includes(currentPage) ? (
            <FaCheckCircle size={40} color='white' />
          ) : (
            <FaCircleXmark size={40} color='white' />
          )}
        </button>
        <button
          className='p-1 transition duration-300 bg-red-500 rounded-full hover:scale-110'
          onClick={() => {
            setSelectedPages([])
          }}
          title='Reset to default'
        >
          <BiReset size={40} color='white' />
        </button>
      </div>
    </div>
  )
}

PageSelection.propTypes = {
  currentPage: PropTypes.number.isRequired,
  selectedPages: PropTypes.array.isRequired,
  handlePageSelect: PropTypes.func.isRequired,
  setSelectedPages: PropTypes.func,
}

export default PageSelection
