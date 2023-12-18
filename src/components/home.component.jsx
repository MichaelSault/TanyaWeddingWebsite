import '../App.css'
import TitleHeader from './titleBanner.component';
import Sidebar from "./sidebar.component";
import EngagementCarosel from "./engagementCarosel.component";
import EventBanner from './eventBanner.component';
import EventBannerMirror from './eventBannerMirror.component';


function Home() {

  return (
    <>
        <TitleHeader Title={'Tanya & Justin'}/> 

        <div id='bodyCarousel'>

          {/* <Sidebar /> */}

          <EngagementCarosel />
        
        </div>
          <EventBanner event={'Anand Karaj'} date={'Aug 17th'} location={'Burlington'} details={"The day will begin with the baraat (groom's parade). The anand karaj is comprised of a series of prayers and hymns (lavanns) which symbolizes the bride and grooms vows to one another."}/>
          <EventBannerMirror event={'Civil Ceremony'} date={'Aug 18th'} location={'Burlington'} details={"The civil wedding ceremony will take place followed by cocktail hour, dinner and dancing to celebrate the final day of the wedding week."}/>
    </>
  )
}

export default Home
