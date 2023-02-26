import { Box, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { books_all } from "../Data/Books";
import AllProductsItems from "./AllProductsItems";

export const AllProducts = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const data = [...books_all];
  const pageCount = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageData = data.slice(startIndex, endIndex);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <div style={{margin:"20px 0",}}>
      <Grid style={{width:"60%", margin:"auto"}} templateColumns='repeat(3, 1fr)' gap={6}>
      {/* <GridItem> */}
        {pageData.map((item) => (
          <AllProductsItems
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            author={item.author}
            price={item.price}
          />
        ))}
        {/* </GridItem> */}
      </Grid>
      <div style={{marginTop:"20px"}}>
        <div>
          <Button
            disabled={currentPage === 1}
            onClick={handlePreviousClick}
          >
            PREVIOUS
          </Button>
          <Box style={{ display:"inline-block",width: "100px"}}>
          <span>Page {currentPage} of {pageCount}</span>
          </Box>
          <Button
          onClick={handleNextClick}
          >
            NEXT
          </Button>
        </div>
      </div>
      <br />
    </div>
  );
}

