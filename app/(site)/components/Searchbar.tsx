import React from "react";

const Searchbar: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex items-center rounded-lg border-2 border-double border-gray-300 hover:border-gray-400 focus:border-white transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mx-2 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <title id="search-icon">Search Icon</title>
          <desc>A search icon</desc>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM18.707 17.293l-4.5-4.5a1 1 0 00-.707-.293h-.364a6.5 6.5 0 11.005-1.001l.006.001v.5a1 1 0 102 0v-.22l4.5 4.5a1 1 0 001.414-1.414z"
          />
        </svg>
        <input
          type="text"
          id="search-input"
          className="py-2 px-4 rounded-lg bg-transparent text-gray-900 focus:outline-none w-full"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Searchbar;
