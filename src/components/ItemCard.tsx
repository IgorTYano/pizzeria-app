import React from "react";
import { IoAdd } from "react-icons/io5";

interface ItemCardProps {
  id: string;
  name: string;
  img: string;
  price: number;
  priceDiscounted?: number;
}

const ItemCard = (props: ItemCardProps) => {
  return (
    <div className="flex h-auto min-h-40 w-full flex-col overflow-hidden rounded-lg bg-zinc-900 shadow-lg transition-all duration-300 hover:border-amber-400 hover:shadow-xl sm:flex-row">
      <div className="h-32 w-full overflow-hidden sm:min-h-full sm:w-24">
        <img
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          src={props.img}
          alt={props.name}
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="text-md mb-1 line-clamp-2 font-[Fairplay] font-bold text-white sm:text-base md:text-xl">
          {props.name}
          <span className="m-1 text-xs text-zinc-700">{props.id}</span>
        </h3>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-sm font-bold text-amber-400 sm:text-base">
              ${props.price.toFixed(2)}
            </span>
            {props.priceDiscounted && (
              <span className="text-xs text-zinc-400 line-through">
                ${props.priceDiscounted.toFixed(2)}
              </span>
            )}
          </div>
          <button
            className="cursor-pointer rounded-sm bg-amber-500 p-2 text-sm font-medium whitespace-nowrap text-black transition-colors hover:bg-amber-400"
            aria-label={`Add ${props.name} to cart`}
          ><IoAdd /></button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
