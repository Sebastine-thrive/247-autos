"use client"
import React, { useState } from "react";

interface SelectProps {
  options: string[];
  onChange: (value: string) => void;
}

const SelectComponent: React.FC<SelectProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <div className="relative">
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M9.293 13.293a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L10 11.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectComponent;
