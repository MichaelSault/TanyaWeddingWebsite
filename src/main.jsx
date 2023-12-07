import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RSVP from './components/RSVP.component.jsx';
import Home from './components/home.component.jsx';
import GuestList from './components/guestList.component.jsx';
import Events from './components/events.component.jsx';
import AddGuest from './components/addGuest.component.jsx';
import Guest from './components/guest.component.jsx';

import Navbar from './components/navbar.component.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <> 
      <Navbar />
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/RSVP' element={<RSVP />}/>
            <Route path='/Guests' element={<GuestList/>}/>
            <Route path='/Events' element={<Events/>}/>
            <Route path='/Invite' element={<AddGuest/>}/>
            <Route path='/Guest' element={<Guest/>}/>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
  </>
)