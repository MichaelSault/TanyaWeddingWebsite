import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";

import axios from 'axios';

import '../App.css'

function GuestList() {
  const navigate = useNavigate();
  const [guests, setGuests] = useState([]);
  const [updatedGuest, setUpdatedGuest] = useState([]);

  //setters for post update modals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get("http://localhost:3001/posts")
    .then(res => {
        console.log(res);
        setGuests(res.data);
    })
    .catch((err) => console.log(err));
    }, []
  );

  const handleChange = (e) => {
    const {name, value} = e.target;

    setUpdatedGuest((prev) => {
        return {
            ...prev,
            [name]: value,
        };
    });
  };

  const saveUpdatedPost = () => {
      console.log(updatedGuest);
      axios.put(`http://localhost:3001/update/${updatedGuest._id}`, updatedGuest)
      .then(res => console.log(res))
      .catch((err) => console.Console.log(err));

      handleClose();
      window.location.reload();
  };

  const updateGuest = (guests) => {
    setUpdatedGuest(guests);
    handleShow();
  };


  return (
    <>
      <div style={{width:"100%", margin:"auto auto", textAlign:"center"}}>
        <h1>Guest List</h1>
      </div>
    
      <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Update a Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control 
                                placeholder="title"
                                name="title"
                                onChange={handleChange}
                            />
                            <Form.Control 
                                placeholder="description"
                                name="description"
                                onChange={handleChange}     
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={saveUpdatedPost}>
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
                      <h4>{guest.title}</h4>
                      <p>{guest.description}</p>
                      <div style={{display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
                          <Button style={{width:"100%", marginRight:"1rem"}}>UPDATE</Button>
                          <Button style={{width:"100%", marginRight:"1rem"}}>DELETE</Button>
                      </div>
                  </div>
              );
          })}
      </>
    ) : <></>}

  </>
  )
}

export default GuestList
