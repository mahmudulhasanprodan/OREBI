import React from 'react'
import Watch from "../../assets/PhoneofYear.png"
import Button from '../../CommonComponent/Button/Button'
import Flex from '../../CommonComponent/Flex/Flex'

const Phone = () => {
  return (
    <>
      <div className="py-28">
        <div className="container">
            <Flex className={"bg-watch_bg_color items-center flex-col sm:flex-row gap-y-5 sm:gap-y-5 pb-5"}>
                <div>
                    <picture>
                        <img src={Watch} alt={Watch} />
                    </picture>
                </div>
                <div className="text-center sm:text-left sm:mt-2">
                    <h2 className="font-DMsans font-bold text-3xl text-main_font_color sm:text-2xl">Phone of the year</h2>
                    <p className="mx-3 sm:mx-0 text-justify sm:text-base sm:text-left font-DMsans text-main_font_color mt-8 sm:mt-3 mb-6 sm:mb-6 md:mb-12 mx-w-[510px] lg:w-[510px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                    <Button 
                    className={"py-2 sm:py-2 md:py-4 sm:px-8 px-14 bg-main_font_color font-DMsans font-bold text-white"} 
                    Title={"Shop Now"}/>
                </div>
            </Flex>
        </div>
      </div>
    </>
  )
}

export default Phone
