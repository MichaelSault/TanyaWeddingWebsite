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
        
          <EventBanner />
          <EventBannerMirror />
          <EventBanner />

    </>
  )
}

export default Home
