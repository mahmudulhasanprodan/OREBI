import React, { useState } from 'react'
import Logo from "../../assets/Mainlogo.png"
import Flex from '../../CommonComponent/Flex/Flex'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";



const Header = () => {

const[iconShow, seticonShow] = useState(false);


// MenuClick Function 

 const menuclick = () =>{
    seticonShow(!iconShow);
 };


  return (
    <>
      <div className="bg-main_bg_color fixed sm:static w-full z-10">
        <div className="container">
            <Flex className={"justify-between items-center py-5 px-3 sm:px-0 md:px-3"}>
                <div>
                    <picture>
                        <img src={Logo} alt={Logo} className="cursor-pointer"/>
                    </picture>
                </div>
                <div>
                    <Flex className={`absolute sm:flex-row sm:static sm:items-center sm:gap-x-10  ${iconShow ? "left-0 bg-gray-200 flex-col w-full z-10 top-14 text-center"
                    :"left-[-100%] flex-col w-full z-10 top-14 text-center"}`}>
                        <li className={`Menu__list font-bold active:text-main_font_color py-1 py-sm-0 ${iconShow ? "hover:bg-red-300" : ""}`}>
                            <a href="#">Home</a>
                        </li>
                        <li className={`Menu__list font-bold active:text-main_font_color py-1 py-sm-0 ${iconShow ? "hover:bg-red-300" : ""}`}>
                            <a href="#">Shop</a>
                        </li>
                        <li className={`Menu__list font-bold active:text-main_font_color py-1 py-sm-0 ${iconShow ? "hover:bg-red-300" : ""}`}>
                            <a href="#">About</a>
                        </li>
                        <li className={`Menu__list font-bold active:text-main_font_color py-1 py-sm-0 ${iconShow ? "hover:bg-red-300" : ""}`}>
                            <a href="#">Contacts</a>
                        </li>
                        <li className={`Menu__list font-bold active:text-main_font_color py-1 py-sm-0 ${iconShow ? "hover:bg-red-300" : ""}`}>
                            <a href="#">Journal</a>
                        </li>
                    </Flex>
                </div>
                <div></div>
                <div className="cursor-pointer sm:hidden" onClick={menuclick}>
                    {iconShow === true ? <ImCross /> : <FaBars /> }
                </div>
            </Flex>
        </div>
      </div>
    </>
  )
}

export default Header
