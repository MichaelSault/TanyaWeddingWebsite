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
      <div className='EventHeaderMirror' height='100%' width='100%'>
      <div className='eventDetails'>
            <div className='eventRowLeft'><h2 id='eventText'>Date: </h2><p id='eventTextinfo'>{date}</p></div>
            <div className='eventRowLeft'><h2 id='eventText'>Location: </h2><h3 id='eventTextinfo'>{location}</h3></div>
            <div className='eventRowLeft'><h2 id='eventText'>Details: </h2><h3 id='eventTextinfo'>{details}</h3></div>
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
