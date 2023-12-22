import '../App.css'
import TitleHeader from './titleBanner.component';
import Sidebar from "./sidebar.component";
import EngagementCarosel from "./engagementCarosel.component";
import EventBanner from './eventBanner.component';
import EventBannerMirror from './eventBannerMirror.component';


function Home() {

  return (
    <>
        <TitleHeader Title={'Justin & Tanya'}/> 

          {/* <EventBanner event={'Anand Karaj'} date={'Aug 17th'} location={'Burlington'} details={"The day will begin with the baraat (groom's parade). The anand karaj is comprised of a series of prayers and hymns (lavanns) which symbolizes the bride and grooms vows to one another."}/>
          <EventBannerMirror event={'Civil Ceremony'} date={'Aug 18th'} location={'Burlington'} details={"The civil wedding ceremony will take place followed by cocktail hour, dinner and dancing to celebrate the final day of the wedding week."}/> */}
        
        
          <img src="src/assets/Header/WeddingEvents.png" className="d-block" width="100%" height="60%" alt="..."/>
        <div id='primaryEvents'>
          <div id='event' width="33%" height="40%">
            <div className='eventTitle'> 
              <h2 id='redText'>Anand Karaj (Sikh Ceremony)</h2>
            </div>
            <ul>
              <li>Gurdwara Shaheedgarh Sahib Hamilton</li>
              <li>8:30am</li>
              <li>200 Old Guelph Rd, Hamilton, ON L9H 5X6</li>
            </ul>
          </div>
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
        </div>
    </>
  )
}

export default Home
