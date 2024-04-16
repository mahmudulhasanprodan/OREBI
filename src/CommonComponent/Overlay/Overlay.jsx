import React from 'react'
import Button from '../Button/Button'

const Overlay = ({className, children, discount, subtitle, description, title}) => {
  return (
    <>
      <div className={className}>
        <h3 className="font-bold text-main_font_color text-2xl sm:text-xl">{title ? title : "No Title"}</h3>
        <p className="mt-3 mb-5 sm:mb-2 lg:mb-12 lg:mt-9 font-DMsans">
        {subtitle ? subtitle : "Input Value"}
        <span className="mx-2 font-DMsans font-bold text-2xl align-middle">{discount ? discount : "20%"}</span>
        {description ? description : "Description Here"}
       </p>
        <Button  className={"px-10 py-2 sm:px-8 sm:py-2 lg:px-14 lg:py-4 bg-main_font_color text-white font-DMsans font-bold"} Title={"Shop Now"}/>
      </div>
      {children}
    </>
  )
}

export default Overlay
