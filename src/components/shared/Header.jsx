import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { PiHandWaving } from "react-icons/pi";

const Header = () => {
  return (
    <div className="h-16 px-4 flex justify-between items-center ">
      <div className="font-bold text-sm flex flex-row justify-between " >
        <span>Hello Shivansh <PiHandWaving className="fill-orange-400 h-5 w-5 pb-1 inline" /> </span>
        
      </div>
      <div className="relative">
        <HiOutlineSearch fontSize={20} className="text-gray-600 absolute top-1/2 -translate-y-1/2 left-3" />
        <input
          type="text"
          placeholder="Search"
          className="text-sm h-8 w-[12rem] border border-white rounded-md pl-9 pr-4"
        />
      </div>
    </div>
  );
};

export default Header;
