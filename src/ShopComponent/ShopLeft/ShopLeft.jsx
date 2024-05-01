import React from 'react'
import ShopCatagores from '../../CommonComponent/ShopLeftItem/ShopCatagores'
import {CattagoryData} from "../../../Data/Data"

const ShopLeft = ({className}) => {
  return (
    <>
      <div className={className}>
        <ShopCatagores
          cattagories={CattagoryData ? CattagoryData : []}
          Shoptitle={"Shop by Category"}
        />
      </div>
    </>
  );
}

export default ShopLeft
