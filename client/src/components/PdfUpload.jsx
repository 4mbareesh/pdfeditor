import PropTypes from 'prop-types'
import { FiUploadCloud } from 'react-icons/fi'

function PdfUpload({ onFileChange }) {
  return (
    <div className='m-5 font-sans transition duration-500 bg-gray-100 shadow-xl rounded-xl hover:scale-105 max-w-fit'>
      <label
        htmlFor='dropzone-file'
        className='flex flex-col items-center w-full max-w-lg p-6 text-center bg-white border-2 border-blue-400 border-dashed cursor-pointer rounded-xl'
      >
        <FiUploadCloud size={'3em'} color='#3b82f6' />
        <h2 className='mt-4 text-xl font-medium tracking-wide text-gray-700'>PDF File</h2>
        <p className='w-11/12 mt-2 tracking-wide text-gray-500'>
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
