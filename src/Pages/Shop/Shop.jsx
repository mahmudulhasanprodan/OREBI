import React from 'react'
import Breadcrumb from '../../CommonComponent/BreadCurmb/Breadcrumb'
import ShopLeft from '../../ShopComponent/ShopLeft/ShopLeft'
import ShopRight from '../../ShopComponent/ShopRight/ShopRight'
import Flex from "../../CommonComponent/Flex/Flex"

const Shop = () => {
  return (
    <>
      <div>
        <div className="container">
            <div>
                <div className="pt-28">
                    <h2 className="font-DMsans font-bold text-5xl">Products</h2>
                </div>
                <div>
                    <Breadcrumb />
                </div>
               <div className="py-20">
               <Flex>
                    <ShopLeft className={"w-[25%] bg-blue-400 h-[100vh]"}/>
                    <ShopRight className={"w-[75%] bg-purple-400 h-[100vh]"}/>
                </Flex>
               </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Shop
