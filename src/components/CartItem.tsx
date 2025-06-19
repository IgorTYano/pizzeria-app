import { useContext } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { ShopContext } from "../context/shopContext";

const iconAmountClass =
  "cursor-pointer duration-150 hover:text-black hover:bg-amber-400";

interface CartItemProps {
  id: number;
  name: string;
  img: string;
  price: number;
  priceDiscounted?: number;
}

const CartItem = (props: CartItemProps) => {
  const shopContext = useContext(ShopContext);

  if (!shopContext) {
    return null;
  }

  const { cartItems, addToCart, removeFromCart, updateCartItemAmount } =
    shopContext;
  return (
    <div>
      <div className="m-1 flex flex-row border-1">
        <img src={props.img} alt={props.name} className="h-20" />
        <div className="flex w-full flex-col justify-center text-center">
          <h3 className="text-md font-[Fairplay] font-bold text-white">
            {props.name}
          </h3>
          <div className="text-sm font-bold text-amber-400">
            ${props.price.toFixed(2)}
          </div>
          {props.priceDiscounted && (
            <span className="text-xs text-zinc-400 line-through">
              ${props.priceDiscounted.toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex w-6 flex-col items-center justify-around border-l-1 border-l-zinc-600">
          <button
            onClick={() => addToCart(props.id)}
            className={iconAmountClass}
          >
            <IoAdd />
          </button>
          <input
            type="text"
            value={cartItems[props.id]}
            onChange={(e) =>
              updateCartItemAmount(Number(e.target.value), props.id)
            }
            className="w-5.5 text-center"
          />
          <button
            onClick={() => removeFromCart(props.id)}
            className={iconAmountClass}
          >
            <IoRemove />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
