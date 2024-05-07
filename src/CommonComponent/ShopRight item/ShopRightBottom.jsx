import React, { useEffect, useState } from 'react'
import pic from "../../assets/ArrivalPicfour.png"
import ArrivalProduct from "../ArrivalProduct/ArrivalProduct"
import Button from '../Button/Button'
import axios from 'axios'
import Flex from '../Flex/Flex'

const ShopRightBottom = () => {
const[Allproducts, setAllproducts] = useState([]);
const[allpage, setallpage] = useState(1)

//HandleClick function start here
const HandleClick = () =>{ 
  setallpage(allpage+1);
  
};




useEffect(() =>{
    const ProductDataFetcher = async () =>{
          const Data = await axios.get('https://dummyjson.com/products');
          setAllproducts(Data.data.products);
    };
    ProductDataFetcher();
},[]);


  return (
    <>
      <div className="mt-10">
        <div className="flex flex-wrap justify-between gap-y-6">
          {Allproducts?.slice(allpage * 9 - 9, allpage*9).map((ProdectItem) => (
            <div className="w-[33%]">
              <ArrivalProduct
                Image={ProdectItem.thumbnail}
                ColorVarient={"black"}
                ProductName={ProdectItem.title}
                ProductPrice={ProdectItem.price}
                baze={
                  <Button
                    Title={
                      ProdectItem.discountPercentage
                        ? `$${Math.floor(ProdectItem.discountPercentage)}`
                        : ProdectItem.stock ? ProdectItem.stock :  "New"
                    }
                    className={
                      "px-6 py-1 bg-main_font_color text-white font-DMsans font-bold"
                    }
                  />
                }
              />
            </div>
          ))}
        </div>
        <Flex className={"items-center justify-between py-6"}>
          <div>
            <ul>
              <li className="flex items-center gap-x-2 cursor-pointer" onClick={HandleClick}>
                <p className="py-2 bg-black px-4 gap-x-2 text-white font-bold">1</p>
                <p className="py-2 bg-black px-4 gap-x-2 text-white font-bold">2</p>
                <p className="py-2 bg-black px-4 gap-x-2 text-white font-bold">3</p>
                <p className="py-2 bg-black px-4 gap-x-2 text-white font-bold">4</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-DMsans text-secondary_font_color">Products from {allpage * 9 - 9} to {allpage*9} of {Allproducts.length}</p>
          </div>
        </Flex>
      </div>
    </>
  );
}

export default ShopRightBottom
