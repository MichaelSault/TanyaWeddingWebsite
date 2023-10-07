import TitleHeader from './TitleBanner';

import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import axios from 'axios';

import '../App.css'

function GuestList() {
  const navigate = useNavigate();
  const [guests, setGuests] = useState([]);
  const [updatedGuest, setUpdatedGuest] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState([]);

  //setters for post update modals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get("http://localhost:3001/guests")
        .then(res => {
            console.log(res);
            setGuests(res.data);
        })
        .catch((err) => console.log(err));
        }, []
    );

    const deletePost = (id) => {
        console.log(id);
        axios
            .delete(`http://localhost:3001/delete/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        window.location.reload();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setUpdatedGuest((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const saveUpdatedGuest = () => {
        console.log(updatedGuest);
        axios.put(`http://localhost:3001/update/${updatedGuest._id}`, updatedGuest)
        .then(res => console.log(res))
        .catch((err) => console.Console.log(err));

        handleClose();
        window.location.reload();
    };

    const updateGuest = (guests) => {
        setSelectedGuest(guests);
        setUpdatedGuest(guests);
        handleShow();
    };


    return (
    <>
        <TitleHeader Title={'Guest List'}/> 
        <div id='bodyTest' style={{width:"100%", margin:"auto auto", textAlign:"center"}}>
        <h2>Guests:</h2>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Update a Guest</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group>
                    <FloatingLabel
                        controlId="firstName"
                        name="firstName"
                        label="First Name"
                        className="mb-3"
                    >
                    <Form.Control
                        name="firstName"
                        value={guests.firstName} 
                        defaultValue={selectedGuest.firstName}
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
                        value={guests.lastName} 
                        defaultValue={selectedGuest.lastName}
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
                        value={guests.email} 
                        defaultValue={selectedGuest.email}
                        onChange={handleChange}
                        className="mb-3"
                    />
                    </FloatingLabel>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>
                    Close
                </Button>
                <Button onClick={saveUpdatedGuest}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>


        {guests ? (
        
        <>
            {guests.map((guest) => {
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div key={guest._id} style={{border:"solid lightgrey 1px", borderRadius: "8px", marginBottom: "1rem", padding: "1rem"}}>
                        <h4>{guest.firstName} {guest.lastName}</h4>
                        <p>{guest.email}</p>
                        <div style={{display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <Button style={{width:"100%", marginRight:"1rem"}} onClick={() => updateGuest(guest)}>UPDATE</Button>
                            <Button style={{width:"100%", marginRight:"1rem"}} onClick={() => deletePost(guest._id)}>DELETE</Button>
                        </div>
                    </div>
                );
            })}
        </>
        ) : <></>}
        </div>
    </>
    )
}

export default GuestList
