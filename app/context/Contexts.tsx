"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { ProductsArray } from "../types/types";

// const baseQuery = (filters) => `*[ ${filters} ]`
// const filters = `_type == "products" && (brand == ${nameKeyword} || name == ${nameKeyword}) `
// const query = `baseQuery(filters)`

interface StateContextValue {
  selectedProductDisplayOption: string;
  setSelectedProductDisplayOption: React.Dispatch<React.SetStateAction<string>>;
  classOfProductDisplayed: string;
  setClassOfProductDisplayed: React.Dispatch<React.SetStateAction<string>>;
  showProductsOnSale: () => void;
  showSoldProducts: () => void;
  displayBrandNew: () => void;
  displayUsed: () => void;
  displaySaleSelectionBox: boolean;
  setDisplaySaleSelectionBox: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm: string;
  searchResults: ProductsArray;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchResults: React.Dispatch<React.SetStateAction<ProductsArray>>;
}
const Context = createContext<StateContextValue | null>(null);

interface StateContextProps {
  children: ReactNode;
}

// interface SearchbarProps {
//   onSearch: (searchTerm: string) => void;
// }

// const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
// const [searchTerm, setSearchTerm] = useState("");

export const StateContext: React.FC<StateContextProps> = ({ children }) => {
  const [selectedProductDisplayOption, setSelectedProductDisplayOption] =
    useState<string>("on sale");
  const [classOfProductDisplayed, setClassOfProductDisplayed] =
    useState<string>("all");
  const [displaySaleSelectionBox, setDisplaySaleSelectionBox] =
    useState<boolean>(false);

  // For search component
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ProductsArray>([]);

  const showProductsOnSale: () => void = () => {
    setSelectedProductDisplayOption("on sale");
  };

  const showSoldProducts: () => void = () => {
    setSelectedProductDisplayOption("recently sold");
  };

  const displayBrandNew: () => void = () => {
    setClassOfProductDisplayed("new");
  };

  const displayUsed: () => void = () => {
    setClassOfProductDisplayed("used");
  };

  const contextValue: StateContextValue = {
    selectedProductDisplayOption,
    setSelectedProductDisplayOption,
    classOfProductDisplayed,
    setClassOfProductDisplayed,
    showProductsOnSale,
    showSoldProducts,
    displayBrandNew,
    displayUsed,
    displaySaleSelectionBox,
    setDisplaySaleSelectionBox,
    searchTerm,
    searchResults,
    setSearchTerm,
    setSearchResults,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export const useStateContext = () => useContext(Context);
