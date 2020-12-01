import React from 'react';
import { useContext } from 'react';
import {Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loginContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
const NavBar = () => {
  const [loggedUser,setLoggedUser] = useContext(loginContext);
    return (
        <Navbar bg="" expand="lg">
        <Navbar.Brand href="#home">
            <img src={logo} alt="" width="150px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" id="navlink" variant="pills dark"  defaultActiveKey="home">
            <Nav.Link href="#home" eventKey='home'>Home</Nav.Link>
            <Nav.Link href="#service" eventKey='service'>Our Service</Nav.Link>
            <Nav.Link href="#work" eventKey='work'>Our Work</Nav.Link>
            <Nav.Link href="#contact" eventKey='contact'>Contact Us</Nav.Link>
             

            
          </Nav>
          {
            loggedUser.email ? (
               
              <Button className="btnstyle" style={{marginLeft:"20px"}} onClick={()=>setLoggedUser({name:"",email:"",photo:""})}>Logout</Button>
               
            ) :(
              <Link to="/login">
              <Button className="btnstyle" style={{marginLeft:"20px"}}>Sign In</Button>
              </Link>
            )
          }
         
           <Link to="/admin">
           <Button className="btnstyle" style={{marginLeft:"20px"}}>Admin Panel</Button>
           </Link>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;