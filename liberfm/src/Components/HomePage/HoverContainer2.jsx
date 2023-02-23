import React from "react";
import "../Styles/HoverContainer.css"
import { Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HoverContainer2 = () => {
  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" className="container" gap={2}>
      <GridItem className="box">
        <Image className="curve" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/01/25813_PCS_2_Game-of-th-Month_02-01.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" alt="" />
        <Text fontSize={"sm"} mt={"10px"}>OUR GAME OF THE MONTH: YOU THICK YOU KNOW ME</Text>
        <Link style={{textDecoration: "underline", fontSize:"12px"}}>Shop Now</Link>
      </GridItem>
      <GridItem className="box">
        <Image className="curve" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/14/25817_PCS_5_Easter_02-14.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" alt="" />
        <Text fontSize={"sm"} mt={"10px"}>HOP TO IT THIS SEASON<br/>Now Only $99.9</Text>
        <Link style={{textDecoration: "underline", fontSize:"12px"}}>Shop Easter Gifts & More</Link>
      </GridItem>
      <GridItem className="box">
        <Image className="curve" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/15/25818_PCS_6_New_Kids_PWP_02-15.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" alt="" />
        <Text fontSize={"sm"} mt={"10px"}>ONLY $9.99 WITH PURCHASE OF ANY KIDS BOOK!</Text>
        <Link style={{textDecoration: "underline", fontSize:"12px"}}>Shop Now</Link>
      </GridItem>
      <GridItem className="box">
        <Image className="curve" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/15/25818_PCS_1_Most_Anticipated_Kids_02-15.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" alt="" />
        <Text fontSize={"sm"} mt={"10px"}>OUR MOUTH ANTICIPATED KIDS'S BOOKS THIS MARCH</Text>
        <Link style={{textDecoration: "underline", fontSize:"12px"}}>Read More</Link>
      </GridItem>
      <GridItem className="box">
        <Image className="curve" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/31/255810_PCS_6_Black-History-Month_01-31.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" alt="" />
        <Text fontSize={"sm"} mt={"10px"}>BLACK VOICES & THEIR STORIES</Text>
        <Link style={{textDecoration: "underline", fontSize:"12px"}}>Explore Now</Link>
      </GridItem>
      </Grid>
    </div>
  );
};

export default HoverContainer2;
