import TitleHeader from './TitleBanner';
import EventCard from './EventCard';

import '../App.css'

function Events() {


  return (
    <>
        <TitleHeader Title={'Events'}/> 
        <div id='bodyEventCards'>
            <div className='eventCardsRow'>
                <EventCard eventName = "Sangeet & Jaggo" date = "Monday, August 12, 2024" time = "6:00pm-11:00pm" location = "Burlington" description = "Join us for a night of music and dancing to kick off the wedding week.  Dancing and drinks will be provided."/>
                <EventCard eventName = "Maiyan" date = "Wednesday, August 14, 2024" time = "5:00pm-9:00pm" location = "Burlington" description = "A paste of haldi (turmeric) is applied to the bride and groom's body before the wedding.  Haldi is used to cleanse and purify the body.  Guests will also have the opportunity to have mendhi (henna) applied to one hand.  Dinner will be provided."/>
                <EventCard eventName = "Mendhi" date = "Thursday, August 15, 2024" time = "5:00pm-9:00pm" location = "Burlington" description = "During this event, the bride gets intricate henna paste designs painted onto her hands and feet. The bride is surrounded by her female friends and family who celebrate through song and dance. Snacks provided."/>
            </div>
            <div className='eventCardsRow'>
              <EventCard eventName = "Anand Karaj (Sikh Ceremony)" date = "Saturday, August 17, 2024" time = "9:00am-2:00pm" location = "Dundas & Burlington" description = "The day will begin with the baraat (groom's parade). The anand karaj is comprised of a series of prayers and hymns (lavanns) which symbolizes the bride and grooms vows to one another. Chai and breakfast will be provided before the ceremony. A vegetarian langar (lunch) will be provided after the ceremony. Family and wedding party will then go to the bride's mother's house for the doli ceremony."/>
              <EventCard eventName = "Civil Ceremony & Reception" date = "Sunday, August 18, 2024" time = "3:00pm-1:00am" location = "Burlington" description = "The civil wedding ceremony will take place followed by cocktail hour, dinner and dancing to celebrate the final day of the wedding week."/>
              <div></div>
              <div></div>
              
            </div>
        </div>
    </>
  )
}

export default Events;