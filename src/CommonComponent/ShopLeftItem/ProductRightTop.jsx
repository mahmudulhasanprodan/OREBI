import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import {ShortByItem, ShoptByItem} from "../../../Data/Data"
import Flex from '../Flex/Flex';

const ProductRightTop = () => {

    const[ShortProduct, setShortProduct] = useState(ShortByItem);
    const[ShopProduct, setShopProduct] = useState(ShoptByItem);

  return (
    <>
      <Flex className={"items-center justify-between"}>
        <div>
          <IoGridSharp  className="text-2xl cursor-pointer"/>
        </div>
        <Flex className={"items-center justify-between"}>
            <div>
            <Flex className={"items-center"}>
          <h2 className="text-secondary_font_color font-DMsans text-base font-normal mr-2">
            Sort by:
          </h2>
          <div>
            <div>
              <select
                name="sort"
                id="sort"
                className="px-4 min-w-[240px] py-1 cursor-pointer border-2 border-[#F0F0F0]"
              >
                <option
                  value="feature"
                  className="text-secondary_font_color font-DMsans text-base font-normal"
                >
                  Feature
                </option>
                {ShortProduct?.map((items) => (
                  <option
                    value={items.shortItem}
                    key={items.shortItem}
                    className="text-secondary_font_color font-DMsans text-base font-normal"
                  >
                    {items.shortItem}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Flex>
            </div>
            <div className="ml-5">
            <Flex className={"items-center"}>
          <h2 className="text-secondary_font_color font-DMsans text-base font-normal mr-2">
            Shop:
          </h2>
          <div>
            <div>
              <select
                name="sort"
                id="sort"
                className="px-4 min-w-[240px] py-1 cursor-pointer border-2 border-[#F0F0F0]"
              >
                <option
                  value="feature"
                  className="text-secondary_font_color font-DMsans text-base font-normal"
                >
                  36
                </option>
                {ShoptByItem?.map((items) => (
                  <option
                    value={items.shortItem}
                    key={items.shortItem}
                    className="text-secondary_font_color font-DMsans text-base font-normal"
                  >
                    {items.shortItem}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Flex>
            </div>
        </Flex>
      </Flex>
    </>
  );
}

export default ProductRightTop
