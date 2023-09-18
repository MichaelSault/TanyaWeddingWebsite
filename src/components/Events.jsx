import TitleHeader from './TitleBanner';
import EventCard from './EventCard';

import '../App.css'

function Events() {


  return (
    <>
        <TitleHeader Title={'Events'}/> 
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
