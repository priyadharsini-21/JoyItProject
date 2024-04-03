import React from "react";
import ProductList from "../templates/ProductList";
import PaginationComponent from "../atoms/PaginationComponent";
import { useState } from "react";
import CategorySearch from "../templates/CategorySearch";
import { useSelector } from "react-redux";
import { Box, Center } from "@chakra-ui/react";
import { Parallax } from "react-parallax";
import Button from "../atoms/Button";

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = useSelector((state) => state.dataSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Parallax bgImage={null} strength={-100}>
      <div style={{ height: "100%" }}>
        <Center py={6} display={"flex"} flexDirection={"column"}>
          <CategorySearch></CategorySearch>
          <Button buttonLink="/addProduct" buttonName="Add Product"></Button>
          <Box
            w={"90%"}
            h={"full"}
            p={3}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <ProductList pageNumber={currentPage} />
          </Box>
          <PaginationComponent
            totalPages={Math.ceil(totalPage / 10)}
            onPageChange={handlePageChange}
          ></PaginationComponent>
          {/* <MyComponent /> */}
        </Center>
      </div>
    </Parallax>
  );
};

export default Homepage;
