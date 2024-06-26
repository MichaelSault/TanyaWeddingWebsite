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
                        <hr className='hrSongTitle'/>
                        <h2 className='song'>Please select a song or two that will get you on the dancefloor!</h2>
                        <hr className='hrSongTitle'/>
                        <h2 className='song'>To be added closer to the wedding date with Spotify song search.</h2>
                    </div>
                </div>
                <img src={SongPhoto} className='songImageCol' alt="Wedding Photo"/>
            </div>
        </>
  )
}

export default Songs;