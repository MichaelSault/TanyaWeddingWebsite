import '../App.css';

//replace with a taller version of the photo from user
import WeddingPhoto10 from '../assets/CarouselPhotos/TanyaWedding10.jpg'

function Schedule() {


    return (
        <>
            <div className='faqRow'>
                <div className='faqTitleCol'>
                    <div className='scheduleTitleSubCol'>
                        <h6>WEDDING WEEK SCHEDULE</h6>
                        <hr></hr>
                        <h2>Coming soon.</h2>
                    </div>
                </div>
                <div className='faqQuestionsCol'>
                    <div className='faqQuestionsSubCol'>
                        <img src={WeddingPhoto10} alt="Wedding Photo" width="100%" />
                    </div>
                </div>
            </div>
        </>
  )
}

export default Schedule;