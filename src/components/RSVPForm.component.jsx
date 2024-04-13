import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import '../App.css'

export default function RSVPForm() {
  const navigate = useNavigate();

  const [returnedData, setReturnedData] = useState({
    email: "", 
    code: "", 
    firstName: "", 
    lastName: ""
  });

  const [guest, setGuest] = useState({
    email: String, 
    code: String, 
    firstName: String, 
    lastName: String
  });

  useEffect(() => {
    const loggedInUser = document.cookie.split('=')[1];
    console.log(loggedInUser);
    if (loggedInUser) {
        console.log("Guest is logged in");
        navigate("/Guest", {relative: "path"})
    } else {
        console.log("No guest is logged in");
    }
    console.log(loggedInUser);
  }, []);

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(value);

    setGuest(prev => {
        return {
            ...prev,
            [name]: value,
        };
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(guest.email);

    //use this function if RSVP-ing with CODE
    /* const userData = await axios.get("/api/RSVPCode", {params: {code: guest.code}})
    .then(res => res.data)
    .catch(err => console.log(err)); */

    //use this function if RSVP-ing with EMAIL
    const userData = await axios.get("/api/RSVPEmail", {params: {email: guest.email}})
    .then(res => res.data)
    .catch(err => console.log(err));

    console.log(userData);
    setReturnedData(userData);
    getJWT(userData);

  };

  const cookies = new Cookies();

  async function getJWT(newData) {
    //add check to see if user and pass match
    console.log(newData);
    var JWT = "";

    //use this block for RSVP-ing with CODE
    /* if (newData.code = guest.code){
        JWT = await fetch('/api/JWT', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              email: newData.email, 
              code: newData.code, 
              firstName: newData.firstName, 
              lastName: newData.lastName,
              sangeet: newData.sangeet,
              maiyan: newData.maiyan,
              mendhi: newData.mendhi,
              choora: newData.choora,
              sikh: newData.sikh,
              civil: newData.civil
            })
        })
        .then(res => res.text());
        console.log(JWT);
        cookies.set("userAuthentication", JWT);
        navigate("/Envelope", {relative: "path"})
      } else {
        console.log("RSVP Code Mismatch!");
    }
    console.log(JWT); */

    //use this block for RSVP-ing with EMAIL
    if (newData.email = guest.email){
        JWT = await fetch('/api/JWT', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              email: newData.email, 
              code: newData.code, 
              firstName: newData.firstName, 
              lastName: newData.lastName,
              sangeet: newData.sangeet,
              maiyan: newData.maiyan,
              mendhi: newData.mendhi,
              choora: newData.choora,
              sikh: newData.sikh,
              civil: newData.civil
            })
        })
        .then(res => res.text());
        console.log(JWT);
        cookies.set("userAuthentication", JWT);
        navigate("/Envelope", {relative: "path"})
      } else {
        console.log("RSVP Code Mismatch!");
    }
    console.log(JWT);
}


  return (
    <>

      <div id='bodyTest' style={{width:"100%", margin:"auto auto", textAlign:"center"}}>
        <h2>RSVP Here</h2>
        <FloatingLabel
          controlId="RSVPCode"
          name="RSVPCode"
          label="Email Address"
          className="mb-3"
        >

          <Form.Control type="text" name="email" onChange={handleChange}/>
          {/*Use this line for rsvp using user code*/}
          {/* <Form.Control type="text" name="code" onChange={handleChange}/> */}
        </FloatingLabel>
        <Button variant="outline-dark" style={{width:"100%"}} onClick={handleSubmit}>Continue</Button>
      </div>
    </>
  )
}
