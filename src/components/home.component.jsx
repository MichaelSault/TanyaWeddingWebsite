import '../App.css'
import TitleHeader from './titleBanner.component';
import EventCard from './eventCard.component';
import FAQ from './faq.componenet';
import EngagementShoot from './engagementShoot.component';
import Schedule from './schedule.component';
import Songs from './songs.component';
import Registry from './registry.component';
import Attire from './attire.component';
import RSVPTag from './RSVPTag.compopnent';


function Home() {

  return (
    <>
        <TitleHeader Title={'Justin & Tanya'}/> 

        <img src="src/assets/Header/Header.png" className="d-block" height="60%" alt="..."/>
        <img src="src/assets/Header/WeddingEvents.png" className="d-block" height="60%" alt="..."/>
        
        <div className='weddingEventsBackground'>
          <div id='bodyEventCards'>
              <div className='eventCardsRow'>
                  <EventCard eventName = "Anand Karaj (Sikh Ceremony)" date = "Saturday, August 17, 2024" time = "8:30am" location = "Gurdwara Shaheedgarh Sahib Hamilton" address = "200 Old Guelph Rd, Hamilton, ON L9H 5X6" description = "" active = {false}/>
                  <EventCard eventName = "Civil Ceremony" date = "Sunday, August 18, 2024" time = "3:00pm" location = "The Pearle Hotel. The Laurentide Room" address = "Elizabeth St, Burlington, ON L7R 0G3" description = "" active = {false}/>
                  <EventCard eventName = "Civil Ceremony & Reception" date = "Sunday, August 18, 2024" time = "3:30pm" location = "The Pearle Hotel. The Edgewater Room" address = "Elizabeth St, Burlington, ON L7R 0G3" description = "" active = {false}/>
              </div>
          </div>
        </div>

        <FAQ/>

        <EngagementShoot/>

        <Schedule/>

        <Songs/>

        <Registry/>

        <Attire/>

        <RSVPTag/>
    </>
  )
}

export default Home