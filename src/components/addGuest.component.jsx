import {Button, Form} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

import FloatingLabel from "react-bootstrap/FloatingLabel";

import TitleHeader from './titleBanner.component';
import '../App.css';

function AddGuest() {
    const [guest, setGuest] = useState({
        firstName: "",
        lastName: "",
        email: "",
        sangeet: false,
        maiyan: false,
        mendhi: false,
        choora: false,
        sikh: false,
        civil: false
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

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

        axios.post("http://localhost:3001/InviteGuest", guest)
        .then(res => console.log(res))
        .catch(err => console.log(err));

    };

    return(
        <>
            <TitleHeader Title={'Invite a Guest'}/>
            <div id='bodyTest' style={{width:"100%", margin:"auto auto", textAlign:"center"}}>
            <h2>Invite a Guest</h2>
            <Form>
                <Form.Group>
                    <FloatingLabel
                        controlId="firstName"
                        name="firstName"
                        label="First Name"
                        className="mb-3"
                    >
                    <Form.Control
                        name='firstName'
                        value={guest.firstName} 
                        placeholder='First Name' 
                        style={{marginBottom: '1rem'}} 
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
                        name="lastName"
                        value={guest.lastName} 
                        placeholder='Last Name' 
                        style={{marginBottom: '1rem'}} 
                        onChange={handleChange}
                    />
                    </FloatingLabel>
                    
                    <FloatingLabel
                        controlId="email"
                        name="email"
                        label="Email"
                        className="mb-3"
                    >
                    <Form.Control
                        name="email"
                        value={guest.email} 
                        placeholder='Email' 
                        onChange={handleChange}
                        className="mb-3"
                    />
                    </FloatingLabel>
                    <h3>Events</h3>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{width:"100%", margin:"auto auto", textAlign:"left"}}>
                        <Form.Check type="checkbox" label="Sangeet & Jaggo" name="sangeet" onChange={handleChange}/>
                        <Form.Check type="checkbox" label="Maiyan" name="maiyan" onChange={handleChange}/>
                        <Form.Check type="checkbox" label="Mendhi" name="mendhi" onChange={handleChange}/>
                        <Form.Check type="checkbox" label="Choora" name="choora" onChange={handleChange}/>
                        <Form.Check type="checkbox" label="Anand Karaj (Sikh Ceremony)" name="sikh" onChange={handleChange}/>
                        <Form.Check type="checkbox" label="Civil Ceremony & Reception" name="civil" onChange={handleChange}/>
                    </Form.Group>
                </Form.Group>
                <Button variant="outline-dark" style={{width:"100%", marginBottom:'1rem'}} onClick={handleClick}>Invite Guest</Button>
            </Form>
            </div>
        </>
    );
}

export default AddGuest;