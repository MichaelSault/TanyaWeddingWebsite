
import Accordion from 'react-bootstrap/Accordion';

import '../App.css'

function EngagementCarosel() {
    return (
      
      <>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="6" aria-label="Slide 7"></button>
                  <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="7" aria-label="Slide 8"></button>
                  <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="8" aria-label="Slide 9"></button>
                  <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="9" aria-label="Slide 10"></button>
              </div>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img src="src/assets/CarouselPhotos/TanyaWedding1.jpg" className="d-block" width="100%" height="100%" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src="src/assets/CarouselPhotos/TanyaWedding2.jpg" className="d-block" width="100%" height="100%" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src="src/assets/CarouselPhotos/TanyaWedding3.jpg" className="d-block" width="100%" height="100%" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src="src/assets/CarouselPhotos/TanyaWedding4.jpg" className="d-block" width="100%" height="100%" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src="src/assets/CarouselPhotos/TanyaWedding5.jpg" className="d-block" width="100%" height="100%" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src="src/assets/CarouselPhotos/TanyaWedding6.jpg" className="d-block" width="100%" height="100%" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src="src/assets/CarouselPhotos/TanyaWedding7.jpg" className="d-block" width="100%" height="100%" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src="src/assets/CarouselPhotos/TanyaWedding8.jpg" className="d-block" width="100%" height="100%" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src="src/assets/CarouselPhotos/TanyaWedding9.jpg" className="d-block" width="100%" height="100%" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src="src/assets/CarouselPhotos/TanyaWedding10.jpg" className="d-block" width="100%" height="100%" alt="..."/>
                  </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
      </>
    )
  }
  
  export default EngagementCarosel
  