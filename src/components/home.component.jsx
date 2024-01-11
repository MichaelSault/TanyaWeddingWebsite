import '../App.css'
import TitleHeader from './titleBanner.component';
import EventCard from './eventCard.component';
import FAQ from './faq.componenet';
import EngagementShoot from './engagementShoot.component';
import Schedule from './schedule.component';
import Songs from './songs.component';


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

        <FAQ/>

        <EngagementShoot/>

        <Schedule/>

        <Songs/>
    </>
  )
}

export default Home