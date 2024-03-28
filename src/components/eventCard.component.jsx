import { forwardRef } from 'react';
import {useState, useEffect} from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Modal } from "react-bootstrap";


import axios from 'axios';

import '../App.css'
import { Input } from '@mui/material';

// eslint-disable-next-line react/display-name
const EventCard = forwardRef(
    (
        {
            guestEmail,
            rsvpValue,
            eventName,
            date,
            location,
            address,
            time,
            description,
            active,
            eventPhoto
        },
        ref
    ) => {


        //setters for post update modals
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [rsvp, setRSVP] = useState(rsvpValue);
        console.log(rsvp);

        const rsvpEvent = async(event) => {
            event.preventDefault();
            console.log("user is rsvping for:", eventName);
            console.log("event currently has value of:", rsvp);

            if (rsvp == 1) {
                setRSVP(2);
                
            } else if (rsvp == 2) {
                setRSVP(1);
            }

            console.log("updating rsvp value to:", rsvp);
        
            axios.put(`http://localhost:3001/rsvpEvent/`, {email: guestEmail, eventName: eventName, rsvpValue: rsvp})
            .then(res => console.log(res))
            .catch((err) => console.log(err));
        
            
        };
    
    return (
        <>
            <Modal className='center' show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>RSVP for {eventName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {rsvp == 1 ?
                        <CardActions className='cardLinks'>
                            <Button size="small" onClick={rsvpEvent}>Yes, I can attend!</Button>
                        </CardActions>
                        : rsvp == 2 ?
                        <CardActions className='cardLinks'>
                            <Button size="small" onClick={rsvpEvent}>No, I can't make it</Button>
                        </CardActions>
                        : <></>
                    }
                    Can anyone in your party not attend? : <Input type='text'></Input>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className='eventCardRSVP'>
                <Card className='cardText'>
                    <CardMedia
                        sx={{ minHeight: 75 }}
                        image={eventPhoto}
                        title={eventName}
                    />

                    <div className='cardText'>
                    <CardContent>
                        <Typography fontFamily='Montserrat' gutterBottom variant="h5" component="div">
                            {eventName}
                        </Typography>
                        <Typography fontFamily='Montserrat' fontWeight='bold' gutterBottom variant="caption" component="div">
                            {date} - {time} @{location}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography fontFamily='Montserrat' variant="body2" color="text.secondary">
                            {address}
                        </Typography>
                    </CardContent>

                    {rsvp == 1 ?
                    <CardActions className='cardLinks'>
                        <Button size="small" onClick={handleShow}>RSVP</Button>
                    </CardActions>
                    : rsvp == 2 ?
                    <CardActions className='cardLinks'>
                        <Button size="small" onClick={handleShow}>Can't make it?</Button>
                    </CardActions>
                    : <></>
                    }
                    </div>
                </Card>
            </div>
            
        </>
    )
    }
);

export default EventCard;
