import { forwardRef } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '../App.css'

import event1 from '../assets/CarouselPhotos/TanyaWedding1.jpg'

// eslint-disable-next-line react/display-name
const EventCard = forwardRef(
    (
        {
            eventName,
            date,
            location,
            time,
            description
        },
        ref
    ) => {

    return (
        <>
            <div className='eventCard'>
                <Card className='cardText'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={event1}
                        title={eventName}
                    />

                    <div className='cardText'>
                    <CardContent>
                        
                        <Typography gutterBottom variant="h5" component="div">
                            {eventName}
                        </Typography>
                        <Typography gutterBottom variant="caption" component="div">
                            {date} - {time} @{location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>

                    <CardActions className='cardLinks'>
                        <Button size="small">RSVP</Button>
                        {/* <Button size="small">Learn More</Button> */}
                    </CardActions>
                    </div>
                </Card>
            </div>
            
        </>
    )
    }
);

export default EventCard;
