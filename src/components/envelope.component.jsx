
import '../stylesheets/envelope.css';
import invitation from '../../public/Luxaryball.png'

function Envelope() {


    return (
        <>
        <body>
            <div className='envelope'>
                <div className='top-side'></div>
                <div className='left-side'></div>
                <div className='invite'>
                    <img src={invitation} alt='wedding invitation'/>
                </div>
                <div className='right-side'></div>
                <div className='bottom-side'></div>
            </div>
        </body>
        </>
  )
}

export default Envelope;