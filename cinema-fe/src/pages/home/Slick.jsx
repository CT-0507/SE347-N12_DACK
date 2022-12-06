import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import poster from '../../img/poster_adam_4_1.jpg'
import './slick.css'
function Slick()
{
    let settings = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
   
 
    return ( 
        
            <Slider {...settings}>
                <div className="item">
                    <img className="poster" src={poster}></img>
                    <h3>Black Adam</h3>
                </div>
                <div className="item">
                    <img className="poster"src={poster}></img>
                    <h3>Black Adam</h3>
                </div>
                <div className="item">
                    <img className="poster"src={poster}></img>
                    <h3>Black Adam</h3>
                </div>
                <div className="item">
                    <img className="poster"src={poster}></img>
                    <h3>Black Adam</h3>
                </div>
                <div className="item">
                    <img className="poster"src={poster}></img>
                    <h3>Black Adam</h3>
                </div>
                <div className="item">
                    <img className="poster"src={poster}></img>
                    <h3>Black Adam</h3>
                </div>
            </Slider>     
     );
}

export default Slick;