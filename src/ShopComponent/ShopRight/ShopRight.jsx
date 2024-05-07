import React from 'react'
import ProductRightTop from '../../CommonComponent/ShopRight item/ProductRightTop';
import ShopRightBottom from '../../CommonComponent/ShopRight item/ShopRightBottom';

const ShopRight = ({className}) => {
  return (
    <>
      <div className={className}>
        <ProductRightTop />
        <ShopRightBottom />
      </div>
    </>
  );
}

export default ShopRight
