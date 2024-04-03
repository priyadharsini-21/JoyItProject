import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Cards, LoadingPage } from "../atoms";
import ErrorPage from "./ErrorPage";
import { useSelector, useDispatch } from "react-redux";
import { setDataSize } from "../store/actions";
import { SimpleGrid } from "@chakra-ui/react";
import CardComponent from "../atoms/CardComponent";
import { Box, Center } from "@chakra-ui/react";
// --------------------------------------------------------

const ProductList = ({ selectedCategory, pageNumber, handlePagination }) => {
  const [products, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const searchValue = useSelector((state) => state.searchedWord);
  const categorySelected = useSelector((state) => state.selectedCategory);
  const dispatch = useDispatch();

  const fetchProductData = (pageNumber) => {
    const skipValue = pageNumber * 10 - 10;
    console.log("Skip", skipValue);
    setIsLoading(true);
    setIsError(false);
    axios
      .get(`https://dummyjson.com/products?limit=10&skip=${skipValue}`)
      .then(function (response) {
        setProductData(response.data.products);
        setIsLoading(false);
        dispatch(setDataSize(response.data.total));
      })
      .catch(function (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      })
      .finally(function () {});
  };

  const fetchProductBasedOnCategory = (categorySelected) => {
    console.log("selectedOptionFromRedux", categorySelected);

    setIsLoading(true);
    setIsError(false);
    axios
      .get(`https://dummyjson.com/products/category/${categorySelected}`)
      .then(function (response) {
        setProductData(response.data.products);
        setIsLoading(false);
        dispatch(setDataSize(response.data.total));
      })
      .catch(function (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      })
      .finally(function () {});
  };

  const fetchProductBasedOnSearch = (searchValue) => {
    axios
      .get(`https://dummyjson.com/products/search?q=${searchValue}`)
      .then(function (response) {
        console.log(response.data.products);
        setProductData(response.data.products);
        setIsLoading(false);
        dispatch(setDataSize(response.data.total));
      })
      .catch(function (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      })
      .finally(function () {});
  };

  useEffect(() => {
    if (categorySelected === "" || null) {
      fetchProductData(pageNumber);
    } else {
      fetchProductBasedOnCategory(categorySelected);
    }
  }, [categorySelected]);

  useEffect(() => {
    console.log(pageNumber);
    fetchProductData(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    fetchProductBasedOnSearch(searchValue);
  }, [searchValue]);

  useEffect(() => {
    fetchProductData(pageNumber);
  }, []);

  return (
    <Box>
      {!isLoading ? (
        <>
          {!isError ? (
            <SimpleGrid
              minChildWidth="350px"
              spacing="40px"
              p={6}
              minHeight={"52vh"}
            >
              {products.map((obj, index) => (
                <CardComponent cardObj={obj} />
              ))}
            </SimpleGrid>
          ) : (
            <Center>
              <ErrorPage />
            </Center>
          )}
        </>
      ) : (
        <Center>
          <LoadingPage />
        </Center>
      )}
    </Box>
  );
};

export default ProductList;
