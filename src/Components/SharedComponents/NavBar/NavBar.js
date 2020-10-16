import React from 'react';
import {Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
const NavBar = () => {
    return (
        <Navbar bg="" expand="lg">
        <Navbar.Brand href="#home">
            <img src={logo} alt="" width="150px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" id="navlink" variant="pills dark"  defaultActiveKey="home">
            <Nav.Link href="#home" eventKey='home'>Home</Nav.Link>
            <Nav.Link href="#link" eventKey='portfolio'>Ore Portfolio</Nav.Link>
            <Nav.Link href="#link" eventKey='team'>Our Team</Nav.Link>
            <Nav.Link href="#link" eventKey='contact'>Contact Us</Nav.Link>
             

            
          </Nav>
          <Link to="/login">
           <Button className="btnstyle" style={{marginLeft:"20px"}}>Sign In</Button>
           </Link>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;