import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Logo/logo_white.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/youtube.svg";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} id ='footer-image'>
            <Image src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/optimusexpert" target="_blank" rel="noreferrer"><Image src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/lakshit2808" target="_blank" rel="noreferrer"><Image src={navIcon2} alt="Icon" /></a>
              <a href="https://youtube.com/codewithlakshit" target="_blank" rel="noreferrer"><Image src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
            <a rel="preload" as="/privacy-policy" href="/privacy-policy" className="text-indigo-300 hover:text-indigo-100 mx-2">Privacy Policy</a>
        <a rel="preload" as="/terms-conditions" href="/terms-conditions" className="text-indigo-300 hover:text-indigo-100 mx-2">Terms & Conditions</a>
        <a rel="preload" as="/refund-policy" href="/refund-policy" className="text-indigo-300 hover:text-indigo-100 mx-2">Refund Policy</a>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
