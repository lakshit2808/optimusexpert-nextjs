'use client'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/9027288.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import Image from "next/image";



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(80 - Math.random() * 0.5); 
  const toRotate = ["Build Scalable Trading Systems, AI Products, SaaS for your Business"];
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
              <div className={isVisible ? "animate__animated animate__fadeIn " : ""}>
                <span className="tagline mt-2">Welcome to Optimus Expert</span>
                <h1>{toRotate}</h1>
                  <p id="banner-info">
                  At Optimus Expert, our services are about developing high-tech systems for trading, innovative AI products, and scalable SaaS solutions that help you take your business forward. We build advanced AI-based platforms and systems for totally automated trading designed for the intent of enhancing intelligent decision-making and delivering top-notch performance. Whether you're a fintech startup, a hedge fund, an entrepreneur, or an individual trader, we enable the creation of necessary tools and expertise to deliver exceptional results and change profitability.
                    <br/><br/>
                    We offer customized solutions as per your needs with in-depth understanding of finance and technology by our experts. Starting from testing robust back and performance evaluation, through the development of advanced AI models, your business will leverage latest progress in the technology. Partner with us to revolutionize operations and unlock new growth opportunities through scalable and intelligent solutions.
                    </p>
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
