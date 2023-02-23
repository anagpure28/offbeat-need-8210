import React from "react";
import "../Styles/HoverContainer.css"
import { Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HoverContainer = () => {
  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" className="container" gap={2}>
      <GridItem className="box">
        <Image className="curve" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B900%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/21/25819_PCL_5_Historical_02-21.jpg%5D&scale=options%5Blimit%5D,size%5B900x10000%5D&sink=format%5Bwebp%5D" alt="" />
        <Text fontSize={"sm"} mt={"10px"}>An EBOOK Historical Romance Roundup</Text>
        <Link style={{textDecoration: "underline", fontSize:"12px"}}>Start Reading</Link>
      </GridItem>
      <GridItem className="box">
        <Image className="curve" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B900%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/17/25643_PCL_2_Glowlight4e_01-17.jpg%5D&scale=options%5Blimit%5D,size%5B900x10000%5D&sink=format%5Bwebp%5D" alt="" />
        <Text fontSize={"sm"} mt={"10px"}>$20 Off the NOOK® GlowLight 4e</Text>
        <Text>Now Only $99.9</Text>
        <Link style={{textDecoration: "underline", fontSize:"12px"}}>Shop Now</Link>
      </GridItem>
      <GridItem className="box">
        <Image className="curve" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B900%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/21/25819_PCL_3_Adventure_Zone_02-21.jpg%5D&scale=options%5Blimit%5D,size%5B900x10000%5D&sink=format%5Bwebp%5D" alt="" />
        <Text fontSize={"sm"} mt={"10px"}>Grab Your Dice and Join the McElroys for Their Next Thrilling Adventure</Text>
        <Link style={{textDecoration: "underline", fontSize:"12px"}}>Explore Now</Link>
      </GridItem>
      <GridItem className="box">
        <Image className="curve" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B900%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/21/25819_PCL_2_WhaleDone_02-21.jpg%5D&scale=options%5Blimit%5D,size%5B900x10000%5D&sink=format%5Bwebp%5D" alt="" />
        <Text fontSize={"sm"} mt={"10px"}>Stuart Gibb Is at It Again With the Next FunJungle Adventure: </Text>
        <Link style={{textDecoration: "underline", fontSize:"12px"}}>Explore Now</Link>
      </GridItem>
      <GridItem className="box">
        <Image className="curve" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B900%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/03/25556_PCL_6_Best_Audiobooks_01-03.jpg%5D&scale=options%5Blimit%5D,size%5B900x10000%5D&sink=format%5Bwebp%5D" alt="" />
        <Text fontSize={"sm"} mt={"10px"}>Introducing Agents of S.U.I.T. and Cilantro the Chameleon</Text>
        <Link style={{textDecoration: "underline", fontSize:"12px"}}>Explore Now</Link>
      </GridItem>
      </Grid>
    </div>
  );
};

export default HoverContainer;
