import React from 'react'
import Flex from '../Flex/Flex';


const ShippingItem = ({className, children , number, title, icon}) => {
  return (
    <>
      <div className={className}>
       <Flex className={"items-center"}>
        <h2>{number ? number : ""}</h2>
        <span>{icon ? icon : ""}</span>
        <p>{title ? title : ""}</p>
       </Flex>
      </div>
      {children}
    </>
  );
}

export default ShippingItem
