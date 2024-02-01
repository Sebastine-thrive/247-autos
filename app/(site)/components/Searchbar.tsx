import React from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar: React.FC = () => {
  return (
    <div className="header-searchbar flex items-center p-2 rounded-md cursor-pointer h-8 w-full lg:min-w-[30%] lg:w-1/3">
      <CiSearch />
      <input
        type="text"
        id="search-input"
        className="search-input"
        placeholder="Search"
      />
    </div>
  );
};

export default Searchbar;
