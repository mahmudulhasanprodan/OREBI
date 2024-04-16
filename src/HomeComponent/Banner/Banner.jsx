import React, { useState } from 'react'
import BannerImage from "../../assets/Banner.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const Banner = () => {

  const [currentSlide, setcurrentSlide] = useState(1);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

    beforeChange: (currentindex) => {
      setcurrentSlide(currentindex +1);
    },
    
    customPaging: i => (
      <div
        style={i+1 === currentSlide ? 
          {
            width: "30px",
            color: "#000",
            fontFamily: "DMsans",
            padding: "20px 0px",
            borderRight: "3px solid #262626",
            cursor: "pointer"
          }
          
          :{
            width: "30px",
            color: "#fff",
            padding: "20px 0px",
            cursor: "pointer",
          }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  };

  

  return (
    <>
      <Slider {...settings}>
        <div>
            <picture>
                <img src={BannerImage} alt={BannerImage} />
            </picture>
        </div>
        <div>
            <picture>
                <img src={BannerImage} alt={BannerImage} />
            </picture>
        </div>
        <div>
            <picture>
                <img src={BannerImage} alt={BannerImage} />
            </picture>
        </div>
        <div>
            <picture>
                <img src={BannerImage} alt={BannerImage} />
            </picture>
        </div>
      </Slider>
    </>
  );
}

export default Banner
