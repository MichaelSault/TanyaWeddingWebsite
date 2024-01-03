import '../App.css'
import TitleHeader from './titleBanner.component';
import Sidebar from "./sidebar.component";
import EngagementCarousel from "./engagementCarousel.component";
import EventBanner from './eventBanner.component';
import EventBannerMirror from './eventBannerMirror.component';
import EventCard from './eventCard.component';


function Home() {

  return (
    <>
        <TitleHeader Title={'Justin & Tanya'}/> 

        <img src="src/assets/Header/WeddingEvents.png" className="d-block" width="1920px" height="60%" alt="..."/>
        
        <div id='bodyEventCards' className='hide-mobile'>
            <div className='eventCardsRow'>
                <EventCard eventName = "Anand Karaj (Sikh Ceremony)" date = "Saturday, August 17, 2024" time = "8:30am" location = "Gurdwara Shaheedgarh Sahib Hamilton" address = "200 Old Guelph Rd, Hamilton, ON L9H 5X6" description = "" active = {false}/>
                <EventCard eventName = "Civil Ceremony" date = "Sunday, August 18, 2024" time = "3:00pm" location = "The Pearle Hotel. The Laurentide Room" address = "Elizabeth St, Burlington, ON L7R 0G3" description = "" active = {false}/>
                <EventCard eventName = "Civil Ceremony & Reception" date = "Sunday, August 18, 2024" time = "3:30pm" location = "The Pearle Hotel. The Edgewater Room" address = "Elizabeth St, Burlington, ON L7R 0G3" description = "" active = {false}/>
            </div>
        </div>
    </>
  )
}

export default Home


{/* <div id='primaryEvents'>
          <div id='event' width="33%" height="40%">
            <h2 id='redText'>Civil Ceremony</h2>
            <ul>
              <li>The Pearle Hotel. The Laurentide Room</li>
              <li>3:00 p.m</li>
              <li>3 Elizabeth St, Burlington, ON L7R 0G3</li>
            </ul>
          </div>
          <div id='event' width="33%" height="40%">
            <div className='eventTitle'>
              <h2 id='redText'>Reception</h2>
            </div>
            <div width='1000px'>
            <ul>
              <li>The Pearle Hotel. The Edgewater Room</li>
              <li>3:30 p.m</li>
              <li>3 Elizabeth St, Burlington, ON L7R 0G3</li>
            </ul>
            </div>
          </div>
        </div> */}