'use client'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Logo/logo_white.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/youtube.svg';
import navIcon4 from '../assets/img/instagram.png';
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (

      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <Image id="nav-logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Link href="/#home" className={activeLink === 'home' ? 'active product-link' : 'product-link'} onClick={(e) => onUpdateActiveLink('home')}   >Home</Link>
              <Link href="/#services" className={activeLink === 'services' ? 'active product-link' : 'product-link'} onClick={(e) => onUpdateActiveLink('services')}>Services</Link>
              <Link href='/#blog' className={activeLink === 'blog' ? 'active product-link' : 'product-link'} onClick={(e) => onUpdateActiveLink('blog')}>Insights</Link> */}
              <a rel="preload" as="/#home" href="/#home" className={activeLink === 'home' ? 'active product-link' : 'product-link'} onClick={() => onUpdateActiveLink('home')}>Home</a>
              <a rel="preload" as="/#services" href="/#services" className={activeLink === 'skills' ? 'active product-link' : 'product-link'} onClick={() => onUpdateActiveLink('skills')}>Services</a>
              <a rel="preload" as="/#blog" href='/#blog' className={activeLink === 'blog' ? 'active product-link' : 'product-link'} onClick={() => onUpdateActiveLink('blog')}>Insights</a>             
              <a rel="preload" as="document" href='/products' className={activeLink === 'products' ? 'active product-link' : 'product-link'} onClick={(e) => onUpdateActiveLink('products')}>Products</a>

              {/* <Nav.Link href='#testimonials' className={activeLink === 'testimonials' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('testimonials')}>Testimonials</Nav.Link> */}
              <Link rel="preload" as="/#project" href="/#project" className={activeLink === 'projects' ? 'active product-link' : 'product-link'} onClick={(e) => onUpdateActiveLink('projects')}>Projects</Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/lakshit2808/" target="_blank" rel="noreferrer"><Image src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/lakshit2808" target="_blank" rel="noreferrer"><Image src={navIcon2} alt="" /></a>
                <a href="https://youtube.com/codewithlakshit" target="_blank" rel="noreferrer"><Image src={navIcon3} alt="" /></a>
                <a href="https://www.instagram.com/optimusexpert/" target="_blank" rel="noreferrer"><Image src={navIcon4} alt="" /></a>
              </div>
              <Link href='/form'>
                <button className="vvd vvd-mobile"><span>Let’s Connect</span></button>
              </Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
  )
}
