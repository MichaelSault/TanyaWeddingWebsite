import EventCard from './EventCard';

import '../App.css'

function Events() {


  return (
    <>
        <div id='bodyEventCards'>
            <div className='eventCardsRow'>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
            <div className='eventCardsRow'>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    </>
  )
}

export default Events;
