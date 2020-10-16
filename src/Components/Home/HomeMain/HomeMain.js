import React from 'react';

import Customer from '../Customer/Customer';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Service from '../Services/Service';

const HomeMain = () => {
    return (
        <div style={{backgroundColor:""}}>
            <Header/>
            <Customer/>
            <Service/>
            <OurWorks/>
            <Feedback/>
            <Footer/>
            <div style={{textAlign:"center",padding:"5px"}}>
                <small>&copy;Copyright Reserved</small>
            </div>
        </div>
    );
};

export default HomeMain;