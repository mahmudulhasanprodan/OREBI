import React, { useState } from 'react'
import { HiBars3BottomLeft } from "react-icons/hi2";
import Flex from '../../CommonComponent/Flex/Flex';
import Search from '../../CommonComponent/Search/Search';
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa";
import CartPic from "../../assets/ArrivalPicfour.png"



const Menu = () => {


  const[Showcatagories, setAllcatagories] = useState(false);
  const[Showaccount, setShowaccount] = useState(false);


  // Handlecatagories function start here 

   const Handlecatagories = () =>{
    setAllcatagories(!Showcatagories);
   };

   // HandleAccount function start here
   const HandleAccount = () =>{
    setShowaccount(!Showaccount);
   };


  return (
    <>
      <div className="bg-secondary_bg_color py-2 sm:py-8">
        <div className="container">
          <Flex className={"justify-between items-center pt-16 sm:py-10"}>
            <Flex className={"items-center gap-x-3 px-3 sm:px-0 md:px-3"}>
              <div onClick={Handlecatagories}>
                <HiBars3BottomLeft
                  className={`text-2xl cursor-pointer ${
                    Showcatagories && "text-green-400"
                  }`}
                />
              </div>
              <p className="Menu__list text-secondary_font_color cursor-pointer hidden sm:block">
                Shop by Category
              </p>
              {Showcatagories && (
                <div>
                  <ul
                    className={`absolute w-[263px] divide-y divide-gray-200 text-center cursor-pointer ${
                      Showcatagories && "bg-black  z-10 top-32"
                    }`}
                  >
                    <li className="py-2 px-16 text-white hover:bg-red-300">
                      <a href="#">Accesories</a>
                    </li>
                    <li className="py-2 px-16 text-white hover:bg-red-300">
                      <a href="#">Furniture</a>
                    </li>
                    <li className="py-2 px-16 text-white hover:bg-red-300">
                      <a href="#">Electronics</a>
                    </li>
                    <li className="py-2 px-16 text-white hover:bg-red-300">
                      <a href="#">Clothes</a>
                    </li>
                    <li className="py-2 px-16 text-white hover:bg-red-300">
                      <a href="#">Bags</a>
                    </li>
                    <li className="py-2 px-16 text-white hover:bg-red-300">
                      <a href="#">Home Apliances</a>
                    </li>
                  </ul>
                </div>
              )}
            </Flex>
            <div>
              <Search
                className={
                  "w-[200px] sm:w-[350px] md:w-[400px] lg:w-[601px] py-3 pl-3 rounded-sm"
                }
                placeholder={"Search Products"}
              />
            </div>
            <Flex
              className={
                "items-center sm:gap-x-1 cursor-pointer px-3 sm:px-0 md:pr-3"
              }
            >
              <div className="relative" onClick={HandleAccount}>
                <FaUser className={`${Showaccount && "text-green-400"}`} />
              </div>
              {Showaccount && (
                <div>
                  <ul className="absolute z-10 bg-white top-40 left-0 w-full sm:w-[200px] text-center divide-y divide-gray-200">
                    <li className="py-2 px-14 hover:bg-black hover:text-white">
                      <a href="#">My Account</a>
                    </li>
                    <li className="py-2 px-14 hover:bg-black hover:text-white">
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </div>
              )}

              <div onClick={HandleAccount}>
                {Showaccount ? (
                  <FaCaretUp className={`${Showaccount && "text-green-400"}`} />
                ) : (
                  <FaCaretDown />
                )}
              </div>
              <div className="ml-3">
                <FaCartShopping />
              </div>
              <div>
                <div>
                  <Flex className={"items-center gap-x-3"}>
                    <picture className="w-[80px] h-[80px]">
                      <img src={CartPic} alt={CartPic} />
                    </picture>
                    <div>
                      <h2>Black smart Watch</h2>
                      <span>$44.00</span>
                    </div>
                  </Flex>
                </div>
                <div>
                  
                </div>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Menu
