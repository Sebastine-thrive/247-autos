import React from "react";
import { CustomerCommentsData } from "./CustomerCommentsData";

const CustomerComments = () => {
  return (
    <div className="flex flex-wrap justify-center  gap-8 w-full m-auto">
      {CustomerCommentsData.map((customer, index) => (
        <div
          key={index}
          className="bg-white comments-card w-full md:w-1/2 lg:w-[30%] rounded-md p-4"
        >

    
      <h3  className="text-black"> <span className="text-customRed">&quot;</span>
      {customer.comment}  
      
      <span className="text-customRed"> &quot;</span>
      </h3>
    
          <h4 className="my-8 text-customRed">{customer.name}</h4>
          <h5 className="my-4">{customer.location}</h5>
          <h6 className="my-4">{customer.number}</h6>
        </div>
      ))}
    </div>
  );
};

export default CustomerComments;
