import { Button } from '@mui/material';
import '../App.css';

function RSVPTag() {


    return (
        <>
            <div className='rsvpRow'>
                
                        <h6>We hope to see you from the altar.</h6>
                    <hr/>

                <div className='rsvpDeadline'>
                    <h7>We kindly request your response by May 6, 2024.  Cheers!</h7>
                    <button className='rsvpTagButton'>RSVP now</button>
                </div>
            </div>
        </>
  )
}

export default RSVPTag;