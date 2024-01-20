import React from 'react'
import CustomerServicingData from './CustomerServicingData'
import CustomerComments from './CustomerComments'

const CustomerComponent : React.FC = () => {
  return (
    <>
         <div className=" flex justify-center w-full my-2">
          <CustomerServicingData />
        </div>
        <div className=''></div>
        <div className=" flex flex-col w-full justify-center items-center my-2">
          <h4 className="customers-comments-title  ">
           What our Customers are saying 
          </h4>
          <div className="my-4">
            <CustomerComments  />{" "}
          </div>
        </div>
    </>
  )
}

export default CustomerComponent