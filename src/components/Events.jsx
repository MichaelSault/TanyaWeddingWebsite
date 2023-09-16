import EventCard from './EventCard';

import '../App.css'

function Events() {


  return (
    <>
        <div id='bodyTest'>
            <div className='eventCardsRow'>
                <EventCard />
                <EventCard />
            </div>
        </div>
    </>
  )
}

export default Events;
