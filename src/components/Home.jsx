import {useNavigate} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';


import '../App.css'

function Home() {
  const navigate = useNavigate();

  return (
    
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header width="100%">Reception Party</Accordion.Header>
            <Accordion.Body>
                Information about the reception can go here and we can make visible to only users who are invited.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>The Big Day!</Accordion.Header>
            <Accordion.Body>
                Information about the actual wedding.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    
  )
}

export default Home
