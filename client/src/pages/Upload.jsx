import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import PDFViewer from '../components/PdfViewer'
import PDFGenerator from '../components/PdfGenerate'
import PageSelection from '../components/PdfPageSelection'
import PDFControls from '../components/PdfControls'
import PdfUpload from '../components/PdfUpload'

function Upload() {
  const [pdf, setPdf] = useState(null)
  const [selectedPages, setSelectedPages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [fileId, setFileId] = useState()

  //upload file
  const handleFileChange = async (e) => {
    const formData = new FormData()
    formData.append('pdf', e.target.files[0])
    try {
      const response = axios.post('/api/upload', formData)
      toast.promise(response, {
        loading: 'Uploading file...',
        success: ({ data }) => {
          console.log(data.id)
          setFileId(data.id)
          setPdf(e.target.files[0])
          setCurrentPage(1)
          setSelectedPages([])
          return 'File loaded!'
        },
        error: (err) => {
          console.error('Error uploading PDF:', err)
          return 'Error uploading PDF'
        },
      })
    } catch (error) {
      console.error('Error uploading PDF:', error)
    }
  }

  //fetch total pages
  function onDocumentLoadSuccess({ numPages }) {
    setTotalPages(numPages)
  }

  //fetch selected pages
  const handlePageSelect = (pageNumber) => {
    const index = selectedPages.indexOf(pageNumber)
    if (index === -1) {
      setSelectedPages([...selectedPages, pageNumber])
    } else {
      const newSelectedPages = [...selectedPages]
      newSelectedPages.splice(index, 1)
      setSelectedPages(newSelectedPages)
    }
  }

  //previous page selection
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1))
  }

  //next page selection
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1))
  }

  //generate new pdf
  const handleGeneratePDF = async () => {
    try {
      if (!selectedPages.length) {
        return toast.error('Please select atleast one page!')
      }

      if (totalPages <= 1) {
        return toast.error('Pdf is already single page!')
      }

      if (selectedPages.length === totalPages) {
        return toast.error(`You've selected the entire pages!`)
      }

      const loadingToastId = toast.loading('Generating PDF...')
      const response = await axios.post(
        '/api/generate',
        { selectedPages, fileId },
        { responseType: 'blob' }
      )

      toast.dismiss(loadingToastId)
      toast.promise(Promise.resolve(response), {
        // loading: 'Generating PDF...',
        success: () => {
          const contentDispositionHeader = response.headers['content-disposition']
          const match = contentDispositionHeader.match(/filename=(.+)-edited.pdf/)
          const fileName = match ? match[1] + '-edited' : 'pdf-edited'

          const blob = new Blob([response.data], { type: 'application/pdf' })
          // Create a link element and trigger a download
          const link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = fileName
          link.click()
          return 'Your file will be start downloading.'
        },
        error: (err) => {
          console.error('Error generating PDF:', err)
          return 'Error generating PDF'
        },
      })
    } catch (error) {
      console.error('Error generating and downloading PDF:', error)
    }
  }

  return (
    <div
      className={`bg-gray-100 select-none ${
        pdf ? '' : 'h-screen flex justify-center items-center'
      }`}
    >
      {pdf ? '' : <PdfUpload onFileChange={handleFileChange} />}
      <div className='justify-center md:flex'>
        {pdf && (
          <>
            <div className='justify-center overflow-x-auto overflow-y-hidden bg-gray-400 md:w-9/12 md:flex'>
              <PDFViewer
                pdf={pdf}
                currentPage={currentPage}
                onDocumentLoadSuccess={onDocumentLoadSuccess}
              />
            </div>
            <div className='flex flex-col items-center justify-around gap-5 bg-gray-200 md:w-3/12'>
              <PageSelection
                totalPages={totalPages}
                currentPage={currentPage}
                selectedPages={selectedPages}
                setSelectedPages={setSelectedPages}
                handlePageSelect={handlePageSelect}
              />
              <PDFControls
                totalPages={totalPages}
                currentPage={currentPage}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
              />
              <PDFGenerator handleGeneratePDF={handleGeneratePDF} selectedPages={selectedPages} />
              <h1>Upload Another one?</h1>
              <PdfUpload onFileChange={handleFileChange} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Upload
