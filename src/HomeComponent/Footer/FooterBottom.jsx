import React from 'react'
import Flex from '../../CommonComponent/Flex/Flex'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const FooterBottom = () => {
  return (
    <>
      <div className="bg-secondary_bg_color">
        <div className="container">
          <Flex className={"py-10 justify-between items-center cursor-pointer flex-col sm:flex-row bg-gray-300 sm:bg-transparent lg:mx-3"}>
            <Flex className={"gap-x-5 text-main_font_color items-center md:mx-3 lg:mx-0"}>
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
            </Flex>
            <div>
              <p className="font-DMsans text-footer_text_color text-sm text-center sm:text-left mx-3 sm:mx-0 md:mx-3 lg:mx-0 mt-4 sm:mt-0">2024 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default FooterBottom
