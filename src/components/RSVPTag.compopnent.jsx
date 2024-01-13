import { Button } from '@mui/material';
import '../App.css';

function RSVPTag() {


    return (
        <>
            <div className='faqRow'>
                <div className='faqTitleCol'>
                    <div className='faqTitleSubCol'>
                        <h6>We hope to see you from the altar.</h6>
                    <hr/>
                    </div>
                </div>
                <div className='faqQuestionsCol'>
                    <div className='faqQuestionsSubCol'>
                        <h4>We kindly request your response by May 6, 2024.  Cheers!</h4>
                        <button>RSVP now</button>
                    </div>
                </div>
            </div>
        </>
  )
}

export default RSVPTag;