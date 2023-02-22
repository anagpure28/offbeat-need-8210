import React from 'react';
import "../Styles/Home.css"
import {Box, Text} from "@chakra-ui/react"
import BootCarousel from './BootCarousel';
import Carousel1000 from "./Carousel1000";

const Home = () => {
  return (
    <div>
        <Box className='display' style={{height:"65px",backgroundColor:"#e6cacf",marginBottom:"5px"}}>
          <Text className='p'>Up to 30% Off The Biggest Pre-Orders Coming Soon to a Shelf Near You</Text>
        </Box>
        <Box className='display' style={{height:"45px",backgroundColor:"black",marginBottom:"5px"}}>
          <Text style={{color:"white",fontSize:"18px"}}>Free Shipping on Orders of $40 or More</Text>
        </Box>
        <BootCarousel />
        <Text className='p1'>FIND YOUR PLACE AT B&N'S ONLINE BOOKSTORE</Text>
        <Text>Over 5 million books ready to ship, 3.6 million eBooks and 300,000 audiobooks to download right now! Curbside pickup available in most stores!</Text>
        <Text className='p2'>Curbside pickup available in most stores!</Text>
        <hr style={{width:"90%",margin:"auto"}}/>
        <Carousel1000 />




    </div>
  )
}

export default Home