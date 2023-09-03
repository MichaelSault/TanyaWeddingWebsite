import {useNavigate} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';


import '../App.css'

function Home() {
  const navigate = useNavigate();

  return (
    
    <>
        {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..." />
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div> */}

        <Accordion defaultActiveKey="0" style={{width:"1000px"}}>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Reception Party</Accordion.Header>
                <Accordion.Body>
                    Information about the reception can go here and we can make visible to only users who are invited.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>The Big Day!</Accordion.Header>
                <Accordion.Body>
                    Information about the actual wedding.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>After Party</Accordion.Header>
                <Accordion.Body>
                    <p>Date:</p>
                    <p>Time:</p>
                    <p>Location:</p>
                    <p>Ect...:</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
  )
}

export default Home
