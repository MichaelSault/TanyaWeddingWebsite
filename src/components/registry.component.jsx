import '../App.css';

import RegistryBanner from '../assets/Photos/RegistryBanner.png';

function Registry() {


    return (
        <>
            <div className='registryRow'>
                    <div className='registryTitle'>
                        <h6>Your presence at our wedding is the only present we require</h6>
                    </div>
                    <div className='registryDescription'>
                        <h2>However, if you wish to further bless our special day with a gift, we have created an online registry at www.reallygreatsite.com.</h2>
                    </div>
                
            </div>
            <img src={RegistryBanner} className='registryImage' alt="..."/>
            
        </>
  )
}

export default Registry;