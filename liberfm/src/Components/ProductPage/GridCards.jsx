import React from "react";
import {Grid, GridItem} from "@chakra-ui/react";
import Card from "./Card"

export default function GridApp(){
  return (
    <div className="App">
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        <GridItem><Card /></GridItem>
        <GridItem><Card /></GridItem>
        <GridItem><Card /></GridItem>
        <GridItem><Card /></GridItem>
        <GridItem><Card /></GridItem>
        <GridItem><Card /></GridItem>
        <GridItem><Card /></GridItem>
        <GridItem><Card /></GridItem>
      </Grid>
    </div>
  );
}