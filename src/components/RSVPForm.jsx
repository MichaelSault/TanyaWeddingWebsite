import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import '../App.css'

export default function RSVPForm() {
  const [returnedData, setReturnedData] = useState({email: "", code: "", firstName: "", lastName: ""});

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = document.cookie;
    console.log(loggedInUser);
    if (loggedInUser) {
        console.log("Guest is logged in");
    } else {
        console.log("No guest is logged in");
    }
    console.log(loggedInUser);
  }, []);

  const [guest, setGuest] = useState({
    email: String,
    code: String,
    name: String,
    rsvp: Boolean,
    responseDate: Date
  });

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

const handleClick = (event) => {
    event.preventDefault();
    console.log(guest.code);

    let userData = axios.get("http://localhost:3001/RSVPCode", {params: {code: guest.code}})
    .then(res => printResult(res))
    .catch(err => console.log(err));


    //getJWT(userData);
    // navigate("Guests");

};

const printResult = (result) => {
  console.log(result.data[0].firstName, result.data[0].lastName)
}


  return (
    <>

      <div id='bodyTest' style={{width:"100%", margin:"auto auto", textAlign:"center"}}>
        <h2>RSVP Here</h2>
        <FloatingLabel
          controlId="RSVPCode"
          name="RSVPCode"
          label="Guest Code"
          className="mb-3"
        >
          <Form.Control type="text" name="code" onChange={handleChange}/>
        </FloatingLabel>
        <Button variant="outline-dark" style={{width:"100%"}} onClick={handleClick}>Continue</Button>
      </div>
    </>
  )
}
