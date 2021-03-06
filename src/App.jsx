import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Quiz from './routes/Quiz'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='quiz' element={<Quiz />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
