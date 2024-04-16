import React from 'react'
import Flex from '../Flex/Flex'
import { FaSearch } from "react-icons/fa";


const Search = ({className, placeholder}) => {
  return (
    <>
      <Flex className={"items-center"}>
        <div className="relative">
            <input type="text" className={className} placeholder={placeholder}/>
            <FaSearch className="absolute top-2/4 -translate-y-2/4 right-5 cursor-pointer"/>
        </div>
      </Flex>
    </>
  )
}

export default Search
