import React from 'react'
import FooterItem from '../../CommonComponent/FooterItem/FooterItem'
import Flex from '../../CommonComponent/Flex/Flex'
import FooterLogo from "../../assets/Mainlogo.png"

const FooterTop = () => {
  return (
    <>
      <div className="bg-secondary_bg_color mt-10">
        <div className="container">
            <Flex className={"sm:gap-x-20 md:gap-x-32 flex-col py-14 lg:flex-row lg:mx-3"}>
                <Flex className={"gap-x-3 sm:gap-x-32  md:mx-3 lg:mx-0"}>
                <FooterItem 
                    Allitem={["Home","Shop","About","Contact","Journal"]}
                    title="MENU"
                />
                 <FooterItem 
                    Allitem={["Category","Category","Category","Category","Category"]}
                    title="SHOP"
                />
                  <FooterItem 
                    Allitem={[
                        "Privacy Policy",
                        "Terms & Conditions",
                        "Special E-shop",
                        "Shipping",
                        "Secure Payments"
                    ]}
                    title="HELP"
                />
                </Flex>
                <Flex className={"gap-x-3 sm:gap-x-0 mt-8 sm:mt-8 sm:justify-between lg:gap-x-40"}>
                <div className="flex flex-col mx-3 sm:mx-0 md:mx-3">
                    <div className="font-DMsans font-bold"><a href="#">(052) 611-5711</a></div>
                    <div className="font-DMsans font-bold"><a href="#">company@domain.com</a></div>
                    <address className="font-DMsans text-footer_text_color text-sm mt-4">575 Crescent Ave. Quakertown, PA 18951</address>
                </div>
                <div className="mr-3 sm:mr-0 md:mr-3">
                    <picture>
                        <img src={FooterLogo} alt={FooterLogo} />
                    </picture>
                </div>
                </Flex>
            </Flex>
        </div>
      </div>
    </>
  )
}

export default FooterTop
