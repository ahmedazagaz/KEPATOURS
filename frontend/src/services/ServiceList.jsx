import React from "react";
import ServiceCard from "./ServiceCard";
import { Col, Row } from "reactstrap";

import tour1Img from "../assets/images/tour1.png";
import KEPA2Img from "../assets/images/KEPA2.png";
import Budget3Img from "../assets/images/Budget3.png";



const servicesData = [
  {
    imgUrl: tour1Img,
    title: "Tours booking",
    desc: "Discover the beauty of Morocco by booking your trip",
    
  },
  {
    imgUrl: KEPA2Img,
    title: "Best Tour Guide Kepa",
    desc: "Kepa is your answer to fun, easy travel planning.",
    
  },

  {
  imgUrl: Budget3Img ,
  title: "Plan your travel budget",
  desc: "Optimize trip expenses with personalized budgeting.",
},

];
  

const ServiceList = () => {
  return (
    <Row className="justify-content-center"> 
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default ServiceList;
