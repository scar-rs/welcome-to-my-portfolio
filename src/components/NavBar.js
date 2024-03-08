import { useState,useEffect } from 'react';
import {Navbar,Container,Nav} from "react-bootstrap";
import logoo from '../assets/img/logoo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3 .svg';
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return() => window.removeEventListener("scroll",onScroll);
    }, [])
    const onUpdateActiveLink =(value) => {
      setActiveLink(value);
    }
    
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""} >
        <Container>
        <Navbar.Brand href="/">
            <img src={logoo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"style={{ marginRight: '10px' }}>
              <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar link': 'navbar-link'} onClick= {()=> onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills"  className={activeLink === "skills" ? 'active navbar link': 'navbar-link'} onClick= {()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project"  className={activeLink === "projects" ? 'active navbar link': 'navbar-link'}  onClick= {()=> onUpdateActiveLink('project')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/sakshi-jadhav--/'><img src={navIcon1} alt = "Social Icon 1" /> </a>
                </div>  
                <div className='social-icon'>  
                    <a href='https://github.com/scar-rs'><img src={navIcon2} alt = "Social Icon 2" /> </a>
                </div>    
                <div className='social-icon'>
                    <a href='https://www.instagram.com/saksshhieee/'><img src={navIcon3} alt = "Social Icon 3" /> </a>
                </div>
               
                
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}