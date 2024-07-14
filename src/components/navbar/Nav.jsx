import React from "react";
import { NavLink } from "react-router-dom";
import {
  arrowdown,
  arrowdownG,
  downarroww,
  rightarrow,
  tabler,
} from "../../assets/Index";
import NavMini from "./NavMini";
import HamburgerMenu from "./HamburgerMenu";

export const Nav = () => {
  return (
    <>
      <div className="hidden lg:block sticky top-0 bg-[#fff] z-10">
        <NavMini />
        <hr />
        <div className="flex justify-between w-[90%] m-auto items-center py-5">
          <button className="flex items-center justify-center gap-5 px-5 py-3 bg-[#7AC74F] rounded-lg text-[#fff] w-[303px]">
            <img src={tabler} alt="" />
            Browse all categories
            <img src={downarroww} alt="" />
          </button>
          <ul className="flex justify-between w-[520px] text-[#0a0b0a]">
            <li>
              <NavLink
                to="/"
                exact
                className="flex items-center"
                activeClassName="text-[#7AC74F]"
              >
                Home <img src={arrowdownG} alt="" width={15} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className="flex items-center"
                activeClassName="text-[#7AC74F]"
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productList"
                title="click to see all our products"
                className="flex items-center"
                activeClassName="text-[#7AC74F]"
              >
                shop <img src={arrowdown} alt="" width={15} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/checkout"
                title="click to see the most popular products"
                className="flex items-center"
                activeClassName="text-[#7AC74F]"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="flex items-center"
                activeClassName="text-[#7AC74F]"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            title="click to register as a vendor"
            className="bg-[#d3ecc4] p-2 rounded-lg text-[#396520] flex items-center justify-center gap-1 w-[163px]"
          >
            Become vendor <img src={rightarrow} alt="" />
          </button>
        </div>
      </div>
      <div className="sticky top-0 z-10 lg:hidden">
        <HamburgerMenu />
      </div>
    </>
  );
};
