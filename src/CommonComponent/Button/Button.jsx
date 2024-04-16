import React from 'react'

const Button = ({className, Title}) => {
  return (
    <>
      <button className={className ? className : "px-3 py-3 bg-red-400"}>{Title ? Title : "Button"}</button>
    </>
  )
}

export default Button
