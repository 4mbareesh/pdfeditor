import mongoose from 'mongoose'

//model for pdf files
const fileSchema = new mongoose.Schema({
  fileName: String,
  bufferData: Buffer,
})

const fileModel = mongoose.model('File', fileSchema)

export default fileModel
