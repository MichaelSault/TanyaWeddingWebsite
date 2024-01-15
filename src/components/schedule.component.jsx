import '../App.css';

//replace with a taller version of the photo from user
import SchedulePhoto from '../assets/Photos/SchedulePhoto.png'

function Schedule() {


    return (
        <>
            <div className='scheduleRow'>
                <div className='faqTitleCol'>
                    <div className='scheduleTitleSubCol'>
                        <h6>WEDDING WEEK SCHEDULE</h6>
                        <hr></hr>
                        <h2>Coming soon.</h2>
                    </div>
                </div>
                <div className='faqQuestionsCol'>
                        <img src={SchedulePhoto} className='scheduleImageSubCol' alt="Wedding Photo"/>
                </div>
            </div>
        </>
  )
}

export default Schedule;