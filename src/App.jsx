import React from 'react'
import Createpost from './Pages/Createpost'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Allpost from './Pages/Allpost'
import UpdateForm from './Pages/updateForm'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Createpost/>} />
        <Route path='/allpost' element={<Allpost/>} />
        <Route path='/updateform/:id' element={<UpdateForm/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App