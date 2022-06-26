import React, { useState } from "react";
import { FaArrowCircleLeft, FaBars } from "react-icons/fa";
import { IoIosArrowBack , IoIosMenu} from "react-icons/io";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`bg-base-100 shadow-sm h-screen p-5 pt-8 relative duration-300 ${
          open ? "w-64" : "w-20"
        } cursor-pointer`}
      >


       {
        open ? "Hello" :  <IoIosMenu
        className="text-primary bg-gray-100 text-4xl shadow-lg rounded font-semibold text-2xl"
        onClick={() => setOpen(true)}
      ></IoIosMenu>
       }
        
        <IoIosArrowBack
          className="text-primary rounded-full text-4xl p-2 absolute border shadow-lg -right-5 top-8 bg-white"
          onClick={() => setOpen(false)}
        ></IoIosArrowBack>
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold">HomePage</h1>
      </div>
    </div>
  );
};

export default Navbar;
