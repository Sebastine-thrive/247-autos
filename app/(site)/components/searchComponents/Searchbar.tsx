"use client";
import { useStateContext } from "@/app/context/Contexts";
import React, { ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar: React.FC = () => {
  const { searchTerm, setSearchTerm, searchResults, setSearchResults } =
    useStateContext() ?? {};

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.trim() === "") return;
    else if (setSearchTerm) {
      setSearchTerm(value);
    }
  };

  // console.log(searchTerm);

  return (
    <div className="header-searchbar flex items-center p-2 rounded-md cursor-pointer h-8 max-w-full lg:min-w-3/4">
      <CiSearch />
      <input
        type="text"
        id="search-input"
        className="search-input"
        placeholder="Search - Sorry currently inactive"
        // onChange={handleInputChange}
      />
    </div>
  );
};

export default Searchbar;
