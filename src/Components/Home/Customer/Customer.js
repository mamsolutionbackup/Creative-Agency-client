import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import { Col, Container, Row } from 'react-bootstrap';
const Customer = () => {
    const company=[slack,google,uber,netflix,airbnb]
    return (
        <section>
            <Container style={{margin :"50px",fontSize:"16px",padding:"30px"}}>
                <Row className="d-flex justify-content-center">
                    
                        {
                            company.map(logo=>
                                <Col xs={4}  md={3} lg={2} style={{marginTop:"15px"}} >
                                    <img src={logo} alt="" width="70%" />
                                </Col>
                                )
                        }
                    
                </Row>
            </Container>
        </section>
            
        
    );
};

export default Customer;