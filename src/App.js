import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/views/Home'
import Footer from './components/layout/Footer'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Success from './components/auth/Success'
import ResetPassword from './components/auth/ResetPassword'
import './css/reset.css'
import './css/style.css'
import './css/util.css'
import './css/form.css'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/Success" element={<Success />} />
      </Routes>
      <Routes>
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
