import {Button, Form} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

import '../App.css';

function AddGuest() {
    const [guest, setGuest] = useState({
        firstName: "",
        lastName: "",
        email: ""
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
        <div style={{width:"100%", margin:"auto auto", textAlign:"center"}}>
            <h1>Invite a Guest</h1>
            <Form>
                <Form.Group>
                    <Form.Control
                        name='firstName'
                        value={guest.firstName} 
                        placeholder='First Name' 
                        style={{marginBottom: '1rem'}} 
                        onChange={handleChange}
                    />
                    <Form.Control 
                        name="lastName"
                        value={guest.lastName} 
                        placeholder='Last Name' 
                        style={{marginBottom: '1rem'}} 
                        onChange={handleChange}
                    />
                    <Form.Control 
                        name="email"
                        value={guest.email} 
                        placeholder='Email' 
                        style={{marginBottom: '1rem'}} 
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="outline-success" style={{width:"100%", marginBottom:'1rem'}} onClick={handleClick}>Invite Guest</Button>
            </Form>
        </div>
    );
}

export default AddGuest;