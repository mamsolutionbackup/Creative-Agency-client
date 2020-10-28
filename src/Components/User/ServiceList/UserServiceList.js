import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { loginContext } from '../../../App';
import LoadingGif from '../../SharedComponents/LodingGif/LoadingGif';

const UserServiceList = () => {
    const [loggedUser, setLoggedUser] = useContext(loginContext);
    const [service, setService] = useState([]);
    const [empty, setEmpty] = useState(false);
    useEffect(() => {
        fetch(`https://shielded-wildwood-60115.herokuapp.com/getUserOrder?email=${loggedUser.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length == 0) {
                    setEmpty(true)
                }
                else {
                    setEmpty(false)
                    setService(data)
                }

            })
            .catch(error => { })
    }, [])
    return (
        <section>
            <Container id="cardContainer">

                {
                    empty ? (<h4 className="h1Style">No service you have take yet</h4>) : (

                        service.length === 0 && <LoadingGif />

                    )
                }

                <Row>
                    {

                        service.map(data =>
                            <Col xs={8} md={6} lg={5} style={{ marginTop: "15px" }} key={data._id} >
                                <Card id="cardStyle"  >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Card.Img variant="top" src={`data:image/png;base64,${data.serviceImage}`} style={{ width: "25%", borderRadius: "50%" }} />
                                        <div style={{ padding: "10px" }}>
                                            {
                                                data.status == "Done" && <Button variant="success" >{data.status}</Button>
                                            }
                                            {
                                                data.status == "pending" && <Button variant="danger" >{data.status}</Button>
                                            }
                                            {
                                                data.status == "On Going" && <Button variant="warning" >{data.status}</Button>
                                            }


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