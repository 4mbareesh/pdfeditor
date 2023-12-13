import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import PropTypes from 'prop-types'
import Loading from './Loading'

//worker link
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

function PDFViewer({ pdf, currentPage, onDocumentLoadSuccess }) {
  const onLoading = () => {
    // console.count('hihi')
    return <Loading />
  }
  return (
    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} loading={onLoading}>
      <Page pageNumber={currentPage} loading={onLoading} className={'transition duration-1000'} />
    </Document>
  )
}

PDFViewer.propTypes = {
  pdf: PropTypes.object,
  currentPage: PropTypes.number.isRequired,
  onDocumentLoadSuccess: PropTypes.func.isRequired,
}

export default PDFViewer
