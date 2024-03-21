import { forwardRef } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from 'react-bootstrap';
import { createTheme } from '@mui/material';

import axios from 'axios';

import '../App.css'

// eslint-disable-next-line react/display-name
const EventCard = forwardRef(
    (
        {
            guestEmail,
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

        const rsvpEvent = async(event) => {
            event.preventDefault();
            console.log("user is rsvping for:", eventName);
        
            axios.put(`http://localhost:3001/rsvpEvent/`, {email: guestEmail, eventName: eventName, rsvpValue: 2})
            .then(res => console.log(res))
            .catch((err) => console.log(err));
        
          };
    
    return (
        <>
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

                    {active ?
                    <CardActions className='cardLinks'>
                        <Button size="small" onClick={rsvpEvent}>RSVP</Button>
                    </CardActions>
                    :
                    <CardActions className='cardLinks'>
                        <Button size="small" onClick={rsvpEvent}>RSVP</Button>
                    </CardActions>
                    }
                    </div>
                </Card>
            </div>
            
        </>
    )
    }
);

export default EventCard;
