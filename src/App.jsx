import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Video from './pages/Video'
import VideoUploadForm from './pages/UploadVideo'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/details/video' element={<Video />} />
        <Route path='/upload/video' element={<VideoUploadForm />} />
      </Routes>
    </>
  )
}

export default App
