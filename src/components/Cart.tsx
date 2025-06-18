import React from "react";
import { IoClose } from "react-icons/io5";
import { iconButtonClass } from "./Header";

type CartProps = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart: React.FC<CartProps> = ({ openCart, setOpenCart }) => {
  return (
    <div
      className={`fixed top-0 z-10 flex h-screen w-[300px] flex-col justify-between border-l border-amber-400 bg-[#191919] text-white duration-150 ${openCart ? "right-[-300px]" : "right-0"}`}
    >
      <header className="flex items-center justify-between">
        <h1 className="ml-2 text-xl font-bold">Shopping Cart</h1>
        <button
          className={iconButtonClass}
          onClick={() => setOpenCart(!openCart)}
        >
          <IoClose />
        </button>
      </header>
      <article></article>
      <div className="m-2">
        <p className="w-full border-t text-center">Total: $</p>
        <button className="mt-2 w-full cursor-pointer border duration-150 hover:bg-white hover:text-black">
          Finish
        </button>
      </div>
    </div>
  );
};

export default Cart;
