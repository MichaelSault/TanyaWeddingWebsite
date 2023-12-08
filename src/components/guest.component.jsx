import TitleHeader from './titleBanner.component';
import EventCard from './eventCard.component';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


import '../App.css'

function Guest() {
    const navigate = useNavigate();
    const [guest, setGuest] = useState({
        email: String, 
        code: String, 
        firstName: String, 
        lastName: String,
        sangeet: Boolean,
        maiyan: Boolean,
        mendhi: Boolean,
        choora: Boolean,
        sikh: Boolean,
        civil: Boolean
      });

    useEffect(() => {
        const loggedInUser = document.cookie.split('=')[1];
        console.log(loggedInUser);
        if (loggedInUser) {
            console.log("Guest is logged in");
            decodeJWT(loggedInUser);
        } else {
            console.log("No guest is logged in");
            navigate("/RSVP");
        }
        console.log(loggedInUser);
    }, []);

    const decodeJWT = async (token) => {
        console.log("token: ", token)
        const tokenData = await fetch('http://localhost:3001/decodeJWT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Token: token
        })
        })
        .then(res => res.json());

        console.log(tokenData);
        setGuest(tokenData);
    }

    return (
        <>
            <TitleHeader Title={guest.firstName}/> 
            <h4>Welcome {guest.firstName} {guest.lastName}</h4>
            <div id='bodyEventCards' className='hide-mobile'>
                <div className='eventCardsRow'>
                    { guest.sangeet ? 
                        <EventCard eventName = "Sangeet & Jaggo" date = "Monday, August 12, 2024" time = "6:00pm-11:00pm" location = "Burlington" description = "Join us for a night of music and dancing to kick off the wedding week.  Dancing and drinks will be provided."/>
                    : "" }
                    { guest.maiyan ? 
                        <EventCard eventName = "Maiyan" date = "Wednesday, August 14, 2024" time = "5:00pm-9:00pm" location = "Burlington" description = "A paste of haldi (turmeric) is applied to the bride and groom's body before the wedding.  Haldi is used to cleanse and purify the body.  Guests will also have the opportunity to have mendhi (henna) applied to one hand.  Dinner will be provided."/>
                    : "" }
                    { guest.mendhi ? 
                        <EventCard eventName = "Mendhi" date = "Thursday, August 15, 2024" time = "5:00pm-9:00pm" location = "Burlington" description = "During this event, the bride gets intricate henna paste designs painted onto her hands and feet. The bride is surrounded by her female friends and family who celebrate through song and dance. Snacks provided."/>
                    : "" }
                    { guest.choora ? 
                        <EventCard eventName = "Choora" date = "Saturday, August 16, 2024" time = "5:00pm-8:00pm" location = "Burlington" description = "The bride's maternal uncles and aunts perform the Choora ceremony. The Choora are bangles worn by the bride for 40 days to bring luck to the newlywed couple. Kaleeras are tied by the bride's cousins and close friends to provide best wishes to the bride."/>
                    : "" }
                    { guest.sikh ? 
                        <EventCard eventName = "Anand Karaj (Sikh Ceremony)" date = "Saturday, August 17, 2024" time = "9:00am-2:00pm" location = "Dundas & Burlington" description = "The day will begin with the baraat (groom's parade). The anand karaj is comprised of a series of prayers and hymns (lavanns) which symbolizes the bride and grooms vows to one another. Chai and breakfast will be provided before the ceremony. A vegetarian langar (lunch) will be provided after the ceremony. Family and wedding party will then go to the bride's mother's house for the doli ceremony."/>
                    : "" }
                    { guest.civil ? 
                        <EventCard eventName = "Civil Ceremony & Reception" date = "Sunday, August 18, 2024" time = "3:00pm-1:00am" location = "Burlington" description = "The civil wedding ceremony will take place followed by cocktail hour, dinner and dancing to celebrate the final day of the wedding week."/>
                    : "" }
                
                <div></div>            
                </div>
            </div>

        </>
  )
}

export default Guest;