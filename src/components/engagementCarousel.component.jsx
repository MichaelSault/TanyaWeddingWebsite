import '../App.css'

//import photos because gh-pages doesn't like direct links apparently
import carouselPhoto1 from '../assets/CarouselPhotos/TanyaWedding1.jpg';
import carouselPhoto2 from '../assets/CarouselPhotos/TanyaWedding2.jpg';
import carouselPhoto3 from '../assets/CarouselPhotos/TanyaWedding3.jpg';
import carouselPhoto4 from '../assets/CarouselPhotos/TanyaWedding4.jpg';
import carouselPhoto5 from '../assets/CarouselPhotos/TanyaWedding5.jpg';
import carouselPhoto6 from '../assets/CarouselPhotos/TanyaWedding6.jpg';
import carouselPhoto7 from '../assets/CarouselPhotos/TanyaWedding7.jpg';
import carouselPhoto8 from '../assets/CarouselPhotos/TanyaWedding8.jpg';
import carouselPhoto9 from '../assets/CarouselPhotos/TanyaWedding9.jpg';
import carouselPhoto10 from '../assets/CarouselPhotos/TanyaWedding10.jpg';

function EngagementCarousel() {
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
                      <img src={carouselPhoto1} className="d-block" width="100%" height="700px" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={carouselPhoto2} className="d-block" width="100%" height="700px" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={carouselPhoto3} className="d-block" width="100%" height="700px" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={carouselPhoto4} className="d-block" width="100%" height="700px" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={carouselPhoto5} className="d-block" width="100%" height="700px" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={carouselPhoto6} className="d-block" width="100%" height="700px" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={carouselPhoto7} className="d-block" width="100%" height="700px" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={carouselPhoto8} className="d-block" width="100%" height="700px" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={carouselPhoto9} className="d-block" width="100%" height="700px" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={carouselPhoto10} className="d-block" width="100%" height="700px" alt="..."/>
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
  
  export default EngagementCarousel
  