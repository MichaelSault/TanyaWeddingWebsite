
import '../App.css';

import TitleHeader from './titleBanner.component';
import EngagementCarousel from './engagementCarousel.component';

function Photos() {


    return (
        <>
            <TitleHeader Title={'Photos'}/>
            <div id='bodyCarousel'>
                <EngagementCarousel />
            </div>
            <h2>Submit additional photos to tanya.samra94@gmail.com</h2>
        </>
  )
}

export default Photos;