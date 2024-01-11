import '../App.css';

//replace with a taller version of the photo from user
import SongPhoto from '../assets/Photos/SongPhoto.png'

function Songs() {


    return (
        <>
            <div className='songRow'>
                <div className='songTitleCol'>
                    <div className='songTitleSubCol'>
                        <h6 className='song'>DJ PLAY THAT SONG</h6>
                        <hr/>
                        <h2 className='song'>Please select a song or two that will get you on the dancefloor!</h2>
                        <hr/>
                        <h2 className='song'>To be added closer to the wedding date with Spotify song search.</h2>
                    </div>
                </div>
                <div className='songImageCol'>
                        <img src={SongPhoto} className='songImageSubCol' alt="Wedding Photo"/>
                </div>
            </div>
        </>
  )
}

export default Songs;