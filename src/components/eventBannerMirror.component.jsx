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
            <div className='eventRowLeft'><h3 id='eventText'>Date: </h3><p id='eventTextinfo'>{date}</p></div>
            <div className='eventRowLeft'><h3 id='eventText'>Location: </h3><p id='eventTextinfo'>{location}</p></div>
            <div className='eventRowLeft'><h3 id='eventText'>Details: </h3><p id='eventTextinfo'>{details}</p></div>
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
