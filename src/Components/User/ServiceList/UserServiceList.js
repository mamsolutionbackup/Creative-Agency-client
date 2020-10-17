import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { loginContext } from '../../../App';
import LoadingGif from '../../SharedComponents/LodingGif/LoadingGif';

const UserServiceList = () => {
    const [loggedUser, setLoggedUser] = useContext(loginContext);
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/getUserOrder?email=${loggedUser.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setService(data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <section>
            <Container id="cardContainer">
                
                {
                    service.length===0 && <LoadingGif />
                }
                
                <Row>
                    {
                        
                        service.map(data =>
                            <Col xs={8} md={6} lg={5} style={{ marginTop: "15px" }}>
                                <Card id="cardStyle"  >
                                    <div style={{display:"flex",justifyContent:"space-between"}}>
                                        <Card.Img variant="top" src={`data:image/png;base64,${data.serviceImage}`} style={{ width: "25%", borderRadius: "50%" }} />
                                       <div style={{padding:"10px"}}>
                                       <Button variant="warning">{data.status}</Button>
                                       </div>
                                       
                                    </div>

                                    <Card.Body>
                                        <Card.Title>{data.serviceName}</Card.Title>
                                        <Card.Text>
                                            {data.serviceDescription}
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            </Col>
                        )
                    }

                </Row>

            </Container>
        </section>
    );
};

export default UserServiceList;