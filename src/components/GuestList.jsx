import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';

import '../App.css'

function GuestList() {
  const navigate = useNavigate();
  const [guests, setGuests] = useState([]);
  const [updatedGuest, setUpdatedGuest] = useState([]);


  return (
    <>
      <div style={{width:"100%", margin:"auto auto", textAlign:"center"}}>
        <h1>Guest List</h1>
        
      </div>
    </>
  )
}

export default GuestList
