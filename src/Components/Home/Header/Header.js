import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import './header.css';
import Frame from '../../../images/logos/Frame.png'
const Header = () => {
    return (
        <header>
            <Container >
                <NavBar />
                <Row style={{marginTop:"35px",padding:"15px"}}>
                    <Col sm={6} md={5}>
                        <h1 className="h1Style">
                            Let’s Grow Your <br/>Brand  To The <br/> Next Level
                    </h1>
                    <p style={{padding:"10px 0px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatem, velit saepe, repellat autem natus?</p>
                    <Button className="btnstyle" style={{ width:"170px",padding:"8px"}}>Hire Us</Button>
                    </Col>

                    <Col sm={6} md={7}>
                        <img src={Frame} alt="" width="100%" />
                    </Col>
                </Row>
            </Container>
        </header>


    );
};

export default Header;