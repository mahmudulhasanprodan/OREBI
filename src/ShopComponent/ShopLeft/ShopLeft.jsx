import React from 'react'
import ShopCatagores from '../../CommonComponent/ShopLeftItem/ShopCatagores'
import {CattagoryData, ShopByColor, ShopByBrand, ShopByPrice} from "../../../Data/Data"
import ShopColor from '../../CommonComponent/ShopLeftItem/ShopColor'


const ShopLeft = ({className}) => {
  return (
    <>
      <div className={className}>
        <ShopCatagores
          cattagories={CattagoryData ? CattagoryData : []}
          Shoptitle={"Shop by Category"}
        />
        <ShopColor
          ShopleftColor={ShopByColor ? ShopByColor : []}
          ShopTitle={"Shop by Color"}
          color={true}
          dropdown={true}
          dropdownIs={false}
        />
         <ShopColor
          ShopleftColor={ShopByBrand ? ShopByBrand : []}
          ShopTitle={"Shop by Brand"}
          color={false}
          dropdown={true}
          dropdownIs={false}
        />
           <ShopColor
          ShopleftColor={ShopByPrice ? ShopByPrice : []}
          ShopTitle={"Shop by Price"}
          color={false}
          dropdown={false}
          dropdownIs={true}
        />
      </div>
    </>
  );
}

export default ShopLeft
