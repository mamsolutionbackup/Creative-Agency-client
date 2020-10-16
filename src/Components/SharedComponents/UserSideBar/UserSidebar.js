import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../../images/logos/logo.png'
import {IoMdPersonAdd ,IoMdAddCircle} from 'react-icons/io'
import {GrServices} from 'react-icons/gr'
import '../Sidebar/sidebar.css'
const UserSidebar = (props) => {
    const handleOption=(them,title)=>{
      
        props.setThem({them,title})
      }
    return (
        <div style={{backgroundColor:"#FFFF",height:"100vh",padding:"25px"}}>
            <img src={logo} alt="" width="80%"/>
            <div className="sidelink">
            <Button variant="" className="btnStyle" onClick={()=>handleOption('orders','Orders')}>
                <GrServices/> <span className="btnText">Orders</span>
            </Button>
            
            <Button variant="" className="btnStyle" onClick={()=>handleOption('service-list', 'Service list')}>
                <IoMdAddCircle/> <span className="btnText">Service List</span>
            </Button>
            
            <Button variant="" className="btnStyle" onClick={()=>handleOption('review','Give your Feedback')}>
                <IoMdPersonAdd/> <span className="btnText">Review</span>
            </Button>
            </div>
        </div>
    );
};  

export default UserSidebar;