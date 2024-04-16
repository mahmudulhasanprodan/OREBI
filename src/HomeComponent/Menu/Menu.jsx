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
                <p className="Menu__list text-secondary_font_color cursor-pointer hidden sm:block">Shop by Category</p>
                </Flex>
                <div>
                    <Search 
                     className={"w-[200px] sm:w-[350px] md:w-[400px] lg:w-[601px] py-3 pl-3 rounded-sm"}
                     placeholder={"Search Products"}
                    />
                </div>
                <Flex className={"items-center sm:gap-x-1 cursor-pointer px-3 sm:px-0 md:pr-3"}>
                    <div>
                        <FaUser />
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
