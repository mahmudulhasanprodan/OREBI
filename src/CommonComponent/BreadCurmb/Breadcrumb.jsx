import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = () => {

    const Location = useLocation();
    let BreadCrumbPathname = (Location.pathname.split("/").filter((x) => x));
    


  return (
    <>
      <div className="py-4">
        <ul className="flex items-center gap-x-2">
          <li>
            <Link
              to={"/"}
              className="bg-green-400 py-1 px-5 rounded-md font-DMsans cursor-pointer"
            >
              Home
            </Link>
          </li>
          <MdOutlineKeyboardArrowRight />
          {BreadCrumbPathname.map((path, index) => {
            const Islast = index === BreadCrumbPathname.length - 1;

            return (
              <li key={path}>
                {Islast ? (
                  <Link
                    className={`${
                      Islast
                        ? "bg-green-400 py-1 px-5 rounded-md font-DMsans cursor-pointer"
                        : null
                    }`}
                  >
                    {path}
                  </Link>
                ) : (
                  <Link
                    to={"/"}
                    className={`${
                      Islast
                        ? "bg-green-400 py-2 px-5 rounded-md font-DMsans cursor-pointer"
                        : null
                    }`}
                  >
                    {path}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Breadcrumb
