import React from 'react';
import "../Styles/HoverContainer.css"
import {Box, Text, Image} from "@chakra-ui/react"
import BootCarousel from './BootCarousel';
import Carousel1000 from "./Carousel1000";
import HoverContainer from './HoverContainer';
import Carousel100 from './Carousal100';

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
        <Box className='display' style={{margin:"50px 0"}}>
          <Image src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/21/25819_BB_B_30Off-Pre-Orders_02-21.jpg" w={"90%"}/>
        </Box>
        <HoverContainer />
        <Box className='display' style={{margin:"50px 0"}}>
          <Image src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/11/01/24968_BB_C_BestBooks_1101b.jpg" w={"90%"}/>
        </Box>
        <Carousel100 />



        
    </div>
  )
}

export default Home