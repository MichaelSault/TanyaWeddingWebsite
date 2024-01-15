import '../App.css';

import RegistryBanner from '../assets/Photos/RegistryBanner.png';

function Registry() {


    return (
        <>
            <div className='registryRow'>
                <div className='faqTitleCol'>
                    <div className='faqTitleSubCol'>
                        <h6>Your presence at our wedding is the only present we require</h6>
                    </div>
                </div>
                <div className='faqQuestionsCol'>
                    <div className='faqQuestionsSubCol'>
                        <h2>However, if you wish to further bless our special day with a gift, we have created an online registry at www.reallygreatsite.com.</h2>
                    </div>
                </div>
            </div>
            <img src={RegistryBanner} className="d-block" height="40%" alt="..."/>
        </>
  )
}

export default Registry;