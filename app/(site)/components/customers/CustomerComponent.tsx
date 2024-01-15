import React from 'react'
import CustomerServicingData from './CustomerServicingData'
import CustomerComments from './CustomerComments'

const CustomerComponent : React.FC = () => {
  return (
    <>
         <div className=" flex justify-center xss:w-full sm:w-[80%] lg:w-[100%]">
          <CustomerServicingData />
        </div>
        <div className=" flex flex-col w-full justify-center items-center">
          <h4 className="customers-comments-title text-[40px] my-4">
           <blockquote>What our Customers are saying </blockquote>
          </h4>
          <div className="my-4">
            <CustomerComments  />{" "}
          </div>
        </div>
    </>
  )
}

export default CustomerComponent