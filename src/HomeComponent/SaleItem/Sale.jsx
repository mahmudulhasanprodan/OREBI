import React from 'react'
import ImageOne from "../../assets/SaleImgOne.png"
import ImageTwo from "../../assets/SaleImgTwo.png"
import ImageThree from "../../assets/SaleImgThree.png"
import Flex from '../../CommonComponent/Flex/Flex'
import Overlay from '../../CommonComponent/Overlay/Overlay'

const Sale = () => {
  return (
    <>
      <div className="mt-8 sm:mt-44 mb-12 px-3 sm:px-0">
        <div className="container">
          <Flex className={"gap-x-10 sm:gap-x-5 flex-col sm:flex sm:flex-row md:mx-3 lg:mx-0"}>
            <div className="w-full sm:w-2/4 relative mb-5 sm:mb-0">
              <picture>
                <img src={ImageOne} alt={ImageOne} />
              </picture>
              <Overlay
              className={"absolute bottom-5 left-2 lg:left-16 md:bottom-10 lg:bottom-2"}
              title="Phone Sale"
              subtitle= "Up to"
              discount= "30%"
              description = "sale for all phones!"             
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-y-5 md:gap-y-8">
              <div className="relative">
                <picture>
                  <img src={ImageTwo} alt={ImageTwo} />
                </picture>
                <Overlay
                className={"absolute left-2 lg:left-16 top-2/4 -translate-y-2/4 sm:left-2"}
                title="Electronics Sale"
                subtitle= "Up to"
                discount= "70%"
                description = "Electronics Sale!"             
              />
              </div>
              <div className="relative">
                <picture>
                  <img src={ImageThree} alt={ImageThree} />
                </picture>
                <Overlay
                className={"absolute left-2 lg:left-16 top-2/4 -translate-y-2/4 sm:left-2sm:left-2"}
                title="Furniture Offer"
                subtitle= "Up to"
                discount= "50%"
                description = "Furniture Offer"             
                />
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Sale
