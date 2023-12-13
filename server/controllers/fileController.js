import fileModel from '../models/fileModel.js'
import { PDFDocument } from 'pdf-lib'
import { Readable } from 'stream'

//file upload contoller
const uploadPDF = async (req, res) => {
  try {
    const { name, data } = req.files.pdf
    const { id } = await fileModel.create({ fileName: name, bufferData: data })
    res.status(200).send({ message: 'PDF uploaded successfully', id })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Error uploading PDF' })
  }
}

//generate pdf controller
const generatePdf = async (req, res) => {
  try {
    const { selectedPages, fileId } = req.body
    const pdfModel = await fileModel.findOne({ _id: fileId })

    // Load the existing PDF
    const pdfDoc = await PDFDocument.load(pdfModel.bufferData)

    // Create a new PDF containing selected pages
    const newPdfDoc = await PDFDocument.create()
    for (const pageNumber of selectedPages) {
      const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageNumber - 1]) // Page numbers are 0-indexed
      newPdfDoc.addPage(copiedPage)
    }

    // Serialize the new PDF to bytes
    const newPdfBytes = await newPdfDoc.save()

    // Set the response headers for downloading
    const fileName = pdfModel.fileName.replace(/\.pdf$/, '')
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}-edited.pdf`)

    // Create a readable stream from the new PDF bytes and pipe it to the response
    const stream = new Readable()
    stream.push(newPdfBytes)
    stream.push(null)
    stream.pipe(res)
  } catch (error) {
    console.error('Error generating and downloading PDF:', error)
    res.status(500).send({ error: 'Error generating and downloading PDF' })
  }
}

export { uploadPDF, generatePdf }
