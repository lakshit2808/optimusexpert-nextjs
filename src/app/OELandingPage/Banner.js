'use client'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import Image from "next/image";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(80 - Math.random() * 0.5); 
  const toRotate = ["Where Numbers meets Precision, Performance, and Profitability."];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(50);
        } else {
        }
      }      
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, isDeleting, loopNum, toRotate])


  return (
    <section className="banner banner-up" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to Optimus Expert</span>
                <h1>{``} <span className="txt-rotate" dataperiod="500" data-rotate='[""]'><span className="wrap">{text}</span></span></h1>
                  <p id="banner-info">We are your trusted partner in navigating ongoing transformation across sectors, services, and platforms. At Optimus Expert, we believe in propelling the future of users, corporate entities, and institutions by seamlessly integrating the power of innovation, technology, and information. From New York to Mumbai, London to Canberra, we extend our minds, ideas, and challenge the boundaries of the conservative establishment.
                  <br/><br/>
Leverage cutting-edge technologies, embrace new opportunities, and experience exponential growth. With Optimus Expert, you gain the agility and durability needed to thrive in today&apos;s rapidly evolving landscape. Let us empower you to embrace transformation, unlock precision, achieve outstanding performance, and drive profitability.</p>
                  <a rel="preload" as="document" href="/form" id="connect-redirect">Let&apos;s Connect <ArrowRightCircle size={25} /></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn animated-astronaut" : ""}>
                  <Image src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
