import {useNavigate} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';


import '../App.css'
import Sidebar from "./Sidebar";
import EngagementCarosel from "./EngagementCarosel";
import TitleHeader from "./TitleBanner";

function Home() {
  const navigate = useNavigate();

  return (
    
    <>
        <TitleHeader />

        <Sidebar />

        <EngagementCarosel />

    </>
  )
}

export default Home
