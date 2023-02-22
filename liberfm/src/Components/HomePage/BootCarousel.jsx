import React from 'react';
import {Carousel} from 'react-bootstrap';

const BootCarousel = () => {
  return (
    <div>
        <Carousel slide={false}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
        //   style={{height:"400px", width:"100%"}}
          src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/14/25817_Quote_A1_Questions_02-14.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption style={{right:"-230px",bottom:"130px"}}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
        //   style={{height:"400px", width:"100%"}}
          src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/21/25819_Quote_A4_Shadow_of_Perseus_02-21.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption style={{right:"-230px",bottom:"130px"}}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
        //   style={{height:"400px", width:"100%"}}
          src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/14/25817_Quote_A3_MurderYourEmployer_02-14.jpg"
          alt="Third slide"
        />

        {/* <Carousel.Caption style={{right:"130px",bottom:"130px"}}>
          <h3>Third slide label</h3>
          <p>“A college with a degree in homicide? The twists and tricks and endless surprises make me want to sign up for another semester!”</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
        //   style={{height:"400px", width:"100%"}}
          src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/24/25647_Quote_A4_Scorched_Grace_01-24.jpg"
          alt="Fourth slide"
        />

        {/* <Carousel.Caption style={{right:"130px",bottom:"130px"}}>
          <h3>Third slide label</h3>
          <p>“A college with a degree in homicide? The twists and tricks and endless surprises make me want to sign up for another semester!”</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default BootCarousel