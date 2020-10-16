import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../../images/logos/logo.png'
import {IoMdPersonAdd ,IoMdAddCircle} from 'react-icons/io'
import {GrServices} from 'react-icons/gr'
import './sidebar.css'
const Sidebar = (props) => {
    const handleOption=(them,title)=>{
      
        props.setThem({them,title})
      }
    return (
        <div style={{backgroundColor:"#FFFF",height:"100vh",padding:"25px"}}>
            <img src={logo} alt="" width="80%"/>
            <div className="sidelink">
            <Button variant="" className="btnStyle" onClick={()=>handleOption('serviceList','Service List')}>
                <GrServices/> <span className="btnText">Service List</span>
            </Button>
            
            <Button variant="" className="btnStyle" onClick={()=>handleOption('addService', 'Add Service')}>
                <IoMdAddCircle/> <span className="btnText">Add Service</span>
            </Button>
            
            <Button variant="" className="btnStyle" onClick={()=>handleOption('addAdmin','Add Admin')}>
                <IoMdPersonAdd/> <span className="btnText">Add Admin</span>
            </Button>
            </div>
        </div>
    );
};  

export default Sidebar;