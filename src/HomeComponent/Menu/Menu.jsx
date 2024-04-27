import React from 'react'
import { HiBars3BottomLeft } from "react-icons/hi2";
import Flex from '../../CommonComponent/Flex/Flex';
import Search from '../../CommonComponent/Search/Search';
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";



const Menu = () => {
  return (
    <>
      <div className="bg-secondary_bg_color py-2 sm:py-8">
        <div className="container">
            <Flex className={"justify-between items-center pt-16 sm:py-10"}>
                <Flex className={"items-center gap-x-3 px-3 sm:px-0 md:px-3"}>
                <HiBars3BottomLeft className="text-2xl cursor-pointer"/>
                <div className="absolute bg-red-300 left-3 z-10 top-32">
                  <ul>
                    <li className="py-2 px-24 hover:bg-black hover:text-white">Home</li>
                    <li className="py-2 px-24 hover:bg-black hover:text-white">Home</li>
                    <li className="py-2 px-24 hover:bg-black hover:text-white">Home</li>
                    <li className="py-2 px-24 hover:bg-black hover:text-white">Home</li>
                  </ul>
                </div>
                <p className="Menu__list text-secondary_font_color cursor-pointer hidden sm:block">Shop by Category</p>
                </Flex>
                <div>
                    <Search 
                     className={"w-[200px] sm:w-[350px] md:w-[400px] lg:w-[601px] py-3 pl-3 rounded-sm"}
                     placeholder={"Search Products"}
                    />
                </div>
                <Flex className={"items-center sm:gap-x-1 cursor-pointer px-3 sm:px-0 md:pr-3"}>
                    <div className="relative">
                        <FaUser />
                        <div className="absolute z-10 bg-red-400 right-6">
                          <h2 className="py-2 hover:bg-black hover:text-white text-center">My Account</h2>
                          <p className="py-2 hover:bg-black hover:text-white text-center">Logout</p>
                        </div>
                    </div>
                    <div>
                        <FaCaretDown />
                    </div>
                    <div className="ml-3">
                        <FaCartShopping />
                    </div>
                </Flex>
            </Flex>
        </div>
      </div>
    </>
  )
}

export default Menu
