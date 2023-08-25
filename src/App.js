import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/views/Home';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';

import './css/reset.css';
import './css/style.css';
import './css/util.css';
import './css/form.css';


function App() {

  return (
    <div className="background">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App;
