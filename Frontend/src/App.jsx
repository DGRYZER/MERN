import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './Components/SignIn/Signin'
import Signup from './Components/SignUp/Signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Signin/>} path='/'/>
        <Route element={<Signup/>} path='/signup'/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App