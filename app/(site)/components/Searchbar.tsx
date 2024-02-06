import React from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar: React.FC = () => {
  return (
    <div className="header-searchbar flex items-center p-2 rounded-md cursor-pointer h-8 max-w-full lg:min-w-3/4">
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
