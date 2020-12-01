import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{marginTop:"50px"}} id="contact">
            <Container fluid style={{ backgroundColor: "#FBD062", padding: "30px", }} id="contact">
                <Row style={{ padding: "50px", paddingTop: "100px" }}>
                    <Col>
                        <h1 className="h1Style">Let us Professionaly handle Your Web Site</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam delectus, minima error eius et nulla? Tenetur eveniet tempora doloribus cupiditate?</p>
                    </Col>
                    <Col>
                        <Form style={{  margin: "auto" }} className="userForm">
                            <Form.Group controlId="exampleForm.ControlInput1">

                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlType">

                                <Form.Control type="text" placeholder="name/Company Name">

                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">

                                <Form.Control as="textarea" rows={4} />
                            </Form.Group>
                            <Button variant="" className="btnstyle" type="submit" style={{ margin: "auto", width: "150px", display: "block" }}>Submit</Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
};

export default Footer;