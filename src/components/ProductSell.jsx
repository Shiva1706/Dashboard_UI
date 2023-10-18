import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Dropdown } from "flowbite-react";

const productSell = [
  {
    id: "0",
    image: "images/abstract.jpg",
    name: "Abstract 3D",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    quantity: "32",
    price: "$ 45.99",
    sales: "20",
  },
  {
    id: "1",
    image: "images/abstract2.jpg",
    name: "Sarphens Illustration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    quantity: "32",
    price: "$ 45.99",
    sales: "20",
  },
  {
    id: "2",
    image: "images/abstract3.jpg",
    name: "Sarphens Illustration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    quantity: "32",
    price: "$ 45.99",
    sales: "20",
  },
  {
    id: "3",
    image: "images/abstract4.jpg",
    name: "Sarphens Illustration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    quantity: "32",
    price: "$ 45.99",
    sales: "20",
  },
  {
    id: "4",
    image: "images/abstract5.jpg",
    name: "Sarphens Illustration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    quantity: "32",
    price: "$ 45.99",
    sales: "20",
  },
  {
    id: "5",
    image: "images/abstract6.jpg",
    name: "Sarphens Illustration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    quantity: "0",
    price: "$ 45.99",
    sales: "52",
  },
];

const ProductSell = () => {
  return (

    <div className="flex flex-col bg-white px-4 pt-3 pb-4 rounded-md w-full">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 scroll-smooth " >
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="flex flex-row justify-between mb-3 ml-2 mt-2">
            <strong className="text-gray-700 pl-4 font-medium">Product Sell</strong>

            <div className="flex flex-row">
              <div className="relative pr-3 ">
                <HiOutlineSearch
                  fontSize={16}
                  className="text-gray-600 absolute top-1/4 -translate-y-1/4 left-3  "
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="text-sm h-6 w-[10rem] border border-indigo-50 rounded-md pl-8 pr-4 bg-indigo-50"
                />
              </div>

              <div className="flex gap-0.5 bg-indigo-50 text-gray-400 items-center font-semibold p-1 mb-2 rounded-md text-xs">
                <Dropdown label="Last 30 Days" inline className="bg-indigo-50 ">
                  <Dropdown.Item>Last Week</Dropdown.Item>
                  <Dropdown.Item>Last Day</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full">
              <thead className="bg-white outline outline-1 outline-gray-400 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider"
                  >
                    Stock
                  </th>
                  <th
                    scope="col"
                    className="px-8 py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-xs  text-center font-semibold text-gray-400 uppercase tracking-wider"
                  >
                    Total Sales
                  </th>
                </tr>
              </thead>
              
              <tbody className="bg-inherit  ">
                {productSell.map((product) => (
                  <tr key={product.id} className="border-hidden" >
                    <td className="px-6 py-4 whitespace-nowrap ">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-12">
                          <img
                            className="h-10 w-12 rounded-xl "
                            src={product.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-gray-900">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {product.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-xs text-center font-medium  text-gray-900">
                        {product.quantity} in stock
                      </div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <span
                        className="px-2  text-xs font-semibold text-black-800 "
                      >
                        {product.price}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-center text-gray-500 ">
                      {product.sales}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSell;
