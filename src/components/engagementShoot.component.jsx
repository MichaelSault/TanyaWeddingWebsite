import '../App.css';

import EngagementCarousel from './engagementCarousel.component';

function EngagementShoot() {


    return (
        <>
            <div className='faqRow'>
                
                <div className='faqQuestionsCol'>
                    <div className='faqQuestionsSubCol'>
                        <EngagementCarousel />
                    </div>
                </div>
                <div className='faqTitleCol'>
                    <div className='faqTitleSubCol'>
                        <h4>EngagementShoot</h4>
                        <hr/>
                        <h2>Will send engagement pictures to be added as gallery closer to wedding date.</h2>
                    </div>
                </div>
            </div>
        </>
  )
}

export default EngagementShoot;