import React from "react";
import { Container , Row , Col } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import homeImg from "../img/1.png"
import {faTwitter,faFacebookF,faInstagram} from '@fortawesome/free-brands-svg-icons'





const Home = ()=>{

  
    return (
   
        <section className="theHome" id="home">
            <Container>
                <Row className="align-items-center ">
                    <Col xs={12} md={6} xl={7}>
                         <span className="welcome">Welcome to LapHub</span>
                         <h4></h4>
                         <h1> your ultimate destination for <span className="finding">finding the perfect laptop!</span></h1>
                         <p>Whether you're a student, a professional, or a gaming enthusiast, 
                            we've got you covered with a wide selection of high-quality laptops
                             at unbeatable prices. Explore our range of top brands, cutting-edge
                              features, and customizable options to find the laptop that suits
                               your needs. Upgrade your tech game today with LaptHub!"
                               </p>
                         <button> <a href="#products">See More </a><FontAwesomeIcon className="theHomeIcon" icon={faArrowRight} /></button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <div className="back">
                        <img className="theHomeImg" src={homeImg}/>
                        </div>

                        <div className="socialLink">
                        <a href="https://x.com/anasyoussif3?t=SH1q2DAM8uvLR05sV3AVSg&s=08" target="_blank">
                          <FontAwesomeIcon className="icon" icon={faTwitter} /></a>

                         <a href="https:www.facebook.com/anas.youssif.5?mibextid=2JQ9oc" target="_blank">
                         <FontAwesomeIcon className="icon" icon={faFacebookF} />
                          </a>

                        <a href="https:www.instagram.com/anas_sx0?igsh=MWc3NGFldGJwY2Jtcg==" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                         </a>
                        </div>
                  
                     
                    </Col>
                </Row>
            </Container>
        </section>
  

    )
}

 

export default Home;