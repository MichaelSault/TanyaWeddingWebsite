
import '../stylesheets/envelope.css';
import invitation from '../icon.png'

function Envelope() {


    return (
        <>
        <envelopebody>
            <div className='envelope'>
                <div className='top-side'></div>
                <div className='left-side'></div>
                <div className='invite'>
                    <a href='\guest'><img src={invitation} alt='wedding invitation'/></a>
                </div>
                <div className='right-side'></div>
                <div className='bottom-side'></div>
            </div>
        </envelopebody>
        </>
  )
}

export default Envelope;