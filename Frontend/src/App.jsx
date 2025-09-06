import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Components/Pages/loginPage'
import RegisterPage from './Components/Pages/RegisterPage'

function App() {

  return (
    <>
    
    <Routes>
      

    <Route path='/home' element={<HomePage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    
    
    </>
  )
}

export default App
