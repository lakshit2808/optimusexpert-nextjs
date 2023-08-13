'use client'

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import storemax from "../assets/img/storemax.png"
import luxzira from "../assets/img/luxzira.png"
import devestments from "../assets/img/devestments.png"
import log from "../assets/img/log.png"
import xneuropy from "../assets/img/xneuropy.png"
import sck from "../assets/img/sck.png"

import ibbot from "../assets/img/ibbot.png"
import binance from "../assets/img/binance.png"
import coindcx from "../assets/img/coindcx.png"
import tradingview from "../assets/img/tradingview.png"
import flashloan from "../assets/img/flashloan.png"
import inicrypto from "../assets/img/ico.png"

import gravitation from "../assets/img/gravitation.png"
import b2b from "../assets/img/b2b.png"
import arcloth from "../assets/img/arcloth.png"
import flla from "../assets/img/FLLA.png"
import neut from "../assets/img/neut.png"
import ubereats from "../assets/img/ubereats.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import Image from "next/image";

export const Projects = () => {

  const projects3 = [
    {
      title: "G2Net Gravitational Wave Detection",
      description: "Analysis of Gravitational Wave Emitted from Blackhole",
      imgUrl: gravitation,
    },
    {
      title: "Halix Dimensions",
      description: "Tech Enabled B2B Marketplace",
      imgUrl: b2b,
    },
    {
      title: "Try-On Cloths",
      description: "Artificial Reality in Ecommerce",
      imgUrl: arcloth,
    },
    {
      title: "FLLA",
      description: "Foreign Language Learning App",
      imgUrl: flla,
    },
    {
      title: "Neutrio",
      description: "Diet Plan Recommendation App",
      imgUrl: neut,
    },
    {
      title: "UberEats Clone",
      description: "UberEats Mobile App Clone",
      imgUrl: ubereats
    },
  ];

  const projects2 = [
    {
      title: "Interactive Broker’s 350 Ticker Trading Bot",
      description: "Institutional Trade Automation Dashboard",
      imgUrl: ibbot,
    },
    {
      title: "Binance Futures & Spot Trading Bot",
      description: "Leverage Trading and Scalping Bot",
      imgUrl: binance,
    },
    {
      title: "CoinDCX Trading Bot",
      description: "DCA and Swing Trading Bots",
      imgUrl: coindcx,
    },
    {
      title: "TradingView Alert Automation",
      description: "Automate any Trading View Strategy",
      imgUrl: tradingview,
    },
    {
      title: "Crypto FlashLoan Arbitrage Bot",
      description: "Borrow and Build your Crpyto Portfolio",
      imgUrl: flashloan,
    },
    {
      title: "ICO Alerter",
      description: "Never Miss the Next Initial Coin Offering",
      imgUrl: inicrypto
    },
  ];

  const projects = [
    {
      title: "Devestments",
      description: "Trading Bot as a Service",
      imgUrl: devestments,
    },
    {
      title: "LuxZira",
      description: "Ecommerce Store",
      imgUrl: luxzira,
    },
    {
      title: "Legends of League",
      description: "Landing Design & Development",
      imgUrl: log,
    },
    {
      title: "X - Neuropy",
      description: "E - Learning Platform",
      imgUrl: xneuropy,
    },
    {
      title: "StoreMax",
      description: "Tech Product Application",
      imgUrl: storemax,
    },
    {
      title: "Surrey Custom Kicks",
      description: "Shoes Store",
      imgUrl: sck
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p id="project-info">From algorithm-heavy backend projects to stunning and interactive responsive web applications, we have worked on a diverse range of projects. Some of our works were shown below.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item className="project-links">
                      <Nav.Link  eventKey="first">Full Stack Application</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="project-links">
                      <Nav.Link  eventKey="second">Algorithmic Trading</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="project-links">
                      <Nav.Link eventKey="third">MVP</Nav.Link>
                    </Nav.Item>                                                                            
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Image className="background-image-right" src={colorSharp2} alt="img"></Image>
    </section>
  )
}
