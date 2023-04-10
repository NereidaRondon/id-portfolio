import React, { useRef } from 'react';
import { Container, Typography } from "@mui/material";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/myLogo.svg';

export default function NavBar() {

  const about = useRef(null);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current,
      behavior: 'smooth',
    });
  };

  return (
    
      <Navbar collapseOnSelect bg="dark" expand="md" variant="dark" sticky='top'>
      <Container bg="dark" maxWidth='lg'>

          <Typography variant='h4' fontFamily={'Shadows Into Light Two'}>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} className='logo p-0 bounce' alt='NR logo' />
            </Navbar.Brand>
          </LinkContainer>
          <br/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className=''/>
            <Navbar.Collapse id="responsive-navbar-nav" className=''>

              <Nav className="m-auto justify-content-center">
                
                <LinkContainer to="/">
                  <Nav.Link className='ps-3 pe-3'>Home</Nav.Link>
                </LinkContainer>

                  
                  <Nav.Link className='ps-3 pe-3' onClick={() => scrollDown(about)} >About</Nav.Link>
               

                <LinkContainer to="/projects">
                  <Nav.Link className='ps-3 pe-3' >Projects</Nav.Link>
                </LinkContainer>  

                {/* <LinkContainer to="/skills">  
                  <Nav.Link className='ps-3 pe-3' >Technologies</Nav.Link>
                </LinkContainer> */}

                <LinkContainer to="/contact">
                  <Nav.Link className='ps-3 pe-3' >Contact</Nav.Link>
                </LinkContainer>

              </Nav>

            </Navbar.Collapse>
          </Typography>

        </Container>
      </Navbar>
    
  );
}
