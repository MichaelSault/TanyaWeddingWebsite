import '../App.css';

import EngagementCarousel from './engagementCarousel.component';

function EngagementShoot() {


    return (
        <>
            <div className='engagementShootRow' >
                    
                <div className='engagementShootCol'>
                    <div className='engagementShootSubColMobile'>
                        <h6>ENGAGEMENT SHOOT</h6>
                        <hr/>
                        <h2>Will send engagement pictures to be added as gallery closer to wedding date.</h2>
                        
                    </div>
                    <div className='engagementShootPhotoCol'>
                        <EngagementCarousel />
                    </div>
                </div>
                
                <div className='engagementShootCol'>
                    <div className='engagementShootSubColDesktop' >
                        <h6>ENGAGEMENT SHOOT</h6>
                        <hr/>
                        <h2>Will send engagement pictures to be added as gallery closer to wedding date.</h2>
                        
                    </div>
                </div>

            </div>
        </>
  )
}

export default EngagementShoot;