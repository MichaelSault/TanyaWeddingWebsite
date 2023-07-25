import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import GuestList from './components/GuestList.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/Guests' element={<GuestList/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)