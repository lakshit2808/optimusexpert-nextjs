'use client'
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import axios from "axios";
import APIURL from "./APIURL";
import Image from "next/image";

export const Contact = () => {


  const formInitialDetails = {
    First_Name: '',
    Last_Name: '',
    Email: '',
    Phone_Number: '',
    Company_Name: '',
    Number_of_Emp: '',
    Message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const PostReq = (data) => {
    axios.post(APIURL, data)
      .then(res => console.log(res))
    // console.log(formDetails)
    // location.reload();
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
     (formDetails, "/oecontact")
    PostReq(formDetails)
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (

    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <Image className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="text" value={formDetails.First_Name} placeholder="First Name" onChange={(e) => onFormUpdate('First_Name', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('Last_Name', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="email" value={formDetails.Email} placeholder="Email Address" onChange={(e) => onFormUpdate('Email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="tel" value={formDetails.Phone_Number} placeholder="Phone No." onChange={(e) => onFormUpdate('Phone_Number', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="text" value={formDetails.Company_Name} placeholder="Company Name" onChange={(e) => onFormUpdate('Company_Name', e.target.value)}/>
                    </Col>   
                    <Col size={12} sm={6} className="px-1">
                      <input required type="tel" value={formDetails.Number_of_Emp} placeholder="Number of Employees" onChange={(e) => onFormUpdate('Number_of_Emp', e.target.value)}/>
                    </Col>                                        
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.Message} placeholder="Message" onChange={(e) => onFormUpdate('Message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
                
              </div>}

            </TrackVisibility>
          </Col>
          <div className="calendly-inline-widget" data-url="https://calendly.com/optimusexpert/30min?hide_gdpr_banner=1" style={{minWidth: "50%", height: "50pc", marginTop: "5px"}}></div>
        </Row>
      </Container>
    </section>

  )
}
