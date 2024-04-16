import React, { useState } from 'react'
import ArrivalProduct from '../../CommonComponent/ArrivalProduct/ArrivalProduct'
import Button from "../../CommonComponent/Button/Button"
import Slider from "react-slick";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


//SampleNextArrow Function==================
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={
            { ...style,
             display: "block",
             background: "red",
             width: "40px",
             height: "40px",
             backgroundColor: "#979797",
             position: "absolute",
             left: "0px",
             top: "50%",
             transform: "translateY(-130%)",
             cursor: "pointer",
             borderRadius: "50%",
            }
        }
        onClick={onClick}
        >
            <div className="flex h-full text-center items-center justify-center text-white">
            <FaArrowLeftLong />
            </div>
      </div>
    );
  }

  //SamplePrevArrow Function =================

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={
            { ...style,
                display: "block",
                background: "red",
                width: "40px",
                height: "40px",
                backgroundColor: "#979797",
                position: "absolute",
                right: "0px",
                top: "50%",
                transform: "translateY(-130%)",
                cursor: "pointer",
                borderRadius: "50%",
                zIndex: "1"
               }
        }
        onClick={onClick}
        >
            <div className="flex h-full text-center items-center justify-center text-white">
            <FaArrowRightLong />
            </div>

      </div>
    );
  }

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };


const Arrival = ({HeadingTilte, Pdata}) => {

    const [Allproduct, setAllproduct] = useState(Pdata);

    
  return (
    <>
      <div>
        <div className="container">
          <div className="py-12">
            <h2 className="font-DMsans font-bold text-4xl px-3 sm:px-0 md:px-3">{HeadingTilte ? HeadingTilte : "No Title"}</h2>
          </div>
         <Slider {...settings}>
          {/* <Flex className={"justify-between gap-x-6"}> */}
            {Allproduct?.map((item) => (
              <div key={item.id}>
                <ArrivalProduct
                 Image = {item.img}
                  ColorVarient={item.color === true ? true : false}
                  baze={
                    item.baze == true ? (
                      <Button
                        className={"px-6 py-1 bg-main_font_color text-white font-DMsans font-bold" }
                        Title={item.bazeitem === true ? "New" : item.discount}
                      />
                    ) : null
                  }
                />
              </div>
            ))}
          {/* </Flex> */}
          </Slider>  
        </div>
      </div>
    </>
  );
}

export default Arrival
