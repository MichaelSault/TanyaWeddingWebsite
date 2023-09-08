import {useNavigate} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';


import '../App.css'
import Sidebar from "./Sidebar";
import EngagementCarosel from "./EngagementCarosel";

function Home() {
  const navigate = useNavigate();

  return (
    
    <>
        <Sidebar />

        <EngagementCarosel />

    </>
  )
}

export default Home
