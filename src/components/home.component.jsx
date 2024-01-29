import '../App.css'
import { useState, useCallback } from 'react';

import TitleHeader from './titleBanner.component';
import EventCard from './eventCard.component';
import FAQ from './faq.componenet';
import EngagementShoot from './engagementShoot.component';
import Schedule from './schedule.component';
import Songs from './songs.component';
import Registry from './registry.component';
import Attire from './attire.component';
import RSVPTag from './RSVPTag.compopnent';

import Code from './code.componenet';


import Header from '../assets/Header/Header.png';
import WeddingEvents from '../assets/Header/WeddingEvents.png';
import event1 from '../assets/eventPhotos/event1.png';
import event2 from '../assets/eventPhotos/event2.jpg';
import event3 from '../assets/eventPhotos/event3.jpg';

function Home() {

  const [code, setCode] = useState({
    isValid: false
  });

  const validate = useCallback(() => {
    setCode(prev => {
      return {
        ...prev,
        isValid: true
      };
    });
    console.log(code.isValid);
  });

  return (
    <>
        { !code.isValid ? <Code validate={validate}/> : <>
        <TitleHeader Title={'Justin & Tanya'}/> 

        <img src={Header} className="d-block" height="60%" alt="..."/>

        <Schedule/>

        <FAQ />

        <EngagementShoot/>

        {/* <Songs/> */}

        {/* <Registry/> */}

        <Attire/>

        <RSVPTag/>
        </>
      }
    </>
  )
}

export default Home;