import React from "react";
import Nav from "../../components/home/Nav";

const CustomerService = () => {
  return (
    <>
      <Nav></Nav>
      <div className="justify-center items-center mx-10 lg:mx-72 mt-52 mb-16 py-10 px-16 rounded-md text-gray-800 shadow-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          For Any Queries:
        </h1>
        <h1 className="font-semibold text-2xl">Email Us: </h1>
        <p className="mb-4 font-medium text-xl">quickbazaar8@gmail.com</p>
        <h1 className="font-semibold text-2xl">Call Us:</h1>
        <p className="mb-2 font-medium text-xl">+8801432567850</p>
      </div>
    </>
  );
};

export default CustomerService;
