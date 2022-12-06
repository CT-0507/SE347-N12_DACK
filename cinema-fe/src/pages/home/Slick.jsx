import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import poster from '../../img/poster_adam_4_1.jpg'

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
                <div>
                    <img src={poster}></img>
                    1
                </div>
                <div>
                <img src={poster}></img>
                2
                </div>
                <div>
                <img src={poster}></img>
                3
                </div>
                <div>
                <img src={poster}></img>
                4
                </div>
                <div>
                <img src={poster}></img>
                5
                </div>
                <div>
                <img src={poster}></img>
                6
                </div>
            </Slider>     
     );
}

export default Slick;