import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RSVP from './components/RSVP.jsx';
import Home from './components/Home.jsx';
import GuestList from './components/GuestList.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/RSVP' element={<RSVP />}/>
          <Route path='/Guests' element={<GuestList/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </>
)