
import React from "react";
import "../styles/home.css";
import { Container, Row, Col, CardSubtitle } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import heroprix from "../assets/images/prix.png"
import herovoyager from "../assets/images/voyager.png"
import herocasque from "../assets/images/casque.png"
import herosahera1 from "../assets/images/sahera1.jpg"
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";


const Home = () => {
  return ( 
      <>

{/*================= hero section start-================= */}

    <section>
    <Container>
        <Row>
            <Col lg="6">
                <div className="hero__content">
                        <h1 className="center-align">
                        Plan a trip in minutes with <br /> {" "}
                      <span className="highlight">AI travel planner</span>
                    </h1>

                    <p>Create travel plan with travel deals, place to stay,
                       things to do and more for your style.
                        *We are in beta.
                     </p>
                     </div>
                     </Col>

        <Col lg="2">   

<br></br>
<br></br> 
        
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
                
        </Col>
               
    <SearchBar />
    </Row>
    </Container>
      </section>

 {/*================= hero section start================= */}

                                      <br></br>

    <section style={{ backgroundColor: '#498183' }}>
  <Container>
    <Row className="text-center"> 
      <Col lg="10" className="mx-auto"> 
        <h5 className="services_subtitle">what we serve</h5>
        <h2 className="services_title">We offer our best services</h2>
        <br></br><br></br>
      </Col>
      <ServiceList />
    </Row>
  </Container>
    </section>


 {/* ================= featured tour section start =================*/}

     <section>
        <Container>
        <Row className="text-center"> 
        <Col lg="12" className="mb-5">
              <h2 className="featured__tour-title">Best Morocco Tours </h2>
               <br></br>

                <p> <span className="high">Morocco</span> is the place where you can witness the four seasons as you travel From the green lands and snow-capped mountains in the north, to the palm oases and the Sahara desert in the south. A land of contrast, with a <span className="high">rich culture, history </span>and <span className="high">spectacular </span>landscapes. In addition, Morocco is the closest country in <span className="high">North Africa </span>to  <span className="high">Europe</span>, 14 kilometres (9 miles) away from Spain, which makes it easier for travelers to enter the country.</p>

              <h2 className="services_sub" >Choose your destination</h2>
            </Col>
            <FeaturedTourList/>      
          </Row>
        </Container>
      
      </section>

 {/*================= experiencesection start =================*/}

      <section>
        <Container>
        <Row> 
        <Col lg="6">
              
                <h2 className="services_sub">Why choose us</h2>
                
                <h2 className="featured2__tour-title">Great opportunity for you to discover Morocco</h2>

                <br></br>

                <div className="casque">
                  
                  <img src={herocasque} alt=""  />
                  
                    <h2 className="icon_title">Safety first always</h2>  
                    </div>
              <p className="casque_p">Your safety is our commitment to secure and thriving environment for all.</p>
              
             <br></br>
             <br></br>
              
              <div className="voyager">
                  
                  <img src={herovoyager} alt=""  />
                  
                    <h2 className="icon_title">Low price & friendly</h2>  
              </div>
              <p className="voyager_p">Unbeatable prices with a warm and friendly touch —<br></br>
               because value should always come with a smile</p> 


              <br></br>
              <br></br>
              <br></br>

                <div className="prix">
                  
                    <img src={heroprix} alt=""  />
                        
                      <h2 className="icon_title">Trusted travel guide</h2>  
                    </div>
                    <p className="prix_p">Reliable travel guide ensuring seamless and unforgettable adventures.</p> 
                    <br></br> <br></br> 
            </Col>   
                     <Col lg="2">

            <br></br><br></br><br></br>
            <br></br><br></br><br></br>
            <br></br><br></br><br></br>
                            
                    <div className="hero__img-box2">
                        <img src={herosahera1} alt="" />
                   </div>
          </Col>
         </Row>
        </Container>
      </section>

 {/* ================= testimonial section start =================*/}
            <section style={{ backgroundColor: '#f8f9fa' }}>
            <Container>
              <Row>
                <Col lg="12">
                  <h2 className="tistimonial__title" >What Our Users Say</h2>
                  </Col>
                  <Col lg="12">
                    <Testimonials />
                  </Col>
         </Row>
        </Container>
        </section>
        
 {/* ================= testimonial section end ================= */}
     
     <Newsletter/>
      </>
      
      );
      
};

export default Home;
