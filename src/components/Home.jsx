import '../App.css'
import Sidebar from "./Sidebar";
import EngagementCarosel from "./EngagementCarosel";
import EventBanner from './EventBanner';
import EventBannerMirror from './EventBannerMirror';


function Home() {

  return (
    <>
        <div id='bodyTest'>

          <Sidebar />

          <EngagementCarosel />
        
        </div>
        
          <EventBanner event={'Reception'} date={'Aug 1st'} location={'Burlington'} details={'Here are some initial details'}/>
          <EventBannerMirror event={'Wedding'} date={'Aug 2nd'} location={'Oakville'} details={'Here are some wedding details'}/>
          <EventBanner event={'After Party'} date={'Aug 3rd'} location={'Mississauga'} details={'Here are some more details'}/>
          
    </>
  )
}

export default Home
