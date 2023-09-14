import { forwardRef } from 'react';
import '../App.css';

// eslint-disable-next-line react/display-name
const EventBannerMirror = forwardRef(
  (
    {
      event,
      date,
      location,
      details
    },
    ref

  ) => {

  return (
    <>
      <div className='EventHeader' width='100%'>
      <div className='eventDetails'>
            <div className='eventRowLeft'><h1 id='eventText'>Date: </h1><h1 id='eventTextinfo'>{date}</h1></div>
            <div className='eventRowLeft'><h1 id='eventText'>Location: </h1><h1 id='eventTextinfo'>{location}</h1></div>
            <div className='eventRowLeft'><h1 id='eventText'>Details: </h1><h1 id='eventTextinfo'>{details}</h1></div>
        </div>
        <div className='eventName'>
            <h1 id='eventTitle'>{event}</h1>
        </div>
        
      </div>

    </>
  )
  }
);

export default EventBannerMirror;
