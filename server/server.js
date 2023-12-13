import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import connectDB from './configs/db.js'
import fileUpload from 'express-fileupload'
import fileRoute from './routes/fileRoute.js'

//express
const app = express()
const port = process.env.PORT || 8080

// database connection
connectDB()

app.use(express.json())
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    exposedHeaders: ['Content-Disposition', 'Authorization', 'Content-Type'],
  })
)
app.use(morgan('dev'))
app.use(fileUpload())

//routes
app.get('/', (req, res) => res.send('hello'))
app.use('/api', fileRoute)

//port connection
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
