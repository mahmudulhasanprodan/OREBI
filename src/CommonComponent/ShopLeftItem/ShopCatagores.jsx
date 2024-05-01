import React, { useState } from 'react'
import { BsPlus } from "react-icons/bs";
import Flex from '../Flex/Flex';

const ShopCatagores = ({cattagories, Shoptitle}) => {

  const [Showcategories, setShowcategories] = useState(
    cattagories.map(() => false)
  );



  //HandleCategories function start here
  const HandleCategoriesToggle = (id) => {
    setShowcategories((previousState) => {
      return previousState.map((value, index) => {
        return id === index ? !value : false;
      });
    });
  };



  return (
    <>
      <div className="pb-5">
        <h2 className="font-DMsans font-bold text-xl">
          {Shoptitle ? Shoptitle : "Title is Missing"}
        </h2>
      </div>
      <div>
        <div className="divide-y divide-[#F0F0F0] divide-solid">
          {cattagories?.map((item, index) =>
            item.subcategory.length > 0 ? (
              <div key={item.id}>
                <div className="py-3 px-2" onClick={() => HandleCategoriesToggle(index)}>
                  <Flex className={"items-center justify-between"}>
                    <h2 className="text-secondary_font_color font-normal text-base  cursor-pointer font-DMsans">
                      {item.title}
                    </h2>
                    <BsPlus className="cursor-pointer text-secondary_font_color" />
                  </Flex>
                </div>
                <div className={`${Showcategories && "mb-2"}`}>
                  {Showcategories[index] &&
                    item.subcategory.map((subitem) => (
                      <div className={`${Showcategories && "px-3 py-2"}`} key={subitem.id}>
                        <h2 className="text-secondary_font_color font-normal text-base  cursor-pointer font-DMsans">
                          {subitem.title}
                        </h2>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="py-3 px-2">
                <h2 className="text-secondary_font_color font-normal text-base  cursor-pointer font-DMsans">
                  {item.title}
                </h2>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default ShopCatagores
