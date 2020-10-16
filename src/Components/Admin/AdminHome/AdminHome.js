import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { loginContext } from '../../../App';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import ServiceList from '../ServiceList/ServiceList';

const AdminHome = () => {
    const [Them, setThem] = useState({ them: "serviceList", title: "Service List" });
    const [loggedUser,setLoggedUser] = useContext(loginContext);
    return (
        <Row style={{ backgroundColor: "#F4F7FC",width:"100%" }} >
            <Col xs={4} sm={4} md={3} lg={3} xl={2}  style={{padding:"0px"}}>
                <Sidebar setThem={setThem} />
            </Col>
            <Col xs={8} sm={8} md={9} lg={9} xl={10} style={{padding:"0px"}}>
                <div className="title" style={{backgroundColor:"#FFFF",padding:"0px 15px",display:"flex",justifyContent:"space-between"}}>
                    <h4 className="h1Style">{Them.title}</h4>
                    <h4 className="h1Style" >{loggedUser.name}</h4>
                </div  >
                <div style={{backgroundColor:"#FFFF",padding:"25px",margin:"50px"}}>

                {
                    Them.them == "serviceList" && <ServiceList />
                }
                {
                    Them.them == "addService" && <AddService />
                }
                {
                    Them.them == "addAdmin" && <AddAdmin />
                }
                </div>
               
            </Col>
        </Row>
    );
};

export default AdminHome;