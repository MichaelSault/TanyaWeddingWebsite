import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';

import '../App.css'

function GuestList() {
  const navigate = useNavigate();
  const [guests, setGuests] = useState([]);
  const [updatedGuest, setUpdatedGuest] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts")
    .then(res => {
        console.log(res);
        setGuests(res.data);
    })
    .catch((err) => console.log(err));
    }, [])

    const saveUpdatedPost = () => {
        console.log(updatedGuest);
        axios.put(`http://localhost:3001/update/${updatedGuest._id}`, updatedGuest)
        .then(res => console.log(res))
        .catch((err) => console.Console.log(err));

        //handleClose();
        //window.location.reload();
    };


  return (
    <>
      <div style={{width:"100%", margin:"auto auto", textAlign:"center"}}>
        <h1>Guest List</h1>
        
      </div>
    </>
  )
}

export default GuestList
