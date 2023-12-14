import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import Upload from './pages/Upload'
import NotFound from './pages/NotFound'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          // duration: 4000,
          style: {
            borderRadius: '10px',
            background: '#2b3440',
            color: '#ffffff',
          },
        }}
      />
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route path={'*'} element={<NotFound />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </>
  )
}

export default App
