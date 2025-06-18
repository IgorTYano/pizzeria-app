import React, { useContext } from "react";
import { IoCart, IoLogIn, IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const navLinkClass =
  "text-white m-2 p-1 duration-150 rounded-xs border-b border-b-transparent hover:bg-[#1e1e1e] hover:text-white hover:border-b-amber-400 hover:cursor-pointer";
export const iconButtonClass =
  "items-center justify-center text-white m-2 p-2 rounded-full hover:bg-[#1e1e1e] hover:text-amber-400 transition-colors hover:cursor-pointer";

let isLoggedIn: boolean = false;

const Header: React.FC = () => {
  const { openCart, setOpenCart } = useContext(ShopContext)!;
  return (
    <header className="sticky top-0 z-1 flex h-14 items-center justify-between bg-[#191919] px-4 font-[Fairplay]">
      <img src="images/logo-white.webp" alt="pizzeria logo" className="h-10" />
      <nav className="hidden md:flex md:items-center md:text-lg">
        <Link to="/" className={navLinkClass}>
          Home
        </Link>
        <Link to="/menu" className={navLinkClass}>
          Menu
        </Link>
        <Link to="/contact" className={navLinkClass}>
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-2">
        <button
          className={iconButtonClass}
          aria-label="Shopping Cart"
          onClick={() => setOpenCart(!openCart)}
        >
          <IoCart className="text-xl" />
        </button>
        <button
          className={iconButtonClass}
          aria-label={isLoggedIn ? "Logout" : "Login"}
        >
          {isLoggedIn ? (
            <IoLogOut className="text-xl" />
          ) : (
            <IoLogIn className="text-xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
