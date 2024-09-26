import React, { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowBack, IoMdSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Menu } from "../../Detail";
import { ShopContext } from "../context/ShopContext";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [toggleStatus, setToggleStatus] = useState(false);
  const { showSearch, setShowSearch, getCartCount } = useContext(ShopContext);

  const handleTogglestatus = () => {
    setToggleStatus(!toggleStatus);
  };

  return (
    <div className="shadow-md font-Inter">
      <div className="bg-primary/30 py-2">
        <div className="flex justify-around items-center">
          <div>
            <NavLink to="/">
              <img src={Logo} alt="" className="w-[170px] h-[50px]" />
            </NavLink>
          </div>

          <div className="flex justify-center">
            <ul className="md:flex hidden items-center gap-2 lg:gap-4">
              {Menu.map((data, index) => (
                <li key={index}>
                  <NavLink
                    className="inline-block px-2 lg:px-4 py-2 hover:text-primary duration-200 cursor-pointer"
                    to={data.link}
                  >
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="group relative">
              {/* <input type='text' placeholder='Search' name='Serach' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary' /> */}
              <IoMdSearch
                onClick={() => setShowSearch(true)}
                className="cursor-pointer text-2xl group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
            <div className="group relative">
              <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group">
                {/* <span className='group-hover:block hidden transition-all duration-300'>Profile</span> */}
                <CgProfile className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 transition-all duration-300 shadow-md z-[11]">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-primary/30 rounded">
                  <p className="cursor-pointer hover:text-primary">
                    My Profile
                  </p>
                  <p className="cursor-pointer hover:text-primary">Orders</p>
                  <p className="cursor-pointer hover:text-primary">Logout</p>
                </div>
              </div>
            </div>
            <div>
              <Link to="/cart" className="relative">
                <FiShoppingCart className="w-6 h-6" />
                <p className="absolute right-[-5px] top-[-5px] w-4 leading-4 text-center bg-red-600 text-white aspect-square rounded-full text-[8px]">
                  {getCartCount()}
                </p>
              </Link>
            </div>
            <div className="md:hidden">
              <FaBars
                onClick={handleTogglestatus}
                className="w-6 cursor-pointer text-xl"
              />
            </div>
            <DarkMode />
          </div>
          <div
            className={`absolute top-0 bottom-0 left-0 overflow-hidden bg-white dark:bg-gray-900 dark:text-white duration-200 z-40  transition-all h-[100vh] ${
              toggleStatus ? "w-full" : "w-0"
            }`}
          >
            <div className="flex flex-col">
              <div
                onClick={handleTogglestatus}
                className="flex items-center gap-4 cursor-pointer"
              >
                <IoIosArrowBack className="h-4" />
                <p>Back</p>
              </div>
              {Menu.map((data, index) => (
                <NavLink
                  key={index}
                  onClick={handleTogglestatus}
                  className="py-2 pl-6 border hover:text-primary duration-200 cursor-pointer"
                  to={data.link}
                >
                  {data.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
