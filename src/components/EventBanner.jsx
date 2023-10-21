import { forwardRef } from 'react';
import '../App.css';

// eslint-disable-next-line react/display-name
const EventBanner = forwardRef(
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
        <div className='eventName'>
            <h1 id='eventTitle'>{event}</h1>
        </div>
        <div className='eventDetails'>
            <div className='eventRowRight'><h2 id='eventText'>Date: </h2><p id='eventTextinfo'>{date}</p></div>
            <div className='eventRowRight'><h2 id='eventText'>Location: </h2><p id='eventTextinfo'>{location}</p></div>
            <div className='eventRowRight'><h2 id='eventText'>Details: </h2><p id='eventTextinfo'>{details}</p></div>
        </div>
      </div>

    </>
  )
  }
);

export default EventBanner;
