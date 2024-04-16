import React from 'react'
import ShippingItem from '../../CommonComponent/ShippingItem/ShippingItem';
import Flex from "../../CommonComponent/Flex/Flex"
import { FaTruck } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";
import { PiNumberTwoBold } from "react-icons/pi";



const Shipping = () => {

    const data = [
        
            {id: 1, icon: <PiNumberTwoBold />, title: "Two years warranty"},
            {id: 1, icon: <FaTruck />, title: "Free shipping"},
            {id: 1, icon: <SlReload />, title: "Return policy in 30 days"},
        
    ];

  return (
    <>
      <div className="my-5">
        <div className="container">
          <Flex className={" sm:justify-between flex-col sm:flex-row gap-y-3 sm:gap-y-3 item-center ml-14 sm:ml-0"}>
            {data?.map((item) => (
              <div className="flex items-center gap-x-3 cursor-pointer">
                <ShippingItem
                  key={item.id}
                >                  
                  <span>{item.icon}</span>
                  <p className="font-DMsans text-footer_text_color">{item.title}</p>
                </ShippingItem>
              </div>
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Shipping
