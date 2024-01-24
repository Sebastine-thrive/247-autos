"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface StateContextValue {
  selectedProductDisplayOption: string;
  setSelectedProductDisplayOption: React.Dispatch<React.SetStateAction<string>>;
  classOfProductDisplayed: string;
  setClassOfProductDisplayed: React.Dispatch<React.SetStateAction<string>>;
  showProductsOnSale: () => void;
  showSoldProducts: () => void;
  displayBrandNew: () => void;
  displayUsed: () => void;
  displaySaleSelectionBox:boolean;
  setDisplaySaleSelectionBox: React.Dispatch<React.SetStateAction<boolean>>;

}
const Context = createContext<StateContextValue | null>(null);

interface StateContextProps {
  children: ReactNode;
}

export const StateContext: React.FC<StateContextProps> = ({ children }) => {
  const [selectedProductDisplayOption, setSelectedProductDisplayOption] =
    useState<string>("on sale");
  const [classOfProductDisplayed, setClassOfProductDisplayed] =
    useState<string>("all");
  const [displaySaleSelectionBox, setDisplaySaleSelectionBox] =
    useState<boolean>(false);

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
    setDisplaySaleSelectionBox
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export const useStateContext = () => useContext(Context);
