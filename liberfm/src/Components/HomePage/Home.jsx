import React from 'react';
import "../Styles/Home.css"
import {Box, Text} from "@chakra-ui/react"
import BootCarousel from './BootCarousel';

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
    </div>
  )
}

export default Home