import { useState } from "react";
import itemData from "../../data/menu-data.json";
import ItemCard from "../../components/ItemCard";

const Menu = () => {
  const [search, setSearch] = useState("");
  const filteredItems = itemData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col overflow-x-hidden bg-[#333] p-4 sm:p-6">
      <div className="mx-auto mb-6 w-full max-w-4xl px-2 text-center">
        <input
          type="text"
          placeholder="Search menu items..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded-sm border border-gray-600 bg-gray-800 p-2 text-sm text-white transition-all duration-200 focus:ring-2 focus:ring-amber-400 focus:outline-none sm:text-base"
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-2 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {filteredItems.length === 0 ? (
          <div className="col-span-full text-center text-lg text-gray-300">
            No items found. Try a different search term.
          </div>
        ) : (
          filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              priceDiscounted={item.priceOriginal ?? undefined}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;
