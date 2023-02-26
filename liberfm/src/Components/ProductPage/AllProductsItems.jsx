import React, { useState } from "react";
import {Card, CardBody, Image, Stack, Text, Heading, Grid, GridItem, Button} from "@chakra-ui/react";

function AllProductsItems({ id, image, name, author, price }) {

    // const [data, setData] = useState([])

    const handleClick=()=>{
        alert("Product has been added to the Cart")
    }

  return (
    <>   
    <Card maxW={250} style={{backgroundColor:"rgb(250, 250, 250)"}}>
      <CardBody >
        <Image margin="auto"
          src={image}
          borderRadius="sm"
          maxW={100}
        />
        <Stack mt="6">
          <Heading size="sm">{name}</Heading>
          <Text>{author}</Text>
          <Text color="blue.600" fontSize="sm">Price: ${price}</Text>
          <Button onClick={handleClick} bg={"blue.200"} size={"sm"}>Add to Cart</Button>
        </Stack>
      </CardBody>
    </Card>
    </>
  );
}

export default AllProductsItems;
