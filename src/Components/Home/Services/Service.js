import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import mobile from '../../../images/icons/mobile.png';
import graphic from '../../../images/icons/graphic.png';
import web from '../../../images/icons/web.png';
import service4 from '../../../images/icons/service4.png';
import service5 from '../../../images/icons/service5.png';
import './service.css'
import { Link } from 'react-router-dom';
import LoadingGif from '../../SharedComponents/LodingGif/LoadingGif';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/getService")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <section>
            <Container style={{ margin: "100px", textAlign: "center" }}>
                <h1 className="h1Style">Provide Awesome Service</h1>
                {
                    service.length===0 && <LoadingGif />
                }
                <Row>
                    {
                        service.map(data =>
                           
                            <Col xs={8} md={6} lg={4} style={{ marginTop: "15px" }}>
                                 <Link to={
                                     {
                                         pathname:"/user",
                                         state:{data}
                                     }
                                 }>
                                <Card id="cardStyle"  >
                                    <Card.Img variant="top" src={`data:image/png;base64,${data.image.img}`} style={{ width: "25%", display: "block", margin: "auto", borderRadius: "50%" }} />
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>
                                            {data.description}
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                                </Link>
                            </Col>
                            
                        )
                    }

                </Row>

            </Container>
        </section>
    );
};

export default Service;