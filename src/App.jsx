import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{width:"100%", margin:"auto auto", textAlign:"center"}}>
        <h1>RSVP Here</h1>
        <Button variant="outline-dark" style={{width:"100%"}} onClick = {() => navigate("RSVP")}>Continue</Button>
      </div>
    </>
  )
}

export default App
