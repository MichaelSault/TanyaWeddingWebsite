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
        
          <EventBanner event={'Sangeet & Jaggo'} date={'Aug 12th'} location={'Burlington'} details={"Join us for a night of music and dancing to kick off the wedding week. Dancing and drinks will be provided."}/>
          <EventBannerMirror event={'Maiyan'} date={'Aug 14th'} location={'Burlington'} details={"A paste of haldi (turmeric) is applied to the bride and groom's body before the wedding. Haldi is used to cleanse and purify the body. Guests will also have the opportunity to have mendhi (henna) applied to one hand. Dinner will be provided."}/>
          <EventBanner event={'Mendhi'} date={'Aug 15th'} location={'Burlington'} details={"During this event, the bride gets intricate henna paste designs painted onto her hands and feet. The bride is surrounded by her female friends and family who celebrate through song and dance. Snacks provided."}/>
          <EventBannerMirror event={'Choora'} date={'Aug 16th'} location={'Burlington'} details={"The bride's maternal uncles and aunts perform the Choora ceremony. The Choora are bangles worn by the bride for 40 days to bring luck to the newlywed couple. Kaleeras are tied by the bride's cousins and close friends to provide best wishes to the bride."}/>
          <EventBanner event={'Anand Karaj'} date={'Aug 17th'} location={'Burlington'} details={"The day will begin with the baraat (groom's parade). The anand karaj is comprised of a series of prayers and hymns (lavanns) which symbolizes the bride and grooms vows to one another."}/>
          <EventBannerMirror event={'Civil Ceremony'} date={'Aug 18th'} location={'Burlington'} details={"The civil wedding ceremony will take place followed by cocktail hour, dinner and dancing to celebrate the final day of the wedding week."}/>
    </>
  )
}

export default Home