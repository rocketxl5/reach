import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/views/Home';

import './css/reset.css';
import './css/style.css';
import './css/form.css';

function App() {

  return (
    <div className="background">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
