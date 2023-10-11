import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './components/pages/Main'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/index" />} />
          <Route path='/index' element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
