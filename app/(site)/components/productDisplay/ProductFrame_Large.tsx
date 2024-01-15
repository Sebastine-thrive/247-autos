import React from "react";
import SelectComponent from "../SelectComponent";

const options = ["Option 1", "Option 2", "Option 3"];


const ProductFrame_Large: React.FC = () => {
  const handleChange = (value: string) => {
    
  }

  return (
    <div className="w-full h-full">
      <div>
        <h4> </h4>
        <div> option selection
        <SelectComponent options={options} onChange={handleChange} />
        </div>
      </div>

      <div>
        product content
      </div>
    </div>
  );
};

export default ProductFrame_Large;
