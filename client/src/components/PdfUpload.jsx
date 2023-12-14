import PropTypes from 'prop-types'
import { FiUploadCloud } from 'react-icons/fi'

function PdfUpload({ onFileChange }) {
  return (
    <div className='bg-gray-100 font-sans shadow-xl rounded-xl hover:scale-105 transition duration-500 max-w-fit m-5'>
      <label
        htmlFor='dropzone-file'
        className='cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center'
      >
        <FiUploadCloud size={'3em'} color='#3b82f6' />
        <h2 className='mt-4 text-xl font-medium text-gray-700 tracking-wide'>PDF File</h2>
        <p className='mt-2 text-gray-500 tracking-wide w-11/12'>
          Drop any PDF file or click to upload one (&lt;25mb)
        </p>
        <input
          id='dropzone-file'
          type='file'
          onChange={onFileChange}
          accept='application/pdf'
          className='hidden'
        />
      </label>
    </div>
  )
}

PdfUpload.propTypes = {
  onFileChange: PropTypes.func,
}

export default PdfUpload
