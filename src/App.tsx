import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/fyle/' element={<Home />} />
        <Route path='*' element={<>Invalid route</>} />

      </Routes>
    </div>
  )
}

export default App