import React, { useState } from 'react'
import Flex from '../Flex/Flex';
import { FaAngleDown,FaAngleUp } from "react-icons/fa6";


const ShopColor = ({ ShopTitle, ShopleftColor, color, dropdown, dropdownIs}) => {
  const [ShowColor, setShowColor] = useState(dropdownIs);

  // HandleColor function start here

  const HandleColor = () => {
    setShowColor(!ShowColor);
  };

  return (
    <>
      <div className="mt-4" onClick={HandleColor}>
        <Flex className={"items-center justify-between"}>
          <h2 className="font-DMsans font-bold text-xl py-2 cursor-pointer">
            {ShopTitle ? ShopTitle : "Title Missing"}
          </h2>
          {dropdown && (
             <div>
             {ShowColor ? (
                <FaAngleUp className="mr-3 cursor-pointer text-green-500" />
              ) : (
                <FaAngleDown className="mr-3 cursor-pointer" />
              )}
             </div>
          )}
        
        </Flex>
        {ShowColor && (
          <div className="divide-y divide-[#F0F0F0] divide-solid">
            {ShopleftColor?.map((item) => (
              <div className="px-2 py-5">
                <Flex className={"items-center gap-x-4"}>
                  {color && (
                    <div
                      className="w-[11px] h-[11px] rounded-full"
                      style={{ backgroundColor: `${item.ColorCode}` }}
                    ></div>
                  )}

                  <h2 className="text-secondary_font_color mt-1 font-normal text-base  cursor-pointer font-DMsans">
                    {item.title}
                  </h2>
                </Flex>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ShopColor
