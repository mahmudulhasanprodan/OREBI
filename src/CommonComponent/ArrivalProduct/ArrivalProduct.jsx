import React from 'react'
import Flex from "../Flex/Flex"
import { FaHeart } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";



const ArrivalProduct = ({ColorVarient, baze, Image}) => {
  return (
    <>
      <div className="w-[95%] py-8 m-auto">
        <div className="relative overflow-hidden cursor-pointer group">
          <div className="absolute top-5 left-5">{baze}</div>
          <picture>
            <img src={Image} alt={Image} />
          </picture>
          <div className="w-full p-4 absolute bg-main_bg_color -bottom-[150px] left-0 group-hover:bottom-0 transition-all">
            <Flex className={"items-center justify-end gap-x-4 right-3"}>
              <h2 className="font-DMsans text-secondary_font_color">
                Add to List
              </h2>
              <span>
                <FaHeart />
              </span>
            </Flex>
            <Flex className={"items-center justify-end gap-x-4 right-3 py-5"}>
              <h2 className="font-DMsans text-secondary_font_color">Compare</h2>
              <span>
                <TfiReload />
              </span>
            </Flex>
            <Flex className={"items-center justify-end gap-x-4 right-3"}>
              <h2 className="font-DMsans font-bold">Add to Cart</h2>
              <span>
                <FaShoppingCart />
              </span>
            </Flex>
          </div>
        </div>
        <Flex className={"justify-between items-center py-6"}>
          <h2 className="font-DMsans text-main_font_color font-bold">
            Basic Crew Neck Tee
          </h2>
          <p className="font-DMsans text-secondary_font_color">$44.00</p>
        </Flex>
        <div>
          {ColorVarient && (
            <h3 className="font-DMsans text-secondary_font_color">
              Black
            </h3>
          )}
        </div>
      </div>
    </>
  );
}

export default ArrivalProduct
