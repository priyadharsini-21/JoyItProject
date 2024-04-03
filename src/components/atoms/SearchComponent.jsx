import React, { useState } from "react";
import "./SearchComponent.css"; // Import CSS file for styling
import { useSelector, useDispatch } from "react-redux";
import { setSearchedWord } from "../store/actions";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchValue = useSelector((state) => state.searchedWord);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log(searchTerm);
    const word = searchTerm;
    dispatch(setSearchedWord(word));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter search term"
        value={searchValue}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
