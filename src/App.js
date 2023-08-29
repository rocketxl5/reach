import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import './css/reset.css';
import './css/style.css';
import './css/util.css';
import './css/form.css';


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
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App;
