import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import '../App.css'

function RSVP() {
  const navigate = useNavigate();

  const [guest, setGuest] = useState({
    email: String,
    code: String,
    name: String,
    rsvp: Boolean,
    responseDate: Date
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(name);

    setGuest(prev => {
        return {
            ...prev,
            [name]: value,
        };
    });
  };

  useEffect(() => {
      console.log(guest);
  }, [guest]);

const handleClick = (event) => {
    event.preventDefault();
    console.log(guest);

    axios.post("http://localhost:3001/RSVPCode", guest)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    navigate("Guests");

};


  return (
    <>
      <div style={{width:"100%", margin:"auto auto", textAlign:"center"}}>
        <h2>RSVP Here</h2>
        <FloatingLabel
          controlId="RSVPCode"
          name="RSVPCode"
          label="Guest Code"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="password" name="code" onChange={handleChange}/>
        </FloatingLabel>
        <Button variant="outline-dark" style={{width:"100%"}} onClick={handleClick}>Continue</Button>
      </div>
    </>
  )
}

export default RSVP;
