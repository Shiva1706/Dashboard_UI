import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiFileList2Line, RiWallet3Line,RiShoppingBagLine } from "react-icons/ri";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

const DashboardStartsGrid = () => {
  return (

    <div className="flex gap-6 w-full flex-wrap ">
      <BoxWrapper>
        <div className="rounded-full h-16 w-16 flex items-center justify-center bg-green-100 ">
          <AiOutlineDollarCircle className="fill-green-700 text-4xl" />
        </div>
        <div className="pl-4">
          <span className="text-xs text-gray-400 font-semibold">Earning</span>
          <div className="flex flex-col items-start ">
            <strong className="text-l text-gray-700 font-semibold">
              $198k
            </strong>
            <div className="text-xs font-medium ">
              <span className=" text-green-600">
                <BiUpArrowAlt className="inline text-base" />
                37.8%{" "}
              </span>
              this month
            </div>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-16 w-16 flex items-center justify-center bg-purple-200 ">
          <RiFileList2Line className="fill-purple-700 text-4xl" />
        </div>
        <div className="pl-4">
          <span className="text-xs text-gray-400 font-semibold">Orders</span>
          <div className="flex flex-col items-start ">
            <strong className="text-l text-gray-700 font-semibold">
              $2.4k
            </strong>
            <div className="text-xs font-medium ">
              <span className=" text-red-600">
                <BiDownArrowAlt className="inline text-base" />
                2%{" "}
              </span>
              this month
            </div>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-16 w-16 flex items-center justify-center bg-sky-200 ">
          <RiWallet3Line className="fill-sky-700 text-4xl" />
        </div>
        <div className="pl-4">
          <span className="text-xs text-gray-400 font-semibold">Balance</span>
          <div className="flex flex-col items-start ">
            <strong className="text-l text-gray-700 font-semibold">
              $2.4k
            </strong>
            <div className="text-xs font-medium">
              <span className=" text-red-600">
                <BiDownArrowAlt className="inline text-base" />
                2%{" "}
              </span>
              this month
            </div>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-16 w-16 flex items-center justify-center bg-pink-200 ">
          <RiShoppingBagLine className="fill-pink-700 text-4xl" />
        </div>
        <div className="pl-4">
          <span className="text-xs text-gray-400 font-semibold">Total Sales</span>
          <div className="flex flex-col items-start ">
            <strong className="text-l text-gray-700 font-semibold">
              $89K
            </strong>
            <div className="text-xs font-medium">
              <span className=" text-green-600">
                <BiUpArrowAlt className="inline text-base" />
                11%{" "}
              </span>
              this week
            </div>
          </div>
        </div>
      </BoxWrapper>
      
    </div>
  );
};

function BoxWrapper({ children }) {
  return (
    <div className='bg-white rounded-md py-4 px-2 flex-1 border border-x-gray-200 h-35 flex items-center '>
      {children}
    </div>
  );
}

export default DashboardStartsGrid;
