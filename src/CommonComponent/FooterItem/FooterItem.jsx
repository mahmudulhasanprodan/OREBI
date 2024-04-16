import React from 'react'

const FooterItem = ({Allitem=["One","Two","Three"], title}) => {
  return (
    <>
      <div>
        <h2 className="font-DMsans font-bold text-main_font_color mb-4 mx-3 sm:mx-0">{title ? title : "No title"}</h2>
        <ul>
          {Allitem?.map((item, index) => (
            <li className="font-DMsans text-footer_text_color text-sm py-2 mx-3 sm:mx-0">
              <a href="#">{title.toLocaleLowerCase()=== "SHOP".toLocaleLowerCase() ? (item + " " +(index+1)) : item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FooterItem
