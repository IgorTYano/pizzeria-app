import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { iconButtonClass } from "./Header";
import { ShopContext } from "../context/shopContext";
import itemData from "../data/menu-data.json";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const { cartItems, openCart, setOpenCart } = useContext(ShopContext)!;
  return (
    <div
      className={`fixed top-0 z-10 flex h-screen w-[300px] flex-col justify-between border-l border-amber-400 bg-[#191919] text-white duration-150 ${openCart ? "right-0" : "right-[-300px]"}`}
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

      <div>
        {itemData.map((item) => {
          if (cartItems[item.id] !== 0) {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                priceDiscounted={item.priceOriginal ?? undefined}
              />
            );
          }
        })}
      </div>

      <div className="m-2">
        <p className="w-full border-t text-center">Total: $</p>
        <button className="mt-2 w-full cursor-pointer border duration-150 hover:bg-white hover:text-black">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
