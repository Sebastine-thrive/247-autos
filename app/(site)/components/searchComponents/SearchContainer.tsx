"use client";
import React from "react";
import SearchWrapper from "./SearchWrapper";
import Searchbar from "./Searchbar";
import SearchFetch from "./FetchSearchResults";
import { useStateContext } from "@/app/context/Contexts";

const SearchContainer = () => {
  const { searchTerm, setSearchTerm } = useStateContext() ?? {};
console.log(searchTerm)
  

  return (
    <div>
      <SearchWrapper>
        <SearchFetch searchTerm = {searchTerm} />
        {/* <Searchbar  /> */}
      </SearchWrapper>
    </div>
  );
};

export default SearchContainer;
