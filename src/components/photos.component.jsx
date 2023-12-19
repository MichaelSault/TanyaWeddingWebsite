
import '../App.css';

import TitleHeader from './titleBanner.component';
import EngagementCarosel from './engagementCarosel.component';

function Photos() {


    return (
        <>
            <TitleHeader Title={'Photos'}/>
            <div id='bodyCarousel'>
                <EngagementCarosel />
            </div>
            <h2>Sumbit addition photos to tanya.samra94@gmail.com</h2>
        </>
  )
}

export default Photos;