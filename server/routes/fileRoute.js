import express from 'express'
import { generatePdf, uploadPDF } from '../controllers/fileController.js'

const router = express.Router()

//routes for pdf files
router.post('/upload', uploadPDF)
router.post('/generate', generatePdf)

export default router
