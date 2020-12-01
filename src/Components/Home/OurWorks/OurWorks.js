import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import carousel1 from '../../../images/carousel-img/carousel-1.png';
import carousel2 from '../../../images/carousel-img/carousel-2.png';
import carousel3 from '../../../images/carousel-img/carousel-3.png';
import carousel4 from '../../../images/carousel-img/carousel-4.png';
import carousel5 from '../../../images/carousel-img/carousel-5.png';
import Slider from '../../../../node_modules/react-slick/lib/index';
 import './works.css'
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import {settings} from './CarouselSetting'
const OurWorks = () => {
   
    const carouselItem = [carousel1, carousel2, carousel3, carousel4,carousel5];
     
   
    return (
        <Container id="work" style={{ backgroundColor: " #111430", padding: "50px",marginTop:"50px" }}>

            <h3 style={{color:"white",textAlign:"center",padding:"15px 5px"}}> Here are Some Of Our Works </h3>
            <Slider {...settings}  >
                 
                <div style={{ width: 400 }}>
            <img src={carousel1} alt="" width="80%" height="320px"/>
          </div>
          <div style={{ width: 400 }}>
           <img src={carousel2} alt="" width="80%" height="320px"/>
          </div>
          <div style={{ width: 400  }}>
          <img src={carousel3} alt="" width="80%" height="320px"/>
          </div>
          <div style={{ width: 400  }}>
          <img src={carousel4} alt="" width="80%" height="320px"/>
          </div>
          <div style={{ width: 400 }}>
          <img src={carousel5} alt="" width="80%" height="320px"/>
          </div>
         
            </Slider>


        </Container>
    );

};

export default OurWorks