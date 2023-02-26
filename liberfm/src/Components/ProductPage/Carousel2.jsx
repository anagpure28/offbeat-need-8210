import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from "./Star";
import { Paperback } from "../Data/Books";

const SecondCarousel = () => {
  const [BestSelling, setBestSelling] = useState([...Paperback]);

  console.log("data", BestSelling);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundColor: "black", }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundColor: "black" }}
        onClick={onClick}
      />
    );
  }

    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
    <div style={{ width: "95%", margin: "auto"}}>
      <Slider {...settings}>
        {BestSelling?.map((item, index) => (
          <div>
            <div key={item.id} style={{margin:"auto", marginTop:"15%", width:"160px"}}>
            <img src={item.image} alt=""/>
            <a href="#"
              style={{ 
                color: "black", 
                fontSize: "12px", 
                textDecoration:"underline", 
                cursor:"pointer" 
                }}><span>{item.name}</span></a>
            <p style={{color: "green", fontSize: "12px", marginBottom:"-5px"}}>{item.Author}</p>
            <Star />
            </div>
          </div>
          ))}
      </Slider>
    </div>
    </div>
  );
};

export default SecondCarousel;