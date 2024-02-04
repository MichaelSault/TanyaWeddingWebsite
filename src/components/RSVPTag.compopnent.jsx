import { Button } from '@mui/material';
import '../App.css';

function RSVPTag() {


    return (
        <>
            <div className='rsvpRow'>
            <div className='rsvpTitle'>
                    <h6><i>We hope to see you from the altar!</i></h6>
                    {/* <hr className='hrRSVP'/> */}
            </div>
                {/* <div className='rsvpDeadline'>
                    <h7 className='elsie'>We kindly request your response by May 6, 2024.  Cheers!</h7>
                    <button disabled={true} className='rsvpTagButton elsie'>RSVP now</button>
                </div> */}
            </div>
        </>
  )
}

export default RSVPTag;