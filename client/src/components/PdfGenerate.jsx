import PropTypes from 'prop-types'
import { MdSave } from 'react-icons/md'

function PDFGenerator({ handleGeneratePDF, selectedPages }) {
  return (
    <button
      onClick={handleGeneratePDF}
      className='p-2 transition-all duration-300 bg-indigo-500 rounded-3xl hover:rounded-xl hover:scale-110 '
      // disabled={selectedPages.length === 0 ? true : false}
      title='Generate PDF'
    >
      <MdSave size={40} color='white' />
    </button>
  )
}

PDFGenerator.propTypes = {
  handleGeneratePDF: PropTypes.func.isRequired,
  selectedPages: PropTypes.array.isRequired,
}

export default PDFGenerator
