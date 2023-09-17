import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '../App.css'

import event1 from '../assets/CarouselPhotos/TanyaWedding1.jpg'

function EventCard() {


  return (
    <>
        <div className='eventCard'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={event1}
                    title="Wedding Reception"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Wedding Reception
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">RSVP</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>

            </Card>
        </div>
        
    </>
  )
}

export default EventCard;
