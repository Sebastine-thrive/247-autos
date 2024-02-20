import { SearchTermType } from "@/app/types/types";
import React from "react";
import { searchByNameOrBrand } from "../../utils/utils";
import Searchbar from "./Searchbar";

const SearchFetch: React.FC<{ searchTerm: string | undefined }> = ({
  searchTerm,
}) => {
  return (
    <>
      <Searchbar />
    </>
  );
};

export default SearchFetch;
