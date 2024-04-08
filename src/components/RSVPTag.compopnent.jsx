import { Button } from '@mui/material';
import {useState, useEffect} from 'react';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import '../App.css';

function RSVPTag() {

    const [returnedData, setReturnedData] = useState({
        family: "", 
        firstName: "", 
        lastName: "",
        sangeet: "",
        maiyan: "",
        mendhi: "",
        choora: "",
        sikh: "",
        civil: "",
        diet: "",
        comments: ""
    });
    
    const [rsvpData, setRsvpData] = useState({
        family: String, 
        firstName: String, 
        lastName: String,
        sangeet: Number,
        maiyan: Number,
        mendhi: Number,
        choora: Number,
        sikh: Number,
        civil: Number,
        diet: String,
        comments: String
    });


    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(value);
    
        setRsvpData(prev => {
            return {
                ...prev,
                [name]: value,
            };
        });
      };
    
      const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(rsvpData.email);
    
        //use this function if RSVP-ing with CODE
        /* const userData = await axios.get("http://localhost:3001/RSVPCode", {params: {code: guest.code}})
        .then(res => res.data)
        .catch(err => console.log(err)); */
    
        //use this function if RSVP-ing with EMAIL
        const userData = await axios.get("http://localhost:3001/RSVPEmail", {params: {email: rsvpData.email}})
        .then(res => res.data)
        .catch(err => console.log(err));
    
        console.log(userData);
        setReturnedData(userData);    
      };

    return (
        <>
            <div className='rsvpRow'>
            <div className='rsvpTitle'>
                    <h6><i>We hope to see you from the altar!</i></h6>
                    <hr className='hrRSVP'/>
            </div>
            <div className='rsvpDeadline'>
                <p className='elsie rsvpText'>We kindly request your response by May 6, 2024.  Cheers!</p>
            
            <FloatingLabel
                controlId="firstName"
                name="firstName"
                label="First Name"
                className="mb-3"
            >
            <Form.Control 
                type="text" 
                name="firstName" 
                onChange={handleChange}
            />
            </FloatingLabel>

            <FloatingLabel
                controlId="lastName"
                name="lastName"
                label="Last Name"
                className="mb-3"
            >
            <Form.Control 
                type="text" 
                name="lastName" 
                onChange={handleChange}
            />
            </FloatingLabel>

            <button disabled={false} className='rsvpTagButton elsie' onClick={handleSubmit}>Continue</button>
            </div>

            </div>
        </>
  )
}

export default RSVPTag;