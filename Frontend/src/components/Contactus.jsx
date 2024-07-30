import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
      <div className="flex h-screen items-center justify-center ">      
            <form  method="dialog">
              <h3 className=" font-semibold text-4xl">Contact-us</h3>
              <div className="mt-4 space-y-2">
                <span className="text-lg">Name</span>
                <br />
                {/* Full Name Field */}
                <input
                  type="text"
                  placeholder="Enter your Full-Name"
                  className="w-96 h-11 px-3 py-1 border rounded-md outline-none"
                />
                <br />
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span className="text-lg" >Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-96 h-11 px-3 py-1 border rounded-md outline-none"
                />
                 <br />
              </div>
              {/* Message */}
              <div className="mt-4 space-y-2">
                <span className="text-lg">Message</span>
                <br />
                <textarea type="text" 
                placeholder="Enter your Message"
                className="w-96 h-28 px-3 py-1 border rounded-md outline-none"
                 ></textarea>
                 <br />
              </div>
              {/* Button  */}
              <div className="mt-4">
                <button className="bg-blue-500 text-lg text-white rounded-md px-3 py-1 h-11 w-24 hover:bg-blue-700 duration-200">
                 Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contactus;
