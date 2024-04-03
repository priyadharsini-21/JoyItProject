import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./SelectDropDown.css";
import { useDispatch } from "react-redux";
import { setCategoryType } from "../store/actions";
import { Box } from "@chakra-ui/react";
// -------------------------------------

const CategorySearch = ({ handleCategoryChange }) => {
  const [category, setCategory] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const dispatch = useDispatch();

  const fetchCategoryData = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then(function (response) {
        setCategory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    dispatch(setCategoryType(event.target.value));
  };

  return (
    <>
      <Box w={"60%"} h={"full"} p={30}>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">All</option>
          {category.map((data) => (
            <option value={data}>{data}</option>
          ))}
        </select>
      </Box>
    </>
  );
};

export default CategorySearch;
