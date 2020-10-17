import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { loginContext } from '../../../App';
import UserSidebar from '../../SharedComponents/UserSideBar/UserSidebar';
import Order from '../Order/Order';
import Review from '../Review/Review';
import UserServiceList from '../ServiceList/UserServiceList';

const UserHome = () => {
    const [loggedUser,setLoggedUser] = useContext(loginContext);
    const location = useLocation();
    const serviceData = location.state || "";
   
    const [Them, setThem] = useState({ them: "orders", title: "Orders" });
    return (
        <Row style={{ backgroundColor: "#F4F7FC",width:"100%" }} >
            <Col xs={4} sm={4} md={3} lg={3} xl={2}  style={{padding:"0px"}}>
                <UserSidebar setThem={setThem} />
            </Col>
            <Col xs={8} sm={8} md={9} lg={9} xl={10} style={{padding:"0px"}}>
            <div className="title" style={{backgroundColor:"#FFFF",padding:"0px 15px",display:"flex",justifyContent:"space-between"}}>
                    <h4 className="h1Style">{Them.title}</h4>
                    <h4 className="h1Style" >{loggedUser.name}</h4>
                </div  >
                <div id="TabelContainer">

                {
                    Them.them == "orders" && <Order Data={serviceData.data || ""} />
                }
                {
                    Them.them == "service-list" && <UserServiceList />
                }
                {
                    Them.them == "review" && <Review />
                }
                </div>
               
            </Col>
        </Row>
    );
};

export default UserHome;