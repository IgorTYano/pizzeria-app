import React from "react";

interface CartItemProps {
  id: number;
  name: string;
  img: string;
  price: number;
  priceDiscounted?: number;
}

const CartItem = (props: CartItemProps) => {
  return (
    <div>
      <div className="m-1 flex flex-row border-1">
        <img src={props.img} alt={props.name} className="h-20" />
        <div className="w-full flex flex-col text-center justify-center">
          <h3 className="text-md font-[Fairplay] font-bold text-white">{props.name}</h3>
          <div className="text-sm font-bold text-amber-400">
            ${props.price.toFixed(2)}
          </div>
          {props.priceDiscounted && (
            <span className="text-xs text-zinc-400 line-through">
              ${props.priceDiscounted.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
